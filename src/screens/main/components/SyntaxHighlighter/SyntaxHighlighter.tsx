import React from 'react'
import SyntaxHighlighterImport from 'react-syntax-highlighter'

export type Props = {
  className?: string
  colorScheme: any
  sourceCode: string
  style?: any
}

const SyntaxHighlighter: React.FC<Props> = ({
  className,
  colorScheme,
  sourceCode,
  style,
}: Props) => {
  return (
    <SyntaxHighlighterImport
      className={className}
      customStyle={{ hljs: { padding: '1em' } }}
      language="javascript"
      style={{
        ...colorScheme,
        ...{
          hljs: {
            ...colorScheme.hljs,
            padding: '1em',
            flexBasis: '100%',
            margin: 0,
            overflow: 'auto',
          },
          ...style,
        },
      }}
    >
      {sourceCode}
    </SyntaxHighlighterImport>
  )
}

export default SyntaxHighlighter
