import { useState } from "react";
import Card from "./Card";
import Select from "./Select";

const options = [
  { value: '14/11/2026', label: 'Samedi 14 novembre' },
  { value: '21/11/2026', label: 'Samedi 21 novembre' },
]

function SelectDateForm() {
  const [date, setDate] = useState<string>();

  function buildHref(): string {
    const base = `Hello ! Voici la date que j'ai choisi est ${date}`
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
          <Select
            label="Date"
            value={date}
            onChange={setDate}
            options={options}
          />
          <a
            type="button"
            className="fr-btn"
            href={`https://wa.me/?text=${buildHref()}`}
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