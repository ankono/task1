import React, { FC } from 'react';
import { TextField as TextFieldBase } from '@material-ui/core';

interface TextFieldProps {
	variant?: 'filled' | 'outlined';
	label: string;
	id: string;
	name: string;
	value?: string;
	onChange?: any;
	helperText?: any;
	type?: string;
	error?: any;
}

const TextField: FC<TextFieldProps> = (props) => {

	const {
		variant = 'outlined',
		label,
		id,
		name,
		value,
		onChange,
		helperText,
		type,
		error
	} = props;

	return (
		<TextFieldBase
			label={label}
			variant={variant}
			id={id}
			name={name}
			value={value}
			onChange={onChange}
			helperText={helperText}
			type={type}
			error={error}
		/>
	)

}

export default TextField;