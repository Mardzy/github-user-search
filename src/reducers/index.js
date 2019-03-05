import { combineReducers } from 'redux';
import user from './user';
import users from './users';
import email from './email';
import { reducer as form } from 'redux-form';


export default combineReducers({
    email,
    form,
    user,
    users
});
