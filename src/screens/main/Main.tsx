import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import Button from '../../components/Button'
import TextField from '../../components/TextField'
import colors from '../../colors'
import MenuItem from '../../components/MenuItem'

const useStyles = createUseStyles({
  root: {
    background: colors.backgroundGray,
  },
})

const onClick = () => {
  alert('Clicked')
}

const Main: React.FC = () => {
  const classes = useStyles()
  const [textFieldValue, setTextFieldValue] = useState<string>('')

  const onChangeTextField = (event) => {
    setTextFieldValue(event.target.value)
  }

  return (
    <div className={classes.root}>
      Main screen. Adding additional text here.
      <div>
        <TextField
          label="LABEL"
          value={textFieldValue}
          onChange={onChangeTextField}
        />
      </div>
      <div>
        <TextField
          label="LABEL"
          value={textFieldValue}
          onChange={onChangeTextField}
          variant="select"
        >
          <MenuItem value={'value1'} onClick={handleMenuItemClick}>
            Text
          </MenuItem>
        </TextField>
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
