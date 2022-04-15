// material-ui
import { useState, useRef, useEffect } from 'react';
import {
    Avatar,
    Button,
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
import { useTheme } from '@mui/material/styles';
import ReactDOM from 'react-dom';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import User1 from 'assets/images/users/user-round.svg';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import App from '../../App.jsx';
// ==============================|| SAMPLE PAGE ||============================== //
// ReactDOM.render(<App />, document.getElementById('root'));
const Profile = () => {
    const theme = useTheme();
    const anchorRef = useRef(null);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <MainCard>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography
                                style={{
                                    textAlign: 'center',
                                    fontSize: '2.5rem',
                                    fontWeight: 'bold',
                                    marginBottom: '1.5rem'
                                }}
                                variant="h1"
                            >
                                Profile
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid justifyContent="center" marginTop="2rem" container spacing={2}>
                        <Grid item>
                            <App />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" direction="row" spacing={2}>
                        {/* Left Column */}
                        <Grid item xs={5}>
                            <Grid spacing={2} container direction="column" justifyContent="center">
                                <Grid item xs={12}>
                                    <TextField fullWidth style={{}} id="outlined-error" label="Name" defaultValue="John" />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField fullWidth id="outlined-error" label="Email" defaultValue="john@demomail.com" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth id="outlined-error" label="Member Since" defaultValue="Nov 10, 2021" />
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* Midspace */}
                        <Grid item xs={0.1} alignItems="center">
                            <Divider variant="center" orientation="vertical" />
                        </Grid>
                        {/* Right Column */}
                        <Grid item xs={5}>
                            <Grid spacing={2} container direction="column" justifyContent="center">
                                <Grid item xs={12}>
                                    <TextField fullWidth id="outlined-error" label="Country" defaultValue="India" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth style={{}} id="outlined-error" label="Date of Birth" defaultValue="Nov 22, 2002" />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField disabled fullWidth id="outlined-error" label="Current Plan" defaultValue="Hello World" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid justifyContent="center" marginTop="2rem" container spacing={2}>
                        <Grid item>
                            <Button width="20rem" style={{ backgroundColor: 'black', color: 'white', borderRadius: '10%' }}>
                                Edit Profile
                            </Button>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default Profile;
