import React, { useState } from 'react';
import Box from '../Box';
import Button from '../Button';
import TextField from '../Text field';
import Typography from '../Typography';

const StoryBook = () => {

	return (
		<Box pt={1} pl={1} ml={5} mb={5} display="flex" flexDirection="column">
			<Box pt={5} mb={1} display="grid" gridRowGap="32px">
				<Box>
					<Button size="large" variant="contained" color="primary">Sign Up</Button>
					<Button size="medium" variant="contained" color="primary">Sign Up</Button>
					<Button size="small" variant="contained" color="primary">Sign Up</Button>
				</Box>
				<Box>
					<Button size="large" color="default">Sign Up</Button>
					<Button size="medium" color="default">Sign Up</Button>
					<Button size="small" color="default">Sign Up</Button>
				</Box>
				<Box>
					<Button size="large" variant="contained" color="secondary">Sign Up</Button>
					<Button size="medium" variant="contained" color="secondary">Sign Up</Button>
					<Button size="small" variant="contained" color="secondary">Sign Up</Button>
				</Box>
			</Box>
			<Box pt={5} mb={1}>
				<Box>
					<TextField label="Placeholder"/>
				</Box>
			</Box>
			<Box pt={5} mb={1} display="grid" gridRowGap="24px">
				<Typography variant="h1">Typography</Typography>
				<Typography variant="h2">Typography</Typography>
				<Typography variant="h3">Typography</Typography>
				<Typography variant="h4">Typography</Typography>
				<Typography variant="h5">Typography</Typography>
				<Typography variant="h6">Typography</Typography>
				<Typography variant="body1">Typography</Typography>
				<Typography variant="body2">Typography</Typography>
			</Box>
		</Box>
	)
}

export default StoryBook;