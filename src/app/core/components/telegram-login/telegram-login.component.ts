import { DOCUMENT } from '@angular/common'

import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgZone,
  Output,
  ViewChild,
} from '@angular/core'

import { User } from '@models/user'

export type LOGIN_BUTTON_SIZE = 'medium' | 'large' | 'small'

/** Configuration for a login button */
export interface WidgetConfiguration {
  // Login button size. Default: large
  buttonStyle?: LOGIN_BUTTON_SIZE
  // Show user photo near the button. Default: true
  showUserPhoto?: boolean
  // Radius of buttons corners(0-20). Default: 20
  cornerRadius?: number
  // Request for write access. Default: false
  accessToWriteMessages?: boolean
}

interface WidgetConfig {
  src: string
  onerror: string
  onload: string
  'data-telegram-login'?: string
  'data-onauth'?: string
  'data-request-access'?: string
  'data-radius'?: string
  'data-userpic'?: string
  'data-size'?: string
}

const TELEGRAM_WIDGET_VERSION = 14
const randomSeed = parseInt(`${Math.random() * 1e7}`)

@Component({
  selector: 'app-telegram-login',
  template: `<div #scriptContainer></div>`,
})
export class TelegramLoginComponent implements AfterViewInit {
  @ViewChild('scriptContainer', { static: true }) scriptContainer:
    | ElementRef
    | undefined

  @Output() login: EventEmitter<User> = new EventEmitter<User>()
  @Output() load: EventEmitter<void> = new EventEmitter<void>()
  @Output() loadError: EventEmitter<void> = new EventEmitter<void>()

  @Input() botName: string = ''
  @Input() config?: WidgetConfiguration = {}

  private readonly document: Document

  private readonly window: Window & {
    [key: string]: any
  }

  private defaultConfigs: WidgetConfig = {
    src: `https://telegram.org/js/telegram-widget.js?${TELEGRAM_WIDGET_VERSION}`,
    'data-onauth': `onTelegramLogin${randomSeed}(user)`,
    onerror: `onTelegramWidgetLoadFail${randomSeed}()`,
    onload: `onTelegramWidgetLoad${randomSeed}()`,
  }

  constructor(private ngZone: NgZone, @Inject(DOCUMENT) document: any) {
    this.window = window
    this.document = document as Document
  }

  ngAfterViewInit() {
    const scriptAttrs = this.compileConfigs()
    const script = this.document.createElement('script')

    for (let key in scriptAttrs) {
      if (scriptAttrs.hasOwnProperty(key)) {
        script.setAttribute(key, scriptAttrs[key as keyof typeof scriptAttrs])
      }
    }

    this.window['onTelegramLogin' + randomSeed] = (data: any) =>
      this.ngZone.run(() => this.login.emit(data))
    this.window['onTelegramWidgetLoad' + randomSeed] = () =>
      this.ngZone.run(() => this.load.emit())
    this.window['onTelegramWidgetLoadFail' + randomSeed] = () =>
      this.ngZone.run(() => this.loadError.emit())

    this.scriptContainer!.nativeElement.innerHTML = ''
    this.scriptContainer!.nativeElement.appendChild(script)
  }

  private compileConfigs(): object {
    const configs = this.defaultConfigs ?? {}

    if (!this.botName || this.botName === '') {
      throw new Error('Telegram: Bot name not present!')
    }

    configs['data-telegram-login'] = this.botName

    if (this.config?.accessToWriteMessages) {
      configs['data-request-access'] = 'write'
    }

    if (this.config?.cornerRadius) {
      configs['data-radius'] = `${this.config.cornerRadius}`
    }

    if (this.config?.showUserPhoto === false) {
      configs['data-userpic'] = 'false'
    }

    if (this.config?.buttonStyle) {
      configs['data-size'] = this.config.buttonStyle
    } else {
      configs['data-size'] = 'large'
    }

    return configs
  }
}
