import { Link, Route, Routes } from 'react-router';
import SelectDateForm from './components/SelectDateForm.tsx'
import SignIn from './components/SignIn.tsx'
import Consent from './components/Consent.tsx';
import NotFoundPage from './components/NotFoundPage.tsx';

function App() {
  return (
  <>
    <header role="banner" className="fr-header" id="header">
      <div className="fr-header__body">
        <div className="fr-container">
          <div className="fr-header__body-row">
            <div className="fr-header__brand fr-enlarge-link">
              <div className="fr-header__brand-top">
                <div className="fr-header__logo">
                  <p className="fr-logo"> Intitulé Non officiel </p>
                </div>
              </div>
              <div className="fr-header__service">
                <Link to="/" title="Retour à l'accueil du site - [À MODIFIER GG, s'il te plait c'etait ta seule mission - texte alternatif de l'image : nom de l'opérateur ou du site serviciel] - République Française">
                  <p className="fr-header__service-title"> Choix de date de l'escape Game </p>
                </Link>
                <p className="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="fr-container fr-my-6w" style={{minHeight: "60vh" }}>
      <Consent/>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/select-date" element={<SelectDateForm/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>

    <footer className="fr-footer" role="contentinfo" id="footer">
      <div className="fr-container">
        <div className="fr-footer__body">
          <div className="fr-footer__brand fr-enlarge-link">
            <Link id="brand-link" title="Retour à l'accueil du site - [À MODIFIER - texte alternatif de l'image : nom de l'opérateur ou du site serviciel] - République Française" to="/">
              <p className="fr-logo"> Intitulé Non officiel </p>
            </Link>
          </div>
          <div className="fr-footer__content">
            <p className="fr-footer__content-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
            <ul className="fr-footer__content-list">
              <li className="fr-footer__content-item">
                <a title="info.gouv.fr - nouvelle fenêtre" id="footer__content-link-0" href="https://info.gouv.fr" target="_blank" rel="noopener external" className="fr-footer__content-link">info.gouv.fr</a>
              </li>
              <li className="fr-footer__content-item">
                <a title="service-public.gouv.fr - nouvelle fenêtre" id="footer__content-link-1" href="https://service-public.gouv.fr" target="_blank" rel="noopener external" className="fr-footer__content-link">service-public.gouv.fr</a>
              </li>
              <li className="fr-footer__content-item">
                <a title="legifrance.gouv.fr - nouvelle fenêtre" id="footer__content-link-2" href="https://legifrance.gouv.fr" target="_blank" rel="noopener external" className="fr-footer__content-link">legifrance.gouv.fr</a>
              </li>
              <li className="fr-footer__content-item">
                <a title="data.gouv.fr - nouvelle fenêtre" id="footer__content-link-3" href="https://data.gouv.fr" target="_blank" rel="noopener external" className="fr-footer__content-link">data.gouv.fr</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fr-footer__bottom">
          <div className="fr-footer__bottom-copy">
            <p>Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank" rel="noopener external" title="Licence etalab - nouvelle fenêtre">licence etalab-2.0</a></p>
          </div>
        </div>
      </div>
    </footer>
  </>
  )
}

export default App
