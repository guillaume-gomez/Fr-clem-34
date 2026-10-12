import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@gouvfr/dsfr/dist/dsfr.min.css'
import '@gouvfr/dsfr/dist/utility/utility.min.css'
import '@gouvfr/dsfr/dist/dsfr.module.min.js'
import { HashRouter } from 'react-router'
import App from './App.tsx'

// HashRouter : les routes sont après le "#", GitHub Pages ne sert donc que index.html
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
