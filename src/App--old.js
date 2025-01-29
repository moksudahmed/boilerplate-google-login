import React, {Component} from 'react';
import Home from './Components/Student/Home';
import './App.css';
const title = 'Student Record Verification Page';


class App extends Component {
   
    render() { 
        return (
            <div>
              <div className='App-header'>
                <h1>{title}</h1>
              </div>              
               <Home />                 
            </div>
        );
    }
}
 
export default App;
