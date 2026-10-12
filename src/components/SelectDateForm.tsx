import { useState } from "react";
import Card from "./Card";
import TuileEscapeGame from "./TuileEscapeGame";

const EscapeGameMapping = {
  "palais-de-l-horreur": "Le palais de l'horreur",
  "le-taxidermiste": "Le taxidermiste",
  "le-magicien-de-paris": "Le Magicien de Paris",

}

function SelectDateForm() {
  const [day, setDay] = useState<number>(16);
  const [month, setMonth] = useState<number>(10);
  const [year, setYear] = useState<number>(2026);
  const [escapeGame, setEscapeGame] = useState<keyof typeof EscapeGameMapping | "">("");
  const [consent, setConsent] = useState<boolean>(false);

  const isDateValid = !isNaN(day) && !isNaN(month) && !isNaN(year)
    && day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 2026;
  const canSubmit = escapeGame !== "" && consent && isDateValid;

  function buildHref(): string {
    const base = `Hello ! L'escape game choisi est "${escapeGameName()}" le ${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year.toString()}`
    return encodeURIComponent(base);
  }

  function escapeGameName(): string | null {
    if(escapeGame === "") {
      return null
    }
    return EscapeGameMapping[escapeGame];
  }

  function buildWhatsAppUrl(): string {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    return isMobile
      ? `whatsapp://send?text=${buildHref()}`
      : `https://wa.me/?text=${buildHref()}`;
  }

    return (
    <>
    <h3>Formulaire</h3>
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12">
          <Card
            title="Escape Game"
            description="Sélectionne le jeu et la date qui te convient le mieux."
            detail="Anniversaire"
          >

          <p>
            Nous avec décidé de t'offrir une place pour une escape room.
            On pourrait meme dire que toi qui nous fait 🎁 🎉 cadeau de ta présence parmi nous.
          </p>

          <p>Tu as le choix parmi</p>

          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12 fr-col-md-4">
              <TuileEscapeGame
              clicked={escapeGame === "palais-de-l-horreur"}
              onClick={() => setEscapeGame("palais-de-l-horreur")}
              title={"Le palais de l'horreur"}
              url="https://deepinsideparis.fr/le-palais-de-lhorreur/"
              imageLink="https://deepinsideparis.fr/wp-content/uploads/300626-deep-new-01810-scaled.jpg"
              description="Explorez le Palais du Rire abandonné mais évitez à tout prix de croiser Monsieur Lune, le vieux clown aveugle qui squatte à l’intérieur.
Si vous le croisez, vous allez devoir être discret et ne pas faire de bruit pour passer inaperçu."
              />
            </div>
            <div className="fr-col-12 fr-col-md-4">
              <TuileEscapeGame
              clicked={escapeGame === "le-taxidermiste"}
              onClick={() => setEscapeGame("le-taxidermiste")}
              title={"Le Taxidermiste"}
              url="https://deepinsideparis.fr/le-taxidermiste/"
              imageLink="https://deepinsideparis.fr/wp-content/uploads/Taxidermiste-1.webp"
              description="Vous devrez trouver un moyen de vous retrouver seul dans la boutique pour l’explorer de fond en comble dans l’espoir de résoudre les mystères de cette disparition et de retrouver Adèle."
              />
            </div>
            <div className="fr-col-12 fr-col-md-4">
              <TuileEscapeGame
              clicked={escapeGame === "le-magicien-de-paris"}
              onClick={() => setEscapeGame("le-magicien-de-paris")}
              title={"Le magicien de Paris"}
              url="https://deepinsideparis.fr/le-magicien-de-paris/"
              imageLink="https://deepinsideparis.fr/wp-content/uploads/Magicien-de-Paris-2026-V2.webp"
              description="Vous devrez vous introduire par effraction dans son appartement, tenter de trouver l’accès à son atelier secret et voler la poudre a disparition avant qu’il ne revienne."
              />
            </div>
          </div>
          <p>{!escapeGameName() ? `${escapeGameName} est selectionné` : "Selectionne un escape game en cliquant sur une carte"}</p>
{/* 
          <fieldset
            className="fr-fieldset"
            id="storybook-form"
            aria-labelledby="storybook-form-legend storybook-form-messages"
            onChange={(e) => {setEscapeGame(e.target.id)} }
            value={escapeGame}
          >
            <legend className="fr-fieldset__legend--regular fr-fieldset__legend" id="storybook-form-legend"> Légende pour l’ensemble des éléments </legend>
            <div className="fr-fieldset__element">
              <div className="fr-radio-group">
                <input type="radio" id="palais-de-l-horreur" name="radios-group-name-0" />
                <label className="fr-label" htmlFor="palais-de-l-horreur"> Palais de l'horreur </label>
              </div>
            </div>
            <div className="fr-fieldset__element">
              <div className="fr-radio-group">
                <input type="radio" id="le-taxidermiste" name="radios-group-name-0" />
                <label className="fr-label" htmlFor="le-taxidermiste">Le taxidermiste </label>
              </div>
            </div>
            <div className="fr-fieldset__element">
              <div className="fr-radio-group">
                <input type="radio" id="le-magicien-de-paris" name="radios-group-name-0" />
                <label className="fr-label" htmlFor="le-magicien-de-paris"> Le magicien de paris </label>
              </div>
            </div>
            <div className="fr-messages-group" id="storybook-form-messages" aria-live="polite">
            </div>
          </fieldset> */}

          <fieldset className="fr-fieldset" id="date-default-1578-fieldset" role="group" aria-labelledby="date-default-1578-fieldset-legend date-default-1578-fieldset-messages">
            <legend className="fr-fieldset__legend" id="date-default-1578-fieldset-legend">
                Date de l'escape game
            </legend>
            <div className="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--number">
                <div className="fr-input-group">
                    <label className="fr-label" htmlFor="date-default-1578-bday-day">
                        Jour
                        <span className="fr-hint-text">Exemple : 16</span>
                    </label>
                    <input className="fr-input" name="day" min={1} max={31} id="date-default-1578-bday-day" type="number" value={day} onChange={(e) => setDay(parseInt(e.target.value))} />
                </div>
            </div>
            <div className="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--number">
                <div className="fr-input-group">
                    <label className="fr-label" htmlFor="date-default-1578-bday-month">
                        Mois
                        <span className="fr-hint-text">Exemple : 10</span>
                    </label>
                    <input className="fr-input" name="month" min={1} max={12} id="date-default-1578-bday-month" type="number" value={month} onChange={(e) => setMonth(parseInt(e.target.value))} />
                </div>
            </div>
            <div className="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--inline-grow fr-fieldset__element--year">
                <div className="fr-input-group">
                    <label className="fr-label" htmlFor="date-default-1578-bday-year">
                        Année
                        <span className="fr-hint-text">Exemple : 2026</span>
                    </label>
                    <input className="fr-input" name="year" min={2026} id="date-default-1578-bday-year" type="number" value={year} onChange={(e) => setYear(parseInt(e.target.value))}/>
                </div>
            </div>
            <div className="fr-messages-group" id="date-default-1578-fieldset-messages" aria-live="assertive">
            </div>
          </fieldset>

          <div className="fr-highlight" style={{marginLeft: 0}}>
            <p>En validant cette date, tu acceptes de respecter les règles suivantes :</p>
            <ul>
              <li>
                "Je le savais" n’est autorisé qu’après avoir trouvé la solution.
              </li>
              <li>
                Idem pour "Non mais ce n'est pas efficace".
              </li>
              <li>
                Les indices sont là pour aider, pas pour confirmer que tu avais raison depuis le début.
              </li>
               <li>
                Il est interdit de dire "C'est à grâce moi qu'on a gagné"
              </li>
              <li>
                Toute phrase commençant par « C’est évident » devra être suivie d’une explication claire.
              </li>
            </ul>
          </div>

          <div className="fr-checkbox-group">
            <input name="checkbox" id="checkbox-0" type="checkbox" aria-describedby="checkbox-0-messages" checked={consent} onChange={() => setConsent(!consent)} />
            <label className="fr-label" htmlFor="checkbox-0"> Moi Clement, Je consens à être la meilleure version de moi même durant l'escape game </label>
            <div className="fr-messages-group" id="checkbox-0-messages" aria-live="polite">
            </div>
          </div>

          <a
            className="fr-btn"
            role="link"
            href={canSubmit ? buildWhatsAppUrl() : undefined}
            aria-disabled={!canSubmit}
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