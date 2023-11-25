import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar'

import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private readonly snackBar: MatSnackBar) {}

  public show(
    message: string,
    action?: string,
    duration: number = 4,
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this.snackBar.open(message, action, {
      duration: duration * 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'toast',
    })
  }
}
