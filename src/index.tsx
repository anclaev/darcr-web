import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'

import { GlobalStyles } from './styles/global'

import { store } from './store'

import App from '@/app'

import * as swRegistration from './serviceWorkerRegistration'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyles />
    </Provider>
  </StrictMode>,
)

swRegistration.register()
