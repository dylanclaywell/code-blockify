import React from 'react'
import ReactDOM from 'react-dom'

import Main from './screens/main/Main'

const App: React.FC = () => {
  return (
    <div>
      <Main />
    </div>
  )
}

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}
