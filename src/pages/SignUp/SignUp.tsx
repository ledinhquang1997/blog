import React from 'react'
import { injector } from '../../redux/injector'
import signUpReducer  from './reducers';
function SignUp() {
    return (
        <div>
            Sign Up
        </div>
    )
}

export default injector({
    sagas:[],
    reducers:[signUpReducer]
})(SignUp);
