import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from 'axios';


// export const signup = ({ email, password }) => {
//     return (dispatch) => {
//
//     }
// };
// The same as------

// export const signup = ({ email, password }) => dispatch => {
//     axios.post('http://localhost:3090/signup', {
//         //email: email, password: password
//         //as the same as
//         email, password
//     })
// };
//The same as---------

export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3090/signup', formProps);

        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token );
        callback();

    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
    }
};

export const signout = () => {
    localStorage.removeItem('token');

    return {
        type: AUTH_USER,
        payload: ''
    }
};