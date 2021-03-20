import React, {useState, useEffect} from 'react';
import Header from "./Header";
import Affiliati from "./Affiliati";
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Item from "./Item";
import Pagination from "./Pagination";

function Event(event) {

    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);

    const myPath = event.location.pathname.slice(1);

    let path="http://althea-bomboniere.it:5000/";
    useEffect(() => {
        const fetchItems = async () => {
            await axios.get("http://althea-bomboniere.it:5000/api/items/" + myPath)
                .then(res => {
                    setLoaded(true);
                    setItems(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        const firstLetter = myPath.slice(0,1);
        const restOfWord = myPath.slice(1,);
        const path_capitalized = firstLetter.toUpperCase() + restOfWord;
        document.title = 'Althea Bomboniere | ' + path_capitalized;
        fetchItems().then(() => console.log("Fatto"))
      },[event.location.pathname, myPath]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className="container-fluid">
            <Affiliati/>
            <Header/>
            <h1 className="text-center mt-3 text-capitalize">{myPath}</h1>
            {(!loaded) && (
                <Loader type="Rings" className="text-center" color="#00BFFF" height={80} width={80} />
            )}
            <Item items={currentItem} path={path}/>
            <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}/>
        </div>
    );
}

export default Event;