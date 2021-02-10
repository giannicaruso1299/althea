import React, {useEffect, useState} from 'react';
import Affiliati from "./Affiliati";
import Header from "./Header";
// import Header from "./Header";

function Confettate(event) {

    const [title, setTitle] = useState("");

    useEffect(() => {
        const myPath = event.location.pathname.slice(1);
        const firstWord = myPath.slice(11,).substr(0,1);
        const wordSplitted = myPath.slice(11,).slice(1);
        const capFirstWord = firstWord.toUpperCase();
        const myEvent = capFirstWord + wordSplitted;
        const fullString = "Le nostre confettate per " + myEvent;
        setTitle(fullString);
    },[event.location.pathname]);

    return (
      <div className="container-fluid text-center">
          <Affiliati/>
          <Header/>
          <h1 className="mt-4">{title}</h1>
      </div>
    );
}

export default Confettate;