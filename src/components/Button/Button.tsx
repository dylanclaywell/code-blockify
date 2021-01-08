import React from 'react'
import { createUseStyles } from 'react-jss'
import classnames from 'classnames'

import colors from '../../colors'

const useStyles = createUseStyles(
  {
    root: {
      padding: '1em',
      border: 'none',
      textTransform: 'uppercase',
      fontWeight: 600,
      cursor: 'pointer',
      letterSpacing: '2px',
      transition: '300ms',
      borderRadius: '4px',
    },
    contained: {
      color: colors.white,
      background: colors.primary.dark,
      '&:hover': {
        background: colors.primary.base,
      },
    },
    text: {
      background: 'none',
      color: colors.primary.dark,
      '&:hover': {
        background: colors.primary.light,
      },
    },
    secondary: {
      '&$text': {
        color: colors.secondary.dark,
        '&:hover': {
          background: colors.secondary.light,
        },
      },
      '&$contained': {
        color: colors.white,
        background: colors.secondary.dark,
        '&:hover': {
          background: colors.secondary.base,
        },
      },
    },
  },
  { name: 'Button' }
)

type Props = {
  onClick: () => void
  text: string
  variant?: 'text' | 'contained'
  color?: 'primary' | 'secondary'
}

const Button: React.FC<Props> = ({
  onClick,
  text,
  variant = 'text',
  color = 'primary',
}: Props) => {
  const classes = useStyles()
  const rootClasses = classnames(classes.root, {
    [classes.text]: variant === 'text',
    [classes.contained]: variant === 'contained',
    [classes.secondary]: color === 'secondary',
  })

  return (
    <button className={rootClasses} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
