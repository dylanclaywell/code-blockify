import React from 'react'

import Button from '../../components/Button'

const onClick = () => {
  alert('Clicked')
}

const Main: React.FC = () => {
  return (
    <div>
      Main screen. Adding additional text here.
      <Button onClick={onClick} variant="contained" text="Click" />
    </div>
  )
}

export default Main
