import { Box, TextField, Typography, Button, Stack } from '@mui/material'
import { Link } from "react-router-dom";

function LoginForm() {
    return (
        <Box
            className='login-form'
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            p={5}
            width={'100%'}
            height={'100%'}
        >
            <Typography variant="h3" fontWeight={"bold"} alignSelf={"center"} noWrap>LOGIN</Typography>
            <form action="">
                <Stack spacing={2} width={'100%'}>
                    <TextField 
                        id="token"
                        name="token"
                        margin='normal'
                        label="Token" 
                        variant="outlined"
                        fullWidth 
                    />
                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                        width={'100%'}
                        alignItems={'center'}
                    >
                        <Button 
                            fullWidth
                            sx={{
                                marginRight: 3,
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
                        <Button 
                            fullWidth
                            sx={{
                                padding: 1,
                                borderRadius: 3,
                                fontWeight: 'bold'
                            }}
                            variant="contained"
                            color="primary"
                            >
                                Login
                        </Button>
                    </Box>
                </Stack>
            </form>
        </Box>
    )
}

export default LoginForm