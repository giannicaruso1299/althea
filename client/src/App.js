import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import AddItem from './components/AddItem';
import Footer from './components/Footer';
import Auth from './components/Auth';
import Laurea from './components/Laurea';
import HomePageCorpo from "./components/HomePageCorpo";
import Affiliati from "./components/Affiliati";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Affiliati/>
          <Switch>
            <Route path="/" exact component={HomePageCorpo}/>
            <Route path="/areapersonale" exact render = {props => (<AddItem {...props}/>)}/>
            <Route path="/auth" component={Auth}/>
            <Route path="/laurea" component={Laurea}/>
          </Switch>
        </div>
        <div id="footer">
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;