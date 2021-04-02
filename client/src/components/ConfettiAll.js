import React, {useEffect, useState} from "react";
import axios from "axios";
import Affiliati from "./Affiliati";
import Header from "./Header";
import Loader from "react-loader-spinner";
import Item from "./Item";
import Pagination from "./Pagination";

const ConfettiAll = () => {
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);
    const [noItems, setNoItems] = useState(false);

    let path="https://althea-bomboniere.it/";

    useEffect(() => {
        const fetchItems = async () => {
            await axios.post("//althea-bomboniere.it/api/items/confetti_all")
                .then(res => {
                    console.log(path + res.data.productImage);
                    setLoaded(true);
                    setItems(res.data);
                })
                .catch(err => {
                    if (err.response.status === 400) {
                        if (err.response.data === "Nessun elemento") {
                            setLoaded(true);
                            setNoItems(true);
                        }
                    }
                });
        }
        document.title = 'Althea Bomboniere | Confetti';
        fetchItems().then(() => console.log("Fatto"))
    },[]);

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
            <h1 className="text-center mt-3">I nostri confetti di tutti i gusti e colori</h1>
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

export default ConfettiAll;