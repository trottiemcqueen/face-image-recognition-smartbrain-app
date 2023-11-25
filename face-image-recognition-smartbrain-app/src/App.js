import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
//import ParticlesBg from 'particles-bg';
//import logo from './logo.svg';
import './App.css';


class App extends Component {
  render () {
      return (
      
        <div className="App">
          <Navigation />
          <Logo />
                 {/* <ImageLinkForm />
                  <FaceRecognition />*/}
        </div>
        
      
    );
  }
}

export default App;
