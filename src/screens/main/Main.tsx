import React from 'react'

import Button from './components/Button'

const onClick = () => {
  alert('Clicked')
}

const Main: React.FC = () => {
  return (
    <div>
      Main screen.
      <Button onClick={onClick} text="Click me!" />
    </div>
  )
}

export default Main
