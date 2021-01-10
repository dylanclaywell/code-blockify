import React from 'react'
import { createUseStyles } from 'react-jss'

import colors from '../../colors'

const useStyles = createUseStyles({
  root: {
    background: colors.primary.dark,
    height: '2em',
    display: 'flex',
    alignItems: 'center',
    padding: '1em',
    '-webkit-app-region': 'drag',
  },
})

type Props = {
  children?: React.ReactNode
}

const Toolbar = ({ children }: Props) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

export default Toolbar
