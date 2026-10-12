import type { ReactNode } from 'react'

type CardProps = {
  title: string
  description?: ReactNode
  detail?: string
  children?: ReactNode
}

function Card({
  title,
  description,
  detail,
  children,
}: CardProps) {
  
  return (
    <div className={"fr-card"}>
      <div className="fr-card__body">
        <div className="fr-card__content">
          <h3 className="fr-card__title">{title}</h3>
          {description && <p className="fr-card__desc">{description}</p>}
          {detail && (
            <div className="fr-card__start">
              <p className="fr-card__detail">{detail}</p>
            </div>
          )}
        </div>
        <div className='fr-card__footer' style={{display:"flex", flexDirection: "column", gap: 20}}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card
