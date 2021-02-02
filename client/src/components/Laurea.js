import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Header from "./Header";
import Affiliati from "./Affiliati";

function Laurea() {

    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);

    var path="http://althea-bomboniere.it:5000/";
    useEffect(() => {
        fetchItems();
      },[]);

      const fetchItems = async () => {
          await axios.get("http://althea-bomboniere.it:5000/api/items/laurea")
            .then(res => {
                setItems(res.data);
                console.log(res.data[0].productImage);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
            });
      }

    return (
        <div>
            <Affiliati/>
            <Header/>
            <div className="container" id="laurea">
                <h1 className="text-center mt-3">Laurea</h1>
                {(!loaded) && (
                    <Loader type="Rings" className="text-center" color="#00BFFF" height={80} width={80} />
                )}
                <div className="row">
                    {items.map(item => (
                        <div className="col-lg-3 col-md-4 col-sm-6 my-3">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={path+item.productImage} alt={item.name} style={{width:"100%",height:"100%"}}></img>
                                    </div>
                                    <div className="flip-card-back">
                                        <h2>{item.name}</h2>
                                        <p>{item.description}</p>
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

export default Laurea;