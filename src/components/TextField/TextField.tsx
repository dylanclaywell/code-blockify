import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import classnames from 'classnames'

import colors from '../../colors'

type Props = {
  value: string
  label?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  styles?: {
    root?: string
    input?: string
  }
  type?: 'password' | 'email' | 'default'
  variant?: 'default' | 'select'
}

const useStyles = createUseStyles({
  label: {
    position: 'relative' as const,
  },
  labelText: {
    position: 'absolute' as const,
    top: '0.25em',
    left: '1.1em',
    fontFamily: 'sans-serif',
    lineHeight: '1em',
    transition: '200ms all',
    color: colors.gray5,
  },
  labelTextSmall: {
    top: '-1.75em',
    left: '1.1em',
    background: 'white',
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    fontSize: '0.8em',
  },
  labelTextActive: {
    color: colors.secondary.dark,
  },
  input: {
    boxSizing: 'border-box',
    borderRadius: 0,
    border: `1px solid ${colors.borderGray}`,
    padding: '1em',
    outline: 'none',
    fontFamily: 'sans-serif',
    fontSize: '1em',
    '&:active, &:focus': {
      borderColor: colors.secondary.dark,
    },
  },
  dropDownIcon: {
    position: 'absolute',
    top: 0,
    right: 10,
    color: colors.gray5,
  },
})

const TextField: React.FC<Props> = ({
  value,
  label,
  onChange,
  styles,
  type = 'default',
  variant = 'default',
}: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const classes = useStyles()
  const labelTextClassNames = classnames({
    [classes.labelText]: Boolean(label),
    [classes.labelTextSmall]: value || isFocused,
    [classes.labelTextActive]: isFocused,
  })

  const toggleFocus = () => {
    setIsFocused(!isFocused)
  }

  return (
    <div className={classnames(styles?.root)}>
      <label className={classes.label}>
        <span className={labelTextClassNames}>{label}</span>
        <input
          type={type === 'default' ? '' : type}
          className={classnames(classes.input, styles?.input)}
          value={value}
          onChange={onChange}
          onFocus={variant === 'default' ? toggleFocus : () => {}}
          onBlur={variant === 'default' ? toggleFocus : () => {}}
          readOnly
        />
        {variant === 'select' && (
          <i className={classnames('material-icons', classes.dropDownIcon)}>
            arrow_drop_down
          </i>
        )}
      </label>
    </div>
  )
}

export default TextField
