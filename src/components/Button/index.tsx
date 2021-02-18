import React, { FC, ReactElement } from 'react';
import { Button as ButtonBase } from '@material-ui/core';

interface ButtonProps {
	variant?: 'contained' | 'outlined' | 'text';
	size: 'large' | 'medium' | 'small';
	color: 'default' | 'primary' | 'secondary';
	children: ReactElement | ReactElement[] | string | any;
	disableElevation?: boolean;
	type?: 'submit',
	fullWidth?: boolean
}

const Button: FC<ButtonProps> = (props) => {

	const {
		variant = 'contained',
		size,
		color,
		disableElevation = true,
		children,
		type,
		fullWidth = true
	} = props;

	return (
		<ButtonBase
			size={size}
			color={color}
			variant={variant}
			disableElevation={disableElevation}
			type={type}
			fullWidth={fullWidth}
		>
			{children}
		</ButtonBase>
	)
}

export default Button;