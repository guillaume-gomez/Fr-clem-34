function Consent() {
  return (
    <div className="fr-consent-banner">
      <h2 className="fr-h6">À propos des cookies sur nomdusite.gouv.fr</h2>
      <div className="fr-consent-banner__content">
        <p className="fr-text--sm">Bienvenue ! Nous utilisons des cookies pour améliorer votre expérience et les services disponibles sur ce site. Pour en savoir plus, visitez la page <a href="#">Données personnelles et cookies</a>. Vous pouvez, à tout moment, avoir le contrôle sur les cookies que vous souhaitez activer.</p>
      </div>
      <ul className="fr-consent-banner__buttons fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-sm">
        <li>
          <button title="Autoriser tous les cookies" type="button" className="fr-btn">Tout accepter</button>
        </li>
        <li>
          <button title="Refuser tous les cookies" type="button" className="fr-btn">Tout refuser</button>
        </li>
        <li>
          <button data-fr-opened="false" aria-controls="fr-consent-modal" title="Personnaliser les cookies" type="button" className="fr-btn fr-btn--secondary">Personnaliser</button>
        </li>
      </ul>
    </div>
  )
}

export default Consent;