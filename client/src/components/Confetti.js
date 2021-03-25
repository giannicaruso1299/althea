import React, {useState, useEffect} from 'react';
import Header from "./Header";
import Affiliati from "./Affiliati";
import axios from "axios";
import Loader from "react-loader-spinner";
import Item from "./Item";
import Pagination from "./Pagination";

function Confetti(colore) {

    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);
    const [noItems, setNoItems] = useState(false);

    let path="//althea-bomboniere.it:5000/";

    const myPath = colore.location.pathname.slice(1);
    const purifiedColor = myPath.slice(myPath.indexOf('/') + 1);

    useEffect(() => {
        const fetchItems = async () => {
            const path = "//althea-bomboniere.it:5000/api/items/" + myPath;
            await axios.get(path)
                .then(res => {
                    setItems(res.data)
                    setLoaded(true)
                })
                .catch(err => {
                    if (err.response.status === 400) {
                        if (err.response.data === "Nessun elemento") {
                            setLoaded(true);
                            setNoItems(true);
                        }
                    }
                })
        }
        document.title = 'Althea Bomboniere | Confetti';
        fetchItems().then(() => console.log("fatto"));
    },[colore.location.pathname, myPath]);

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
            <h1 className="text-center mt-3">I nostri confetti<br/>Di tutti i gusti e colori!</h1>
            <h1 className="text-center mt-1 text-capitalize">{purifiedColor}</h1>
            {(!loaded) && (
                <Loader type="Rings" className="text-center" color="#00BFFF" height={80} width={80} />
            )}
            {noItems && (
                <h4 className="text-center mt-2">Nessun articolo per la ricerca corrente</h4>
            )}
            <Item items={currentItem} path={path}/>
            <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}/>
        </div>
    )
}

export default Confetti;