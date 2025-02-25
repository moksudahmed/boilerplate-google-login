/*App.js*/

import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Profile from './Profile';
import "./App.css";
import Home from './Components/Home'
function App() {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                user == [] ? console.log(user) : console.log("Empty user")
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        console.log("data assigned");
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );

    const logOut = () => {
        googleLogout();
        setProfile([]);
    };

    return (
        <div className='profile-container'>
     
        {
          profile.length != 0 ? (
            <div>            
                <Home profileDetails={profile} login={login} logout={logOut}/>
            </div>
          ) :
            (
              <>
              
                <div className="landing-container">               
                  <div className="landing-icon">
                    <h1>🎉</h1>
                    
                  </div>
                  <h4>Sign in to create profile!</h4>
                  <button onClick={login}>⚡ Sign in with google</button>
                </div>
              </>
            )
        }
      </div>
    );
}
export default App;