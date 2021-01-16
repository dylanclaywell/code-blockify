import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import {
  nightOwl,
  darcula,
  gruvboxDark,
  gruvboxLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import html2canvas from 'html2canvas'
import classnames from 'classnames'

import colors from '../../colors'
import { toolbarHeight } from '../../theme'
import SyntaxHighlighter from './components/SyntaxHighlighter'
import Controls from './components/Controls'
import SourceCode from './components/SourceCode'
import SourceCodeBlockDialog from './components/SourceCodeBlockDialog'

const useStyles = createUseStyles({
  root: {
    background: colors.backgroundGray,
    marginTop: `${toolbarHeight}px`,
    overflowY: 'auto',
    height: `calc(100vh - ${toolbarHeight}px)`,
  },
  container: {
    margin: 'auto',
    padding: '2em',
  },
  locked: {
    overflow: 'hidden',
  },
})

const block = '■'

const colorSchemes = {
  darcula,
  nightOwl,
  gruvboxLight,
  gruvboxDark,
}

const Main: React.FC = () => {
  const classes = useStyles()
  const [clonedSyntaxHighlighter, setClonedSyntaxHighlighter] = useState(null)
  const [sourceCode, setSourceCode] = useState('')
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  const [currentColorSchemeName, setColorScheme] = useState<
    keyof typeof colorSchemes
  >('nightOwl')

  const currentColorScheme = colorSchemes[currentColorSchemeName]

  const changeSourceCode = (event) => {
    setSourceCode(event.target.value)
  }

  const changeColorScheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorScheme(event.target.value as keyof typeof colorSchemes)
  }

  const transformCode = () => {
    setClonedSyntaxHighlighter(
      React.cloneElement(
        <SyntaxHighlighter
          className="ClonedSyntaxHighlighter"
          colorScheme={currentColorScheme}
          sourceCode={sourceCode}
          style={{
            hljs: {
              ...currentColorScheme.hljs,
              letterSpacing: '-0.5px',
              overflow: 'none',
            },
          }}
        />
      )
    )
  }

  useEffect(() => {
    const codeBlock = document.querySelector('.ClonedSyntaxHighlighter')

    if (!codeBlock) return

    for (const child of Array.from(codeBlock.children[0].childNodes)) {
      if (child.nodeType === Node.ELEMENT_NODE) {
        ;(child as Element).innerHTML = (child as Element).innerHTML.replace(
          /\S/gm,
          block
        )
      } else if (child.nodeType === Node.TEXT_NODE) {
        child.textContent = child.textContent.replace(/\S/gm, block)
      }
    }

    setDialogIsOpen(true)

    // html2canvas(document.querySelector('.ClonedSyntaxHighlighter')).then(
    //   (canvas) => {
    //     document.body.appendChild(canvas)
    //   }
    // )
  }, [clonedSyntaxHighlighter])

  const closeDialog = () => {
    setDialogIsOpen(false)
  }

  return (
    <div
      className={classnames(classes.root, { [classes.locked]: dialogIsOpen })}
    >
      <div className={classes.container}>
        <Controls
          onTransformCode={transformCode}
          currentColorSchemeName={currentColorSchemeName}
          colorSchemeNames={Object.keys(colorSchemes)}
          onChangeColorScheme={changeColorScheme}
        />
        <SourceCode
          currentColorScheme={currentColorScheme}
          onChangeSourceCode={changeSourceCode}
          sourceCode={sourceCode}
        />
        <SourceCodeBlockDialog
          clonedSyntaxHighlighter={clonedSyntaxHighlighter}
          isOpen={dialogIsOpen}
          onClose={closeDialog}
        />
      </div>
    </div>
  )
}

export default Main
