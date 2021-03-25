import React, {useEffect, useState} from 'react';
import Header from "./Header";
import Affiliati from "./Affiliati";
import Loader from "react-loader-spinner";
import axios from 'axios';
import Item from "./Item";
import Pagination from "./Pagination";

function Confettate(event) {

    const [title, setTitle] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);

    let path="//althea-bomboniere.it:5000/";

    useEffect(() => {
        const fetchItems = async () => {
            const path = "//althea-bomboniere.it:5000/api/items/" + myPath;
            await axios.get(path)
                .then(res => {
                    setItems(res.data);
                    setLoaded(true);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        const myPath = event.location.pathname.slice(1);
        const firstWord = myPath.slice(11,).substr(0,1);
        const wordSplitted = myPath.slice(11,).slice(1);
        const capFirstWord = firstWord.toUpperCase();
        const myEvent = capFirstWord + wordSplitted;
        const fullString = "Le nostre confettate per " + myEvent;
        setTitle(fullString);
        document.title = 'Althea Bomboniere | Confettate';
        fetchItems().then(() => console.log("Fatto"));
    },[event.location.pathname]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
      <div className="container-fluid">
          <Affiliati/>
          <Header/>
          <h1 className="mt-4 text-center">{title}</h1>
          {(!loaded) && (
              <Loader type="Rings" className="text-center" color="#00BFFF" height={80} width={80} />
          )}
          <Item items={currentItem} path={path}/>
          <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}/>
      </div>
    );
}

export default Confettate;