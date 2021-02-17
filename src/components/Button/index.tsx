import React, {FC, ReactElement} from 'react';
import {Button as ButtonBase} from '@material-ui/core';

interface ButtonProps {
	variant?: 'contained' | 'outlined' | 'text';
	size: 'large' | 'medium' | 'small';
	color: 'default' | 'primary' | 'secondary';
	children: string;
	disableElevation?: boolean;
}

const Button: FC<ButtonProps> = (props) => {

	const {
		variant='contained',
		size,
		color,
		disableElevation = true,
		children
	} = props;

	return (
		<ButtonBase
			size={size}
			color={color}
			variant={variant}
			disableElevation={disableElevation}
		>
			{children}
		</ButtonBase>
	)
}

export default Button;