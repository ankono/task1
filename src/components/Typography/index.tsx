import React, {FC} from 'react';
import {Typography as TypographyBase} from '@material-ui/core';

interface TypographyProps {
	children: string;
	variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
}

const Typography: FC<TypographyProps> = (props) => {
	const {
		children,
		variant
	} = props;

	return (
		<TypographyBase variant={variant}>
			{children}
		</TypographyBase>
	)

}

export default Typography;