import React from 'react';

import './style.css';

const Home = ({ profileDetails, login, logout }) =>{
    
    return (
        <div>
            <div className="wrapper">
            <h1>Welcome to the App</h1>          
                             
        </div>
            <div className="profile-details">                
             
              <img src={profileDetails.picture} alt="" className='profile-avathar' />
              <div className="profile-content">
                <h3>{profileDetails.name}</h3>
                <h5>{profileDetails.email}</h5>
              </div>   
                        
              <button className='profile-button' onClick={logout}>Logout</button>  
            </div>
            
        </div>
        
    )
}

export default Home;