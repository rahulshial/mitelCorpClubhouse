import React from 'react';
import './App.css';

function App() {

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
    <div className="App">
      <h1>MITEL CORPORATE CLUBHOUSE</h1>
      <button onClick={getUserMedia}>Click Me</button>
      <video autoPlay playsInline></video>
    </div>
  );
}

export default App;
