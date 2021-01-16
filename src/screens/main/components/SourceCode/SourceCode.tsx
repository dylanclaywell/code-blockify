import React from 'react'
import { createUseStyles } from 'react-jss'

import TextArea from '../../../../components/TextArea'
import SyntaxHighlighter from '../SyntaxHighlighter'
import colors from '../../../../colors'

const useStyles = createUseStyles({
  root: {
    display: 'flex',
  },
  inputContainer: {
    flexBasis: '50%',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
  },
  outputContainer: {
    minWidth: 0,
    flexBasis: '50%',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
  },
  textArea: {
    overflow: 'auto',
    color: colors.gray1,
    minHeight: '40em',
    flexBasis: '100%',
    fontFamily: 'monospace',
    border: 'none',
    borderRight: `1px solid ${colors.gray6}`,
    '&:active, &:focus': {
      borderColor: colors.gray6,
    },
  },
})

type Props = {
  currentColorScheme: any
  onChangeSourceCode: (event) => void
  sourceCode: string
}

const SourceCode: React.FC<Props> = ({
  currentColorScheme,
  onChangeSourceCode,
  sourceCode,
}: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.inputContainer}>
        <h2>Input:</h2>
        <TextArea
          style={{
            background: currentColorScheme.hljs.background,
            color: currentColorScheme.hljs.color,
          }}
          styles={{ root: classes.textArea }}
          onChange={onChangeSourceCode}
          value={sourceCode}
        />
      </div>
      <div className={classes.outputContainer}>
        <h2>Output:</h2>
        <SyntaxHighlighter
          colorScheme={currentColorScheme}
          sourceCode={sourceCode}
        />
      </div>
    </div>
  )
}

export default SourceCode
