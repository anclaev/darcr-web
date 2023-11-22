import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'

import { GlobalStyles } from './styles/global'

import { store } from './store'

import App from '@/app'

import { AuthProvider } from '@utils/auth-provider'
import * as swRegistration from './serviceWorkerRegistration'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <App />
          <GlobalStyles />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)

swRegistration.register()
