import React, {useEffect, useState} from "react";
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ItemCard from "./ItemCard";
import Pagination from "./Pagination";
import {Modal, ModalBody, ModalHeader, Form, FormGroup, Col, Label, Input, Button} from "reactstrap";
import Loader from "react-loader-spinner";

function AddItem() {
    const [modal, setModal] = useState(false);
    const [unauthoraized, setUnauthorized] = useState(false);
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const [file, setFile] = useState('');
    const [noElement, setNoElement] = useState(false);
    const [loaded, setLoaded] = useState(true);
    const [modalError, setModalError] = useState(false);

    let path="//althea-bomboniere.it/";

    useEffect(() => {
        document.title = 'Althea Bomboniere | Area Personale';
    },[]);

    const categories = ["Eventi","Confetti","Confettate","Portaciuccio"];
    const events = ['Nascita','Battesimo','Compleanno','Comunione','Cresima','Laurea','Matrimonio'];
    const confetti = ['Bianco','Rosa','Celeste','Rosso','Colorato','Speciali'];
    const confettate = ['Laurea','Battesimo','Compleanno','Matrimonio'];

    const populateOptions = (e) => {
        const target = e.target.value;
        const selection = categories.indexOf(target);
        if (selection === 1) {
            document.getElementById('confetti').classList.remove('d-none');
            document.getElementById('eventi').classList.add('d-none');
            document.getElementById('confettate').classList.add('d-none');
        } else if (selection === 2) {
            document.getElementById('confettate').classList.remove('d-none');
            document.getElementById('confetti').classList.add('d-none');
            document.getElementById('eventi').classList.add('d-none');
        } else if (selection === 3) {
            document.getElementById('eventi').classList.add('d-none');
            document.getElementById('confetti').classList.add('d-none');
            document.getElementById('confettate').classList.add('d-none');
        } else {
            document.getElementById('eventi').classList.remove('d-none');
            document.getElementById('confetti').classList.add('d-none');
            document.getElementById('confettate').classList.add('d-none');
        }
    }


    const handleFile = (e) => {

        const fullFile = e.target.files[0];
        setFile(fullFile);
    };

    const fileUploadHandler = (e) => {

        e.preventDefault();

        const evento = document.getElementById('evento').value;
        const colore = document.getElementById('colore').value;
        const conf_event = document.getElementById('conf_event').value;

        const fd = new FormData();
        fd.append('name',document.getElementById('nome').value);
        fd.append('category', document.getElementById('categoria').value);
        if (categories.indexOf(document.getElementById('categoria').value) === 0) {
            fd.append('event', evento);
        } else if (categories.indexOf(document.getElementById('categoria').value) === 1) {
            fd.append('colore', colore);
        } else if (categories.indexOf(document.getElementById('categoria').value) === 2) {
            fd.append('conf_event', conf_event);
        }
        fd.append('description',document.getElementById('description').value);
        fd.append('productImage',file, file.name);

        axios.post('//althea-bomboniere.it/api/items',fd, {headers: {'auth-token': sessionStorage.getItem('token')}})
            .then(() => {
                setModal(true);
            })
            .catch(err => {
                setModalError(true);
            });
    };

    const getEventiItems = async (e) => {
        setNoElement(false);
        setItems([]);
        setLoaded(false);
        const myPath = e.target.getAttribute('data-event');
        await axios.get("//althea-bomboniere.it/api/items/" + myPath)
            .then(res => {
                setLoaded(true);
                setItems(res.data);
            })
            .catch(err => {
                console.log(err);
                if (err.response.status === 400) {
                    if (err.response.data === 'Nessun elemento') {
                        setLoaded(true);
                        setNoElement(true);
                    } else {
                        setLoaded(true);
                        setUnauthorized(true)
                    }
                }
            });
    }

    const getConfettiColore = async (e) => {
        setNoElement(false);
        setItems([]);
        setLoaded(false);
        const myPath = e.target.getAttribute('data-event');
        await axios.get("//althea-bomboniere.it/api/items/confetti/" + myPath)
            .then(res => {
                setLoaded(true);
                setItems(res.data);
            })
            .catch(err => {
                console.log(err);
                if (err.response.status === 400) {
                    if (err.response.data === 'Nessun elemento') {
                        setLoaded(true);
                        setNoElement(true);
                    } else {
                        setLoaded(true);
                        setUnauthorized(true)
                    }
                }
            });
    }

    const getConfettateEvent = async (e) => {
        setNoElement(false);
        setItems([]);
        setLoaded(false);
        const myPath = e.target.getAttribute('data-event');
        await axios.get("//althea-bomboniere.it/api/items/confettate/" + myPath)
            .then(res => {
                setLoaded(true);
                setItems(res.data);
            })
            .catch(err => {
                console.log(err);
                if (err.response.status === 400) {
                    if (err.response.data === 'Nessun elemento') {
                        setLoaded(true);
                        setNoElement(true);
                    } else {
                        setLoaded(true);
                        setUnauthorized(true)
                    }
                }
            });
    }

    const getPortaciuccio = async (e) => {
        setNoElement(false);
        setItems([]);
        setLoaded(false);
        await axios.get("http://althea-bomboniere.it/api/items/portaciuccio")
            .then(res => {
                setLoaded(true);
                setItems(res.data);
            })
            .catch(err => {
                if (err.response.status === 400) {
                    if (err.response.data === 'Nessun elemento') {
                        setLoaded(true);
                        setNoElement(true);
                    } else {
                        setLoaded(true);
                        setUnauthorized(true)
                    }
                }
            });
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const toggle = (e) => {
        e.preventDefault();
        setModal(!modal);
        window.location.reload();
    };

    return (
        <div className="container-fluid" style={{fontFamily:"Open Sans"}}>
            <div className="text-center mt-2">
                {unauthoraized && (
                    <h1>Non sei autorizzato ad entrare in quest'area</h1>
                )}
            </div>
            {!unauthoraized && (
                <div>
                    <h2 className="text-center">I tuoi articoli</h2>
                    <div className="row mt-5">
                        <div className="btn-group flex-wrap" role="group">
                            <button
                                className="btn btn-primary"
                                data-bs-toggle="collapse"
                                href="#eventi-collapse"
                                aria-expanded="false"
                                aria-controls="multiCollapseExample1">Eventi
                            </button>
                            <button
                                className="btn btn-primary"
                                data-bs-toggle="collapse"
                                href="#confetti-collapse"
                                aria-expanded="false"
                                aria-controls="multiCollapseExample1">Confetti
                            </button>
                            <button
                                className="btn btn-primary"
                                data-bs-toggle="collapse"
                                href="#confettate-collapse"
                                aria-expanded="false"
                                aria-controls="multiCollapseExample1">Confettate
                            </button>
                            <button
                                className="btn btn-primary"
                                data-bs-toggle="collapse"
                                href="#portaciuccio-collapse"
                                onClick={getPortaciuccio}
                                aria-expanded="false"
                                aria-controls="multiCollapseExample1">Portaciuccio
                            </button>
                        </div>
                        <div className="row mt-2">
                            <div className="collapse multi-collapse text-center" id="eventi-collapse">
                                <div className="btn-group flex-wrap" role="group">
                                    {events.map(event => (
                                        <button
                                            key={event}
                                            className="btn btn-success"
                                            data-event={event.toLowerCase()}
                                            onClick={getEventiItems}
                                            data-bs-toggle="collapse"
                                            href={"#events" + event}
                                            aria-expanded="false">{event}
                                        </button>
                                    ))}
                                </div>
                                {events.map(event => (
                                    <div className="collapse multi-collapse" id={'events' + event} key={event}>
                                        {!loaded && (
                                            <Loader type="Rings" className="text-center" color="#00BFFF" height={80} width={80}/>
                                        )}
                                        {noElement && (
                                            <h4 className="text-center mt-2">Non hai nessun articolo</h4>
                                        )}
                                        <ItemCard className="collapse multi-collapse" items={currentItem} path={path} edit={true}/>
                                        <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="collapse multi-collapse text-center" id="confetti-collapse">
                                <div className="btn-group flex-wrap" role="group">
                                    {confetti.map(confetto => (
                                        <button
                                            key={confetto}
                                            className="btn btn-success"
                                            data-event={confetto.toLowerCase()}
                                            onClick={getConfettiColore}
                                            data-bs-toggle="collapse"
                                            href={"#confetti" + confetto}
                                            aria-expanded="false">{confetto}
                                        </button>
                                    ))}
                                </div>
                                {confetti.map(confetto => (
                                    <div className="collapse multi-collapse" id={'confetti' + confetto} key={confetto}>
                                        {!loaded && (
                                            <Loader type="Rings" className="text-center" color="#00BFFF" height={80} width={80}/>
                                        )}
                                        {noElement && (
                                            <h4 className="text-center mt-2">Non hai nessun articolo</h4>
                                        )}
                                        <ItemCard className="collapse multi-collapse" items={currentItem} path={path} edit={true}/>
                                        <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="collapse multi-collapse text-center" id="confettate-collapse">
                                <div className="btn-group flex-wrap" role="group">
                                    {confettate.map(confettata => (
                                        <button
                                            key={confettata}
                                            className="btn btn-success"
                                            data-event={confettata.toLowerCase()}
                                            onClick={getConfettateEvent}
                                            data-bs-toggle="collapse"
                                            href={"#confettate" + confettata}
                                            aria-expanded="false">{confettata}
                                        </button>
                                    ))}
                                </div>
                                {confettate.map(confettata => (
                                    <div className="collapse multi-collapse" id={'confettate' + confettata} key={confettata}>
                                        {!loaded && (
                                            <Loader type="Rings" className="text-center" color="#00BFFF" height={80} width={80}/>
                                        )}
                                        {noElement && (
                                            <h4 className="text-center mt-2">Non hai nessun articolo</h4>
                                        )}
                                        <ItemCard className="collapse multi-collapse" items={currentItem} path={path} edit={true}/>
                                        <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row mt-3 justify-content-center">
                            <div className="collapse multi-collapse" id='portaciuccio-collapse'>
                                {!loaded && (
                                    <Loader type="Rings" className="text-center" color="#00BFFF" height={80} width={80}/>
                                )}
                                {noElement && (
                                    <h4 className="text-center mt-2">Non hai nessun articolo</h4>
                                )}
                                <ItemCard className="collapse multi-collapse" items={currentItem} path={path} edit={true}/>
                                <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}/>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-center mb-4">Inserisci un nuovo articolo</h3>
                    <Form>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Nome Oggetto</Label>
                            <Col sm={10}>
                                <Input type="text" name="nome" id="nome" placeholder="Nome dell'oggetto"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Categoria</Label>
                            <Col sm={10}>
                                <Input type="select" name="select" id="categoria" placeholder="Scegli una categoria" onChange={populateOptions}>
                                    {categories.map(item => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row id="eventi">
                            <Label for="exampleEmail" sm={2}>Evento</Label>
                            <Col sm={10}>
                                <Input type="select" name="select" id="evento" placeholder="Descrizione dell'evento">
                                    {events.map(item => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row className="d-none" id="confetti">
                            <Label for="exampleEmail" sm={2}>Colore</Label>
                            <Col sm={10}>
                                <Input type="select" name="select" id="colore" placeholder="Colore dei confetti">
                                    {confetti.map(item => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row className="d-none" id="confettate">
                            <Label for="exampleEmail" sm={2}>Evento</Label>
                            <Col sm={10}>
                                <Input type="select" name="select" id="conf_event" placeholder="Colore dei confetti">
                                    {confettate.map(item => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleText" sm={2}>Descrizione</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="description" id="description" placeholder="Descrizione dell'oggetto"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleFile" sm={2}>File</Label>
                            <Col sm={10}>
                                <Input type="file" className="form-control" name="file" id="exampleFile" onChange={handleFile}/>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }} className="text-center mb-sm-0 mb-3">
                                <Button color="danger" onClick={fileUploadHandler}>Aggiungi</Button>
                                <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle}>Articolo inserito!</ModalHeader>
                                    <ModalBody>
                                        Articolo correttamente inserito!
                                    </ModalBody>
                                </Modal>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }} className="text-center mb-sm-0 mb-3">
                                <Modal isOpen={modalError} toggle={toggle}>
                                    <ModalHeader toggle={toggle}>Errore</ModalHeader>
                                    <ModalBody>
                                        Errore nell'inserimento dell'articolo
                                    </ModalBody>
                                </Modal>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            )}
        </div>
    )
}

export default AddItem;