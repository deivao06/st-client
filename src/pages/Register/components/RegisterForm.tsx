import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Typography,
    TextField,
    CircularProgress,
    MenuItem, 
    Chip,
    Button,
    Stack
} from '@mui/material'
import { Link } from "react-router-dom";
import ReplyIcon from '@mui/icons-material/Reply';
import { listFactions } from '../../../endpoints/SpaceTraders/Factions';

function RegisterForm() {
    const [factions, setFactions] = useState<any[]>([]);
    const [selectedFaction, setSelectedFaction] = React.useState('');
    const [symbol, setSymbol] = React.useState('');

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
        <Box
            className='register-form'
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            p={5}
            width={'100%'}
            height={'100%'}
        >
            <Typography variant="h3" fontWeight={"bold"} alignSelf={"center"} noWrap>REGISTER</Typography>
            <form action="">
                <Stack spacing={2} width={'100%'}>
                    <TextField 
                        id="symbol"
                        name="symbol"
                        margin='normal' 
                        label="Symbol" 
                        variant="outlined"
                        fullWidth
                        onChange={(event) => setSymbol(event.target.value as string)}
                    />
                    {factions ?
                        <TextField
                            id="faction"
                            name="faction"
                            value={selectedFaction}
                            onChange={(event) => setSelectedFaction(event.target.value as string)}
                            select
                            fullWidth
                            label="Faction"
                        >
                            {factionsMenuItens}
                        </TextField>
                        : <CircularProgress color='primary' />
                    }
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
                </Stack>
            </form>
        </Box>
            
    )
}

export default RegisterForm