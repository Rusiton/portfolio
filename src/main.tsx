import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './providers/ThemeProvider.tsx'
import { ContactModalProvider } from './providers/ContactModalProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <ContactModalProvider>
        <App />
      </ContactModalProvider>
    </ThemeProvider>
  </StrictMode>,
)
