import React from 'react'
import { createUseStyles } from 'react-jss'

import FullScreenDialog from '../../../../components/FullScreenDialog'
import IconButton from '../../../../components/IconButton'
import colors from '../../../../colors'
import { toolbarHeight } from '../../../../theme'

const useStyles = createUseStyles({
  fullScreenDialog: {
    overflowY: 'auto',
    background: colors.gray2,
  },
  fullScreenDialogIsOpen: {
    top: `${toolbarHeight}px`,
    height: `calc(100vh - ${toolbarHeight}px)`,
    marginBottom: '30em',
  },
  iconButton: {
    margin: '1em',
    '&:hover': {
      background: colors.gray3,
    },
  },
  cloneContainer: {
    padding: '1em',
  },
})

type Props = {
  isOpen: boolean
  onClose: () => void
  clonedSyntaxHighlighter: React.ReactElement
}

const SourceCodeBlockDialog: React.FC<Props> = ({
  isOpen,
  clonedSyntaxHighlighter,
  onClose,
}: Props) => {
  const classes = useStyles()

  return (
    <FullScreenDialog
      isOpen={isOpen}
      styles={{
        root: classes.fullScreenDialog,
        isOpen: classes.fullScreenDialogIsOpen,
      }}
    >
      <>
        <IconButton
          styles={{ root: classes.iconButton }}
          name="arrow_back"
          onClick={onClose}
        />
        <div className={classes.cloneContainer}>{clonedSyntaxHighlighter}</div>
      </>
    </FullScreenDialog>
  )
}

export default SourceCodeBlockDialog
