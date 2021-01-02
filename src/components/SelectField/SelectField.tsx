import React from 'react'

import TextField from '../TextField'

type Props = {
  value: string
  label?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  styles?: {
    root?: string
    input?: string
  }
}

const SelectField: React.FC<Props> = ({
  value,
  label,
  onChange,
  styles,
}: Props) => {
  return (
    <TextField
      value={value}
      label={label}
      onChange={onChange}
      styles={styles}
    />
  )
}

export default SelectField
