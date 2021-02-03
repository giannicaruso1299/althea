import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import AddItem from './components/AddItem';
import Footer from './components/Footer';
import Auth from './components/Auth';
import Event from './components/Event';
import HomePageCorpo from "./components/HomePageCorpo";
import Affiliati from "./components/Affiliati";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route path="/" exact component={HomePageCorpo}/>
            <Route path="/areapersonale" exact render = {props => (<AddItem {...props}/>)}/>
            <Route path="/auth" component={Auth}/>
            <Route path="/:event" component={Event}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;