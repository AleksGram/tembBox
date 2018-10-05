import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';

export default combineReducers({
    //the same as auth: auth
    auth,
    form: formReducer
});