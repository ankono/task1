import React, {FC} from 'react';
import Box from '../Box';
import Button from '../Button';
import TextField from '../Text field';
import Typography from '../Typography';


const SignUp = () => {

    return (
        <Box>
            <Box>
                <Typography variant="h2">
                    Sign up to set your brand up for success
                </Typography>
            </Box>
            <Box>
                <Button size="large" variant="contained" color="primary">Sign up with Google</Button>
                <Button size="large" variant="contained" color="secondary">Sign up with Microsoft</Button>
            </Box>
        </Box>
    )

}

export default SignUp;