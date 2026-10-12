import Card from "./Card";


function SignIn() {

  function submitPassword() {

  }

    return (
    <>
    <h3>Choisissez une date</h3>
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12 fr-col-md-6">
          <Card
            title="Se connecter avec son compte"
          >
          <div className="fr-input-group" id="input-group-16">
            <label className="fr-label" htmlFor="input-0"> Email </label>
            <input className="fr-input" disabled aria-describedby="input-0-messages" id="input-0" type="text" value="x3n@lapatatequifume.com"/>
            <div className="fr-messages-group" id="input-0-messages" aria-live="polite">
            </div>
          </div>
          <div className="fr-password">
            <label className="fr-password__label fr-label" htmlFor="storybook-password-input"> Mot de passe </label>
            <div className="fr-input-wrap">
              <input
                className="fr-password__input fr-input"
                autoCapitalize="off"
                autoCorrect="off"
                aria-required="true"
                name="password"
                autoComplete="current-password"
                id="storybook-password-input"
                type="password"
                value="alizeeforever"
              />
            </div>
            <div className="fr-messages-group" id="storybook-password-input-messages" aria-live="polite">
            </div>
            <div className="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
              <input aria-label="Afficher le mot de passe" id="undefined-show" type="checkbox" />
              <label className="fr--password__checkbox fr-label" htmlFor="undefined-show"> Afficher </label>
            </div>
          </div>
          <button
            type="button"
            className="fr-btn"
            onClick={submitPassword}
          >
            Valider
          </button>
          </Card>
        </div>
      </div>

      </>
    )
}

export default SignIn;