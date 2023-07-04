import { Box, TextField, Typography, Button } from '@mui/material'
import { Link } from "react-router-dom";

function LoginForm() {
    return (
        <Box
            className='login-form'
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'space-around'}
            p={5}
            width={'100%'}
            height={'100%'}
        >
            <Typography variant="h3" fontWeight={"bold"} alignSelf={"left"} noWrap>LOGIN</Typography>
            <TextField fullWidth id="token" label="Token" variant="outlined" />
            <Box
                display={'flex'}
                flexDirection={'column'}
                width={'100%'}
                alignItems={'center'}
            >
                <Button 
                    fullWidth
                    sx={{ 
                        marginTop: 3,
                        padding: 1,
                        borderRadius: 3,
                        fontWeight: 'bold'
                    }}
                    variant="contained"
                    color="primary"
                    >
                        Login
                </Button>
                <Button 
                    fullWidth
                    sx={{ 
                        marginTop: 3,
                        padding: 1,
                        borderRadius: 3,
                        fontWeight: 'bold'
                    }}
                    variant="contained"
                    color="secondary"
                    component={ Link }
                    to={'/register'}
                    >
                        Register
                </Button>
            </Box>
        </Box>
    )
}

export default LoginForm