import React, { Component } from 'react';
import clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
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
    this.setState({imageUrl: input});
    app.models.predict(clarifai.COLOR_MODEL, "https://samples.clarifai.com/face-det.jpg")
    .then(function(response) {
      console.log(response);
    },
    function(err) {
        //this was an error
      }
    );
  }


  render () {
      return (
      
        <div className="App">
          <ParticlesBg type="cobweb" 
          bg={true} 
          />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition imageUrl={this.state.imageUrl} />
        </div>
        
      
    );
  }
}

export default App;
