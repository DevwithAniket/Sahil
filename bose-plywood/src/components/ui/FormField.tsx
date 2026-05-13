import type { ComponentPropsWithoutRef } from 'react'

type InputFieldProps = ComponentPropsWithoutRef<'input'> & {
  fieldType?: 'input'
}

type TextareaFieldProps = ComponentPropsWithoutRef<'textarea'> & {
  fieldType: 'textarea'
}

type SelectFieldProps = ComponentPropsWithoutRef<'select'> & {
  fieldType: 'select'
  options: string[]
}

type FormFieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps

function FormField(props: FormFieldProps) {
  if (props.fieldType === 'textarea') {
    const { fieldType: _fieldType, className = '', ...textareaProps } = props
    return <textarea className={`form-field ${className}`} {...textareaProps} />
  }

  if (props.fieldType === 'select') {
    const { fieldType: _fieldType, options, className = '', ...selectProps } = props
    return (
      <select className={`form-field ${className}`} {...selectProps}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    )
  }

  const { fieldType: _fieldType, className = '', ...inputProps } = props
  return <input className={`form-field ${className}`} {...inputProps} />
}

export default FormField
