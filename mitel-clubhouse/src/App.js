import React from "react";
import "./App.css";
import { appTheme } from "./AppTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hallway from "./components/Hallway.js";
import Debug from "./Debug";
import NavBar from "./components/NavBar";
import SingleRoom from "./components/SingleRoom";
import Profile from "./components/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect,
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
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/room/:id">
            <NavBar />

            <SingleRoom />
            <button onClick={getUserMedia}>Click Me</button>
            <video autoPlay playsInline></video>
          </Route>
          <Route exact path="/">
            <NavBar />

            <Grid container justify="center">
              <Hallway />
            </Grid>
          </Route>
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
