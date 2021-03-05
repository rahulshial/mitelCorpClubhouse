import React from "react";
import "./App.css";
import { appTheme } from "./AppTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hallway from "./components/Hallway.js";
import Debug from "./Debug";
import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function App() {
  const options = {
    video: true,
    audio: true,
  };

  const handleSuccess = (stream) => {
    const video = document.querySelector("video");
    window.stream = stream; // make variable available to browser console
    video.srcObject = stream;
  };

  const getUserMedia = async (constraints) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(options);
      handleSuccess(stream);
    } catch (e) {
      console.log("error: ", e);
    }
  };

  return (
    <Router>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <NavBar />
        <Grid container justify="center">
          <Hallway />
        </Grid>
      </ThemeProvider>

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
