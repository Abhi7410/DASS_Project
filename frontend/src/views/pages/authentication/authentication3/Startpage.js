import { Link } from 'react-router-dom';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Paper, Container, Divider, Grid, Stack, Typography, useMediaQuery, Button } from '@mui/material';
// import { Container, Row, Col } from 'reactstrap';
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../auth-forms/AuthLogin';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';
import image from '../../../../img/image.png';
// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Startpage = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <AuthWrapper1>
            <Grid container spacing={2}>
                <Grid item xs={6} marginTop="200px">
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <h1> </h1>
                        </Grid>
                        <Grid item xs={7}>
                            <h1>Hello,</h1>
                            <Typography variant="h1" color="textSecondary">
                                Welcome to the new way <br /> to your business.
                            </Typography>
                            <br />
                            <Typography variant="h3" color="textSecondary">
                                We are glad to see you here. Lol
                            </Typography>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Button
                                        sx={{ backgroundColor: '#006400' }}
                                        variant="contained"
                                        size="large"
                                        component={Link}
                                        to="/pages/register/register3"
                                    >
                                        Register
                                    </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button
                                        sx={{ backgroundColor: '#006400' }}
                                        variant="contained"
                                        size="large"
                                        component={Link}
                                        to="/pages/login/login3"
                                    >
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} marginTop="150px" width="100px">
                    <img src={image} alt="auth3-login-img" />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default Startpage;
