import React, { Component } from 'react';
import clarifai = require('clarifai');
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import './App.css';


const app = new clarifai.App({
  PAT: ''
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
  }
  render () {
      return (
      
        <div className="App">
          <ParticlesBg type="cobweb" bg={true} />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}/>
          <clarifai />
                {/*<FaceRecognition />*/}
        </div>
        
      
    );
  }
}

export default App;
