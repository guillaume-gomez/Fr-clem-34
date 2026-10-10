import { useId } from 'react'
import type { ChangeEvent } from 'react'

export type SelectOption = {
  value: string
  label: string
  disabled?: boolean
}

type SelectProps = {
  label: string
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  name?: string
  hint?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  error?: string
}

function Select({
  label,
  options,
  value,
  onChange,
  name,
  hint,
  placeholder = 'Sélectionner une option',
  disabled = false,
  required = false,
  error,
}: SelectProps) {
  const id = useId()
  const errorId = `${id}-error`

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className={`fr-select-group${error ? ' fr-select-group--error' : ''}${disabled ? ' fr-select-group--disabled' : ''}`}>
      <label className="fr-label" htmlFor={id}>
        {label}
        {hint && <span className="fr-hint-text">{hint}</span>}
      </label>
      <select
        className={`fr-select${error ? ' fr-select--error' : ''}`}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        aria-describedby={error ? errorId : undefined}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} className="fr-error-text">
          {error}
        </p>
      )}
    </div>
  )
}

export default Select
