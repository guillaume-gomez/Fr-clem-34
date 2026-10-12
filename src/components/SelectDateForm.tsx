import { useState } from "react";
import Card from "./Card";


function SelectDateForm() {
  const [day, setDay] = useState<number>(16);
  const [month, setMonth] = useState<number>(10);
  const [year, setYear] = useState<number>(2026);
  const [consent, setConsent] = useState<boolean>(false)

  function buildHref(): string {
    const base = `Hello ! Voici la date que j'ai choisi. C'est le ${day.toString()}/${month.toString()}/${year.toString()}`
    return encodeURI(base);
  }

    return (
    <>
    <h3>Choisissez une date</h3>
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12 fr-col-md-6">
          <Card
            title="Escape Game"
            description="Sélectionne la date qui te convient le mieux."
            detail="Anniversaire"
          >
          <fieldset className="fr-fieldset" id="date-default-1578-fieldset" role="group" aria-labelledby="date-default-1578-fieldset-legend date-default-1578-fieldset-messages">
            <legend className="fr-fieldset__legend" id="date-default-1578-fieldset-legend">
                Date de naissance
                <span className="fr-hint-text">Texte de description additionnel</span>
            </legend>
            <div className="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--number">
                <div className="fr-input-group">
                    <label className="fr-label" htmlFor="date-default-1578-bday-day">
                        Jour
                        <span className="fr-hint-text">Exemple : 16</span>
                    </label>
                    <input className="fr-input" name="day" id="date-default-1578-bday-day" type="number" value={day} onChange={(e) => setDay(parseInt(e.target.value))} />
                </div>
            </div>
            <div className="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--number">
                <div className="fr-input-group">
                    <label className="fr-label" htmlFor="date-default-1578-bday-month">
                        Mois
                        <span className="fr-hint-text">Exemple : 10</span>
                    </label>
                    <input className="fr-input" name="month" id="date-default-1578-bday-month" type="number" value={month} onChange={(e) => setMonth(parseInt(e.target.value))} />
                </div>
            </div>
            <div className="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--inline-grow fr-fieldset__element--year">
                <div className="fr-input-group">
                    <label className="fr-label" htmlFor="date-default-1578-bday-year">
                        Année
                        <span className="fr-hint-text">Exemple : 2026</span>
                    </label>
                    <input className="fr-input" name="year" id="date-default-1578-bday-year" type="number" value={year} onChange={(e) => setYear(parseInt(e.target.value))}/>
                </div>
            </div>
            <div className="fr-messages-group" id="date-default-1578-fieldset-messages" aria-live="assertive">
            </div>
          </fieldset>

          <div className="fr-highlight" style={{marginLeft: 0}}>
            <p>En validant cette date, tu acceptes de respecter les règles suivantes :</p>
            <ul>
              <li>
                Je le savais » n’est autorisé qu’après avoir trouvé la solution.
              </li>
              <li>
                Idem pour "Non mais ce n'est pas efficace".
              </li>
              <li>
                Les indices sont là pour aider, pas pour confirmer que tu avais raison depuis le début.
              </li>
              <li>
                Toute phrase commençant par « C’est évident » devra être suivie d’une explication claire.
              </li>
            </ul>
          </div>

          <div className="fr-checkbox-group">
            <input name="checkbox" id="checkbox-0" type="checkbox" aria-describedby="checkbox-0-messages" checked={consent} onChange={() => setConsent(!consent)} />
            <label className="fr-label" htmlFor="checkbox-0"> Moi Clement, Je valide à être la meilleure version de moi même (meme si c'est deja tout le temps le cas) </label>
            <div className="fr-messages-group" id="checkbox-0-messages" aria-live="polite">
            </div>
          </div>

          <a
            type="button"
            className="fr-btn disabled"
            role="link"
            href={`https://wa.me/?text=${buildHref()}`}
            aria-disabled={true}
          >
            Valider
          </a>
          </Card>
        </div>
      </div>

      </>
    )
}

export default SelectDateForm;