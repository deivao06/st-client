import { Box, Grid, Paper, TextField, Typography, Button } from '@mui/material'
import Background from '../../components/Background'

function Page404() {
    return (
        <Background>
            <Paper sx={{
                padding: 10,
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography variant="h1" fontWeight={"bold"} color={'text.secondary'} noWrap>404</Typography>
                <Typography variant="h3" fontWeight={"bold"} noWrap>PAGE NOT FOUND</Typography>
            </Paper>
        </Background>
    )
}

export default Page404