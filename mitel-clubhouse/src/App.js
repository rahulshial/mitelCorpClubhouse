import React from 'react';
import Debug from './Debug';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom"

export default function App() {

  const options = {
    video: true,
    audio: true
  }

  const handleSuccess = (stream) => {
    console.log('handle success');
    const video = document.querySelector('video');
    const videoTracks = stream.getVideoTracks();
    console.log(`Using video device: ${videoTracks[0].label}`);
    window.stream = stream; // make variable available to browser console
    video.srcObject = stream;
  }

  const getUserMedia = async (constraints) => {
      console.log('trying to click')
      try
      {
        const stream = await navigator.mediaDevices.getUserMedia(options);
        handleSuccess(stream);
      }
      catch (e) {
        console.log('error: ', e);
      }
  }

  return (
    <Router>
      <div>
        <h1>Main body to do (hallway and header)</h1>
        
      </div>

      <Switch>
        <Route path="/user/:id">
          <h2>User to do</h2>
        </Route>
        <Route path="/room/:id">
          <h2>Room to do</h2>
          <button onClick={getUserMedia}>Click Me</button>
          <video autoPlay playsInline></video>
        </Route>
      </Switch>

    </Router>
  );
}

