import React from 'react'
import ReactDOM from 'react-dom'
import { createUseStyles } from 'react-jss'

import Main from './screens/main/Main'

const useStyles = createUseStyles({
  '@global': {
    html: {
      fontFamily: 'Roboto',
    },
  },
})

const App: React.FC = () => {
  useStyles()

  return (
    <div>
      <Main />
    </div>
  )
}

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}
