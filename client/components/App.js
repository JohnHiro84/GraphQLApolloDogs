import React from 'react';
import { Route, Switch } from "react-router-dom";
import DogIndex from "./dogs/DogIndex";
import DogDetail from "./dogs/DogDetail";
import ToyIndex from "./toys/ToyIndex";
import ToyDetail from "./toys/ToyDetail";


const App = () =>(
  <div>
    <Switch>
    <Route exact path="/dogs/:dogId" component={DogDetail} />
      <Route exact path="/toys" component={ToyIndex} />
      <Route exact path="/toys/:toyId" component={ToyDetail} />

      <Route exact path="/" component={DogIndex} />
    </Switch>
  </div>

);

export default App;
