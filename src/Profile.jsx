import React from 'react'
import Home from './Components/Home'


function Profile({ profileDetails, login, logout }) {
  //console.log(profileDetails)
  return (
    <>
      {/* <h1>React Google Login</h1> */}
      <div className='profile-container'>
     
        {
          profileDetails.length != 0 ? (
            <div>            
                <Home profileDetails={profileDetails} logout={logout}/>
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
    </>
  )
}

export default Profile