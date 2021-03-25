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
import Eventi from './components/Eventi';
import ConfettiAll from "./components/ConfettiAll";
import ConfettateAll from "./components/ConfettateAll";
import Portaciuccio from "./components/Portaciuccio";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route path="/" exact component={HomePageCorpo}/>
            <Route path="/areapersonale" exact component={AddItem}/>
            <Route path="/auth" component={Auth}/>
            <Route path="/eventi/:event" exact component={Event}/>
            <Route path="/confettate/:event" exact component={Confettate} />
            <Route path="/confetti/:colore" exact component={Confetti}/>
            <Route path="/eventi" exact component={Eventi}/>
            <Route path="/confetti" exact component={ConfettiAll}/>
            <Route path="/confettate" exact component={ConfettateAll}/>
            <Route path="/portaciuccio" exact component={Portaciuccio}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;