import React from 'react'
import ReactDOM from 'react-dom'
import { createUseStyles } from 'react-jss'

import Main from './screens/main/Main'
import Toolbar from './components/Toolbar'
import IconButton from './components/IconButton'
import colors from './colors'
import { toolbarHeight, toolbarPadding } from './theme'

const useStyles = createUseStyles({
  '@global': {
    html: {
      fontFamily: 'Roboto',
      background: colors.backgroundGray,
      overflow: 'hidden',
    },
    body: {
      margin: '0',
      background: colors.backgroundGray,
      overflow: 'hidden',
    },
  },
  root: {
    background: colors.backgroundGray,
  },
  title: {
    letterSpacing: '2px',
    color: colors.white,
    fontWeight: 400,
    margin: 0,
    fontSize: '1.5em',
    paddingLeft: `${toolbarPadding}px`,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    flexGrow: 1,
    '-webkit-app-region': 'drag',
  },
  toolbar: {
    zIndex: '9999',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '4em',
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: '3em',
    height: '3em',
    color: colors.white,
    '&:hover': { background: '#474747' },
    margin: '.7em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbarContentContainer: {
    display: 'flex',
  },
})

const closeWindow = () => {
  if (window.ipcRenderer!) {
    window.ipcRenderer!.closeWindow()
  }
}

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Toolbar styles={{ root: classes.toolbar }}>
        <h1 className={classes.title}>Code Blockify</h1>
        <IconButton
          onClick={closeWindow}
          name="close"
          styles={{ root: classes.iconButton }}
        />
      </Toolbar>
      <Main />
    </div>
  )
}

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}
