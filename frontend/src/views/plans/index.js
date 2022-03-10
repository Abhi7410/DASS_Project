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
// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Plans = () => (
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <MainCard title="Free">
                <Typography
                    variant="body2"
                    style={{
                        height: '30rem',

                        // change background to light purple
                        backgroundColor: '#8245f5',
                        // increase border radius
                        borderRadius: '10px',
                        // increase font size
                        fontSize: '16.5rem',
                        // change font color to white
                        color: 'white',
                        // center text
                        textAlign: 'center'
                        // vertically center text
                    }}
                >
                    $
                </Typography>
            </MainCard>
        </Grid>
        <Grid item xs={4}>
            <MainCard title="Semi-Pro">
                <Typography
                    variant="body2"
                    style={{
                        height: '30rem',

                        // change background to purple
                        backgroundColor: '#532b9e',
                        // increase border radius
                        borderRadius: '10px',
                        // increase font size
                        fontSize: '16.5rem',
                        // change font color to white
                        color: 'white',
                        // center text
                        textAlign: 'center'
                        // vertically center text
                    }}
                >
                    $
                </Typography>
            </MainCard>
        </Grid>
        <Grid item xs={4}>
            <MainCard title="Pro">
                <Typography
                    variant="body2"
                    style={{
                        height: '30rem',

                        // change background to purple
                        backgroundColor: '#3a1c73',
                        // increase border radius
                        borderRadius: '10px',
                        // increase font size
                        fontSize: '16.5rem',
                        // change font color to white
                        color: 'white',
                        // center text
                        textAlign: 'center'
                        // vertically center text
                    }}
                >
                    $
                </Typography>
            </MainCard>
        </Grid>
    </Grid>
);

export default Plans;
