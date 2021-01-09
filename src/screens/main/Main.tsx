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

const initialFormFields = {
  field1: '',
  field2: '',
}

const Main: React.FC = () => {
  const classes = useStyles()
  const [formFields, setFormFields] = useState(initialFormFields)

  const onChangeTextField = (name) => (event) => {
    setFormFields({ ...formFields, [name]: event.target.value })
  }

  return (
    <div className={classes.root}>
      Main screen. Adding additional text here.
      <div>
        <TextField
          label="LABEL"
          value={formFields.field1}
          onChange={onChangeTextField('field1')}
        />
      </div>
      <div>
        <TextField
          label="LABEL"
          value={formFields.field2}
          onChange={onChangeTextField('field2')}
          variant="select"
        >
          <MenuItem value={'Text'}>Text</MenuItem>
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
