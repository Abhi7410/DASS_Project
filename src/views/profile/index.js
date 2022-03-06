// material-ui
import { useState, useRef, useEffect } from 'react';
import {
    Avatar,
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
// project imports
import MainCard from 'ui-component/cards/MainCard';
import User1 from 'assets/images/users/user-round.svg';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// ==============================|| SAMPLE PAGE ||============================== //

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
                        <Grid item xs={12}>
                            <Avatar
                                src={User1}
                                sx={{
                                    ...theme.typography.mediumAvatar,
                                    // margin: '8px 0 8px 8px !important',
                                    cursor: 'pointer',
                                    width: '10rem',
                                    height: 'auto',
                                    display: 'block',
                                    margin: '0 auto',
                                    marginBottom: '4rem'
                                }}
                                ref={anchorRef}
                                // aria-controls={open ? 'menu-list-grow' : undefined}
                                // aria-haspopup="true"
                                color="inherit"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center">
                                <Grid item xs={3}>
                                    <TextField style={{}} id="outlined-error" label="Name" defaultValue="Hello World" />
                                </Grid>
                                <Grid item xs={2} />
                                <Grid item xs={3}>
                                    <TextField id="outlined-error" label="Email" defaultValue="Hello World" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center">
                                <Grid item xs={3}>
                                    <TextField style={{}} id="outlined-error" label="Join Date" defaultValue="Hello World" />
                                </Grid>
                                <Grid item xs={2} />
                                <Grid item xs={3}>
                                    <TextField id="outlined-error" label="Current Plan" defaultValue="Hello World" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center">
                                <Grid item xs={3}>
                                    <TextField style={{}} id="outlined-error" label="Country" defaultValue="Hello World" />
                                </Grid>
                                <Grid item xs={2} />
                                <Grid item xs={3}>
                                    <TextField id="outlined-error" label="Date of Birth" defaultValue="Hello World" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default Profile;
