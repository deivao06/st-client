import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

function Login() {
  return (
    <Box className='background' sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Paper sx={{
            width: '80%',
            height: '90%'
        }}>
            <Grid
                className="form-container" 
                container
                height={'100%'}
                boxShadow={3}
                display={'flex'}
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                    ':hover': {
                        boxShadow: 10,
                    },
                }}
            >
                <Grid item xs={4} height={'100%'}>
                    <Typography variant="h3" padding={3} fontWeight={"bold"} alignSelf={"left"} noWrap>NOME/LOGO</Typography>
                </Grid>
                <Grid item xs={9} height={'100%'}>

                </Grid>
            </Grid>
        </Paper>
    </Box>
  )
}

export default Login