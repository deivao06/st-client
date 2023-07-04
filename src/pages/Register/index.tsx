import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, TextField, Typography, Button, FormControl, MenuItem, Chip, CircularProgress } from '@mui/material'
import { Link } from "react-router-dom";
import ReplyIcon from '@mui/icons-material/Reply';
import { listFactions } from '../../endpoints/SpaceTraders/Factions';

function Register() {
    const [factions, setFactions] = useState<any[]>([]);
    const [selectedFaction, setSelectedFaction] = React.useState('');

    useEffect(() => {
        listFactions().then(factions => setFactions(factions));
    }, []);

    const factionsMenuItens = factions.map((faction, index) => (
        <MenuItem key={index} value={faction.symbol}>
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                width={'100%'}
            >
                {faction.name}
                <Chip color='primary' label={faction.symbol}></Chip>
            </Box>
        </MenuItem>
    ))

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
                    className='form-container' 
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
                        <Box
                            className='register-form'
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                            justifyContent={'space-around'}
                            p={5}
                            width={'100%'}
                            height={'100%'}
                        >
                            <Typography variant="h3" fontWeight={"bold"} alignSelf={"left"} noWrap>REGISTER</Typography>
                            <FormControl fullWidth>
                                <TextField id="symbol" margin='normal' label="Symbol" variant="outlined" />
                                {factions ?
                                    <TextField
                                        id="faction"
                                        value={selectedFaction}
                                        onChange={(event) => setSelectedFaction(event.target.value as string)}
                                        select
                                        label="Faction"
                                    >
                                        {factionsMenuItens}
                                    </TextField>
                                    : <CircularProgress color='primary' />
                                }
                            </FormControl>
                            <Box
                                display={'flex'}
                                flexDirection={'row'}
                                width={'100%'}
                                alignItems={'center'}
                            >
                                <Button
                                    sx={{ 
                                        marginRight: 3,
                                        padding: 1,
                                        borderRadius: 3,
                                        fontWeight: 'bold'
                                    }}
                                    variant="contained"
                                    color="secondary"
                                    component={ Link }
                                    to={'/login'}
                                    >
                                        <ReplyIcon />
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
                                        REGISTER
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={8} className="form-container-image" sx={{
                        height: '100%',
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 80 80\' width=\'80\' height=\'80\'%3E%3Cg fill=\'%230ef6cc\' fill-opacity=\'0.10\'%3E%3Cpath d=\'M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z\' opacity=\'.5\'%3E%3C/path%3E%3Cpath d=\'M15 15h50l-5 5H20v40l-5 5V15zm0 50h50V15L80 0v80H0l15-15zm32.07-32.07l3.54-3.54A15 15 0 0 1 29.4 50.6l3.53-3.53a10 10 0 1 0 14.14-14.14zM32.93 47.07a10 10 0 1 1 14.14-14.14L32.93 47.07z\'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")',
                        bgcolor: "#3a4f50",
                        boxShadow: 3
                    }}>
                        <Box
                            width={'100%'}
                            height={'100%'}
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <Box component='img' alt='Logo' src='images/logo.png' sx={{maxWidth: '100%'}} />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

export default Register