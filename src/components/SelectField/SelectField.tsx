import React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'

import TextField from '../TextField'
import colors from '../../colors'

const useStyles = createUseStyles({
  icon: {
    color: colors.gray5,
  },
  root: {
    position: 'relative',
  },
})

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
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TextField
        value={value}
        label={label}
        onChange={onChange}
        styles={styles}
      />
      <i className={classnames('material-icons', classes.icon)}>
        arrow_drop_down
      </i>
    </div>
  )
}

export default SelectField
