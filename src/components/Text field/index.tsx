import React, {FC} from 'react';
import {TextField as TextFieldBase} from '@material-ui/core';

interface TextFieldProps {
	variant?: 'filled' | 'outlined';
	label: string;
}

const TextField: FC<TextFieldProps> = (props) => {

	const {
		variant='filled',
		label,
		children
	} = props;

	return (
		<TextFieldBase label={label} variant={variant}>
		</TextFieldBase>
	)

}

export default TextField;