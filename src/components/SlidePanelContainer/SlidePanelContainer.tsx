import React from 'react'
import { createUseStyles } from 'react-jss'

type Props = {
  currentContainer: string
  children: React.ReactNode
}

const useStyles = createUseStyles({
  root: {},
})

const SlidePanelContainer: React.FC<Props> = ({
  currentContainer,
  children,
}: Props) => {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}

export default SlidePanelContainer
