import React from 'react'
import ReactDOM from 'react-dom'
import { createUseStyles } from 'react-jss'

import Main from './screens/main/Main'
import Toolbar from './components/Toolbar'
import colors from './colors'

const useStyles = createUseStyles({
  '@global': {
    html: {
      fontFamily: 'Roboto',
      background: colors.backgroundGray,
    },
    body: {
      margin: '0',
      background: colors.backgroundGray,
    },
  },
  root: {
    background: colors.backgroundGray,
  },
  title: {
    color: colors.white,
    fontWeight: 400,
    margin: 0,
    fontSize: '1.5em',
  },
})

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Toolbar>
        <h1 className={classes.title}>YTDLUI</h1>
      </Toolbar>
      <Main />
    </div>
  )
}

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}
