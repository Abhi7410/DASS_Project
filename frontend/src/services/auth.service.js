import axios from 'axios';
/* eslint-disable */

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};
export default {
    register,
    login,
    logout,
    getCurrentUser
};
