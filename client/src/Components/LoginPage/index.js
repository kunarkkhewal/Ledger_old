import React, {useState} from "react";
import Signup from "../SignupPage";
import Encrypt from '../../Utils/encrypt';
import Axios from 'axios';
import {Route} from 'react-router-dom';

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const postDataRequest = credentialData => {
        Axios.post("http://localhost:5005/", credentialData)
            .then(data => {
                console.log(" --------- returning data => ", data)
            })
            .catch(error => {
                console.log("----- DATA SAVE OPERATION FAILED ----- ", error)
            })
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        event.target.reset();
        const credentialData = {
            username,
            password
        }
        let token = Encrypt(credentialData);
        postDataRequest({username, token});
    }
    
    const handleUsernameChange = event => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleSignup = event => {
        history.push('/signup')
    }

    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <input onChange={handleUsernameChange} type="text" name="username" className="username" placeholder="Enter Username"/>
                <input onChange={handlePasswordChange} type="password" name="password" className="password" placeholder="Enter Password"/>
                <p>OR Signup</p>
                {/* <button type="button" onClick = {handleSignup}>SIGNUP</button> */}
                <Route render={({ history}) => (
                    <button
                    type='button'
                    onClick={() => { window.history.push('/signup') }}
                    >
                    Click Me!
                    </button>
                )} />
                {/* <Signup/> */}
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default LoginPage;