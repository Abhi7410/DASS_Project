// material-ui
import { styled } from '@mui/material/styles';
// import background from '../../../img/placeholder.jpg';
import background from '../../../img/placeholder.jpeg';
import Google from 'assets/images/icons/social-google.svg';

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const AuthWrapper1 = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    backgroundImage: `url(${background})`,
    minHeight: '100vh',
    width: '100%',
    backgroundPosition: '50%',
    backgroundSize: 'cover'
}));

export default AuthWrapper1;
