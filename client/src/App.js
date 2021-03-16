import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddItem from './components/AddItem';
import Auth from './components/Auth';
import Event from './components/Event';
import HomePageCorpo from "./components/HomePageCorpo";
import Confettate from "./components/Confettate";
import Footer from "./components/Footer";
import Confetti from "./components/Confetti";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route path="/" exact component={HomePageCorpo}/>
            <Route path="/areapersonale" exact component={AddItem}/>
            <Route path="/auth" component={Auth}/>
            <Route path="/:event" exact component={Event}/>
            <Route path="/confettate/:event" exact component={Confettate} />
            <Route path="/confetti/:colore" exact component={Confetti}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;