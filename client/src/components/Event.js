import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Header from "./Header";
import Affiliati from "./Affiliati";

function Event(event) {

    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);

    let path="http://althea-bomboniere.it:5000/";
    useEffect(() => {
        fetchItems().then(r => console.log("Fatto"))
      },[]);

    const myPath = event.location.pathname.slice(1);

      const fetchItems = async () => {
          await axios.get("http://althea-bomboniere.it:5000/api/items/" + myPath)
              .then(res => {
                  console.log(res);
                  setItems(res.data);
                  setLoaded(true);
              })
              .catch(err => {
                  console.log(err);
              });
      }

    return (
        <div>
            <div className="container-fluid">
                <Affiliati/>
                <Header/>
                <h1 className="text-center mt-3 text-capitalize">{myPath}</h1>
                {(!loaded) && (
                    <Loader type="Rings" className="text-center" color="#00BFFF" height={80} width={80} />
                )}
                {/**md only**/}
                <div className="row d-md-block d-none">
                    {items.map(item => (
                        <div className="col-lg-3 col-md-4 col-sm-6 my-3">
                            <div className="flip-card ml-3">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={path + item.productImage} alt={item.name}/>
                                    </div>
                                    <div className="flip-card-back">
                                        <h2>{item.name}</h2>
                                        <hr className="mx-3"/>
                                        <p className="lead">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/**sm only**/}
                <div className="row d-block d-md-none">
                    {items.map(item => (
                        <div className="col-lg-3 col-md-4 col-sm-6 my-3">
                            <div className="flip-card ml-3">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={path + item.productImageSm} alt={item.name}/>
                                    </div>
                                    <div className="flip-card-back">
                                        <p className="lead">{item.name}</p>
                                        <hr className="mx-2"/>
                                        <small className="lead">{item.description}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Event;