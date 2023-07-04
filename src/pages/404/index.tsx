import { Box, Grid, Paper, TextField, Typography, Button } from '@mui/material'

function Page404() {
    return (
        <Box className='background' sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Paper sx={{
                padding: 10,
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 80 80\' width=\'80\' height=\'80\'%3E%3Cg fill=\'%230ef6cc\' fill-opacity=\'0.10\'%3E%3Cpath d=\'M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z\' opacity=\'.5\'%3E%3C/path%3E%3Cpath d=\'M15 15h50l-5 5H20v40l-5 5V15zm0 50h50V15L80 0v80H0l15-15zm32.07-32.07l3.54-3.54A15 15 0 0 1 29.4 50.6l3.53-3.53a10 10 0 1 0 14.14-14.14zM32.93 47.07a10 10 0 1 1 14.14-14.14L32.93 47.07z\'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")',
                bgcolor: "#3a4f50",
                boxShadow: 3
            }}>
                <Grid
                    container
                    height={'100%'}
                    display={'flex'}
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Grid item xs={6} height={'100%'}>
                        <Box component='img' alt='Logo' src='images/logo.png' sx={{maxWidth: '100%'}} />
                    </Grid>
                    <Grid item xs={6} height={'100%'}>
                        <Typography variant="h3" fontWeight={"bold"} alignSelf={"left"} noWrap>PAGE NOT FOUND</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

export default Page404