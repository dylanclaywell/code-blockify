import React from 'react'
import { createUseStyles } from 'react-jss'
import classnames from 'classnames'

import colors from '../colors'

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
    },
    contained: {
      color: colors.white,
      background: colors.secondaryRed,
      '&:hover': {
        background: colors.primaryRed,
      },
    },
    text: {
      color: colors.darkRed,
      background: 'none',
      '&:hover': {
        background: colors.lightRed,
      },
    },
  },
  { name: 'Button' }
)

type Props = {
  onClick: () => void
  text: string
  variant?: 'text' | 'contained'
}

const Button: React.FC<Props> = ({
  onClick,
  text,
  variant = 'text',
}: Props) => {
  const classes = useStyles()
  const rootClasses = classnames(classes.root, {
    [classes.text]: variant === 'text',
    [classes.contained]: variant === 'contained',
  })

  return (
    <button className={rootClasses} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
