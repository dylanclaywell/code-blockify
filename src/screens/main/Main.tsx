import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import Button from '../../components/Button'
import TextField from '../../components/TextField'
import colors from '../../colors'
import SlidePanelContainer from '../../components/SlidePanelContainer'
import SlidePanel from '../../components/SlidePanel'

const useStyles = createUseStyles({
  root: {
    background: colors.backgroundGray,
    maxWidth: '40em',
    padding: '2em',
    margin: 'auto',
  },
  textField: {
    margin: '1em 0',
  },
  input: {
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  thumbnail: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  thumbnailContainer: {
    width: '100%',
    position: 'relative',
    paddingTop: '56.25%',
  },
  slidePanelContainer: {},
  slidePanel: {},
})

const onClick = () => {
  alert('Clicked')
}

const initialFormFields = {
  url: '',
}

const Main: React.FC = () => {
  const classes = useStyles()
  const [thumbnailUrl, setThumbnailUrl] = useState('')
  const [currentPanel, setCurrentPanel] = useState('first')
  const [formFields, setFormFields] = useState(initialFormFields)

  const onChangeTextField = (name) => (event) => {
    setFormFields({ ...formFields, [name]: event.target.value })
  }

  const setPanel = (name: string) => () => {
    setCurrentPanel(name)
  }

  return (
    <div className={classes.root}>
      <SlidePanelContainer currentPanelName={currentPanel}>
        <SlidePanel name="first">
          <h1>Please enter a URL to download from.</h1>
          <TextField
            label="URL"
            value={formFields.url}
            onChange={onChangeTextField('url')}
            styles={{ root: classes.textField, input: classes.input }}
          />
          <div className={classes.buttonContainer}>
            <Button onClick={setPanel('second')} variant="contained">
              Submit
            </Button>
          </div>
        </SlidePanel>
        <SlidePanel name="second">
          <Button onClick={setPanel('first')} variant="contained">
            <i className="material-icons">keyboard_arrow_left</i>Back
          </Button>
          <p>Next content</p>
        </SlidePanel>
      </SlidePanelContainer>
    </div>
  )
}

export default Main
