import React from 'react'
import { createUseStyles } from 'react-jss'

import MenuItem from '../../../../components/MenuItem'
import TextField from '../../../../components/TextField'
import Button from '../../../../components/Button'

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1em',
  },
  button: {},
})

type Props = {
  onChangeColorScheme: (event: React.ChangeEvent<HTMLInputElement>) => void
  currentColorSchemeName: string
  colorSchemeNames: string[]
  onTransformCode: () => void
}

const Controls: React.FC<Props> = ({
  onChangeColorScheme,
  currentColorSchemeName,
  colorSchemeNames,
  onTransformCode,
}: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TextField
        label="Style"
        variant="select"
        value={currentColorSchemeName}
        onChange={onChangeColorScheme}
      >
        {colorSchemeNames.map((name) => (
          <MenuItem key={name} value={name}>
            <span>{name}</span>
          </MenuItem>
        ))}
      </TextField>
      <Button onClick={onTransformCode} styles={{ root: classes.button }}>
        Transform
      </Button>
    </div>
  )
}

export default Controls
