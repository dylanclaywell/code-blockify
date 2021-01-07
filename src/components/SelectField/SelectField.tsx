import React from 'react'
import DropDownArrow from '@material-ui/icons/ArrowDropDown'

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
    <>
      <TextField
        value={value}
        label={label}
        onChange={onChange}
        styles={styles}
      />
      <DropDownArrow />
    </>
  )
}

export default SelectField
