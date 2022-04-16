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
import axios from 'axios';
import { format } from 'date-fns';
// ==============================|| SAMPLE PAGE ||============================== //
// ReactDOM.render(<App />, document.getElementById('root'));

const Profile = () => {
    const theme = useTheme();
    const anchorRef = useRef(null);
    const [fname, setfName] = useState('');
    const [email, setEmail] = useState('');
    const [lname, setlName] = useState('');
    const [regDate, setRegDate] = useState('');

    const onChangeFName = (event) => {
        setfName(event.target.value);
    };

    const onChangeRegDate = (event) => {
        setRegDate(event.target.value);
    };

    const onChangeLName = (event) => {
        setlName(event.target.value);
    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const editProfile = (event) => {
        const newProfile = {
            fname: fname,
            lname: lname,
            email: email
        };
        console.log(newProfile);
        axios
            .post('http://localhost:4000/user/update', newProfile, { headers: { 'x-access-token': localStorage.getItem('user') } })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        axios
            .get('http://localhost:4000/user/get_details', { headers: { 'x-access-token': localStorage.getItem('user') } })
            .then((response) => {
                console.log(response.data);
                setfName(response.data.fname);
                setlName(response.data.lname);
                setEmail(response.data.email);
                setRegDate(response.data.reg_date);
            })
            .catch((err) => console.log(err));
    }, []);

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
                            <Grid spacing={2} container direction="column" justifyContent="center" marginTop="2rem">
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        style={{}}
                                        id="outlined-error"
                                        label="First Name"
                                        value={fname}
                                        onChange={onChangeFName}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField fullWidth id="outlined-error" label="Email" value={email} onChange={onChangeEmail} />
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* Midspace */}
                        <Grid item xs={0.1} alignItems="center">
                            <Divider variant="center" orientation="vertical" />
                        </Grid>
                        {/* Right Column */}
                        <Grid item xs={5}>
                            <Grid spacing={2} container direction="column" justifyContent="center" marginTop="2rem">
                                <Grid item xs={12}>
                                    <TextField fullWidth id="outlined-error" label="Last Name" value={lname} onChange={onChangeLName} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="outlined-error"
                                        label="Member Since"
                                        value={regDate}
                                        inputProps={{ readOnly: true }}
                                        disabled
                                        onChange={onChangeRegDate}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid justifyContent="center" marginTop="2rem" container spacing={2}>
                        <Grid item>
                            <Button
                                width="20rem"
                                onClick={editProfile}
                                style={{ backgroundColor: 'black', color: 'white', borderRadius: '10%' }}
                            >
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
