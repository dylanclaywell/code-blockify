import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import classnames from 'classnames'

import colors from '../colors'

type Props = {
	value: string
	label?: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	styles?: {
		root?: string
		input?: string
	}
	type?: 'password' | 'email' | 'default'
}

const useStyles = createUseStyles({
	label: {
		position: 'relative' as const,
	},
	labelText: {
		position: 'absolute' as const,
		top: '0.25em',
		left: '1.1em',
		fontFamily: 'sans-serif',
		lineHeight: '1em',
		transition: '200ms all',
		color: colors.gray5,
	},
	labelTextSmall: {
		top: '-1.75em',
		left: '1.1em',
		background: 'white',
		paddingLeft: '0.5em',
		paddingRight: '0.5em',
		fontSize: '0.8em',
	},
	labelTextActive: {
		color: '#0971B3',
	},
	input: {
		boxSizing: 'border-box',
		borderRadius: 0,
		border: `1px solid ${colors.borderGray}`,
		padding: '1em',
		outline: 'none',
		fontFamily: 'sans-serif',
		fontSize: '1em',
		'&:active, &:focus': {
			borderColor: '#0971B3',
		},
	},
})

const TextField: React.FC<Props> = ({
	value,
	label,
	onChange,
	styles,
	type = 'default',
}: Props) => {
	const [isFocused, setIsFocused] = useState<boolean>(false)
	const classes = useStyles()
	const labelTextClassNames = classnames({
		[classes.labelText]: true,
		[classes.labelTextSmall]: value || isFocused,
		[classes.labelTextActive]: isFocused,
	})

	const toggleFocus = () => {
		setIsFocused(!isFocused)
	}

	return (
		<div className={classnames(styles?.root)}>
			<label className={classes.label}>
				<span className={labelTextClassNames}>{label}</span>
				<input
					type={type === 'default' ? '' : type}
					className={classnames(classes.input, styles?.input)}
					value={value}
					onChange={onChange}
					onFocus={toggleFocus}
					onBlur={toggleFocus}
				/>
			</label>
		</div>
	)
}

export default TextField
