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
        </Route>
      </Switch>

    </Router>
  );
}

