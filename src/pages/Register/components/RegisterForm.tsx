import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Typography, 
    FormControl, 
    TextField,
    CircularProgress,
    MenuItem, 
    Chip,
    Button
} from '@mui/material'
import { Link } from "react-router-dom";
import ReplyIcon from '@mui/icons-material/Reply';
import { listFactions } from '../../../endpoints/SpaceTraders/Factions';

function RegisterForm() {
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
    )
}

export default RegisterForm