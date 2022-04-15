// material-ui

import {
    Drawer,
    Fab,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    Radio,
    RadioGroup,
    Slider,
    Tooltip,
    Typography
} from '@mui/material';

import Box from '@mui/material/Box';
// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const bull = (
    <Box component="span" sx={{ display: 'inline-block', mx: '15px', transform: 'scale(0.8)' }}>
        •
    </Box>
);

const Plans = () => (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <MainCard
                title={
                    <Typography variant="h1" alignContent="center">
                        Want help using our product?
                    </Typography>
                }
            >
                <Typography>
                    <h2>
                        <b>Workflow: </b>
                    </h2>
                    <h4>Our application uses just one picture to generate a video which can be lip synced with any audio of choice</h4>
                    <h4>
                        We have made our user interface in a very helpful manner - We give the option to use a picture or video suggested by
                        us
                    </h4>
                </Typography>
            </MainCard>
        </Grid>
    </Grid>
);

export default Plans;
