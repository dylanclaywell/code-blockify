import React from 'react'

import Button from '../../components/Button'
import TextField from '../../components/TextField'

const onClick = () => {
  alert('Clicked')
}

const Main: React.FC = () => {
  return (
    <div>
      Main screen. Adding additional text here.
      <div>
        <TextField label="LABEL" />
      </div>
      <div>
        <Button
          onClick={onClick}
          variant="contained"
          color="primary"
          text="Click"
        />
        <Button onClick={onClick} variant="text" color="primary" text="Click" />
        <Button
          onClick={onClick}
          variant="contained"
          color="secondary"
          text="Click"
        />
        <Button
          onClick={onClick}
          variant="text"
          color="secondary"
          text="Click"
        />
      </div>
    </div>
  )
}

export default Main
