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
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';

// ==============================|| SAMPLE PAGE ||============================== //

const Image = () => (
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <MainCard title="Choose Image">
                <Typography
                    variant="body2"
                    style={{
                        // change background to light purple
                        backgroundColor: 'transparent',
                        // increase border radius
                        borderRadius: '10px',
                        // increase font size
                        fontSize: '16.5rem',
                        // change font color to white
                        color: 'grey',
                        // center text
                        textAlign: 'center'
                        // vertically center text
                    }}
                >
                    +
                </Typography>
            </MainCard>
        </Grid>
        <Grid item xs={8}>
            <MainCard title="Image Details">
                <Typography variant="body2" container spacing={2}>
                    <Grid item xs={12} style={{ margin: 15 }}>
                        <TextField fullWidth id="outlined-error" label="Name" defaultValue="Newscaster_1" />
                    </Grid>
                    <Grid item xs={12} style={{ margin: 15 }}>
                        <TextField fullWidth id="outlined-error" label="Purpose" defaultValue="Lip-Syncing" />
                    </Grid>
                    <Grid item xs={12} style={{ margin: 15 }}>
                        <TextField fullWidth id="outlined-error" helperText="Upload date" type="date" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} style={{ margin: 15 }}>
                        <TextField fullWidth id="outlined-error" label="Extra Field" defaultValue="Hello World" />
                    </Grid>
                </Typography>
            </MainCard>
        </Grid>
    </Grid>
);

export default Image;
