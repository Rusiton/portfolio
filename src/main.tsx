import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './providers/ThemeProvider.tsx'
import { ContactModalProvider } from './providers/ContactModalProvider.tsx'

import './index.css'
import './utils/i18n'

import App from './App.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <ContactModalProvider>
        <App />
      </ContactModalProvider>
    </ThemeProvider>
  </StrictMode>,
)
