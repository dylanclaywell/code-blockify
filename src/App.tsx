import React from 'react'
import ReactDOM from 'react-dom'
import { createUseStyles } from 'react-jss'

import Main from './screens/main/Main'
import colors from './colors'

const useStyles = createUseStyles({
  '@global': {
    html: {
      fontFamily: 'Roboto',
      background: colors.backgroundGray,
    },
    body: {
      background: colors.backgroundGray,
    },
  },
  root: {
    background: colors.backgroundGray,
  },
})

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Main />
    </div>
  )
}

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}
