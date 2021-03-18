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
    const [itemsPerPage] = useState(4);
    const [file, setFile] = useState('');
    const [noElement, setNoElement] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const categories = ["Eventi","Confetti","Confettate"];
    const events = ['Nascita','Battesimo','Compleanno','Comunione','Cresima','Laurea','Matrimonio'];
    const confetti = ['Bianco','Rosa','Celeste','Rosso','Colorato','Speciali'];
    const confettate = ['Laurea','Battesimo','Compleanno','Matrimonio'];

    let path="http://althea-bomboniere.it/";

    const handleFile = (e) => {
        const fullFile = e.target.files[0];
        setFile(fullFile);
    };

    useEffect(() => {
        fetchItems().then(() => console.log("Fatto"));
    },[]);

    const fetchItems = async () => {
        await axios.get('http://althea-bomboniere.it:5000/api/items', {headers: {'auth-token': sessionStorage.getItem('token')}})
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
            })
    }

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

        axios.post('http://althea-bomboniere.it:5000/api/items',fd, {headers: {'auth-token': sessionStorage.getItem('token')}})
            .then(() => {
                setModal(true);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const populateOptions = (e) => {
        const target = e.target.value;
        const selection = this.categories.indexOf(target);
        if (selection === 1) {
            document.getElementById('confetti').classList.remove('d-none');
            document.getElementById('eventi').classList.add('d-none');
            document.getElementById('confettate').classList.add('d-none');
        } else if (selection === 2) {
            document.getElementById('confettate').classList.remove('d-none');
            document.getElementById('confetti').classList.add('d-none');
            document.getElementById('eventi').classList.add('d-none');
        } else {
            document.getElementById('eventi').classList.remove('d-none');
            document.getElementById('confetti').classList.add('d-none');
            document.getElementById('confettate').classList.add('d-none');
        }
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
        <div className="container-fluid" style={{fontFamily:"sans-serif"}}>
            <div className="text-center mt-2">
                {unauthoraized && (
                    <h1>Non sei autorizzato ad entrare in quest'area</h1>
                )}
            </div>
            {!unauthoraized && (
                <div>
                    <h2 className="text-center">I tuoi articoli</h2>
                    {!loaded && (
                        <Loader type="Rings" className="text-center" color="#00BFFF" height={80} width={80} />
                    )}
                    {noElement && (
                        <h4 className="text-center">Non hai nessun articolo</h4>
                    )}
                    <ItemCard path={path} items={currentItem}/>
                    <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}/>
                    <h3 className="text-center">Inserisci un nuovo articolo</h3>
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
                                <Input type="file" name="file" id="exampleFile" onChange={handleFile}/>
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
                    </Form>
                </div>
            )}
        </div>
    )
}

export default AddItem;
//
//     handleFile = (e) => {
//         this.setState({
//             selectedFile: e.target.files[0]
//         });
//     };
//
//
//     fileUploadHandler = (e) => {
//
//         e.preventDefault();
//
//         const evento = document.getElementById('evento').value;
//         const colore = document.getElementById('colore').value;
//         const conf_event = document.getElementById('conf_event').value;
//
//         const fd = new FormData();
//         fd.append('name',document.getElementById('nome').value);
//         fd.append('category', document.getElementById('categoria').value);
//         if (this.categories.indexOf(document.getElementById('categoria').value) === 0) {
//             fd.append('event', evento);
//         } else if (this.categories.indexOf(document.getElementById('categoria').value) === 1) {
//             fd.append('colore', colore);
//         } else if (this.categories.indexOf(document.getElementById('categoria').value) === 2) {
//             fd.append('conf_event', conf_event);
//         }
//         fd.append('description',document.getElementById('description').value);
//         fd.append('productImage',this.state.selectedFile,this.state.selectedFile.name);
//
//         axios.post('http://althea-bomboniere.it:5000/api/items',fd)
//             .then(() => {
//                 this.setState({
//                     modal:true
//                 });
//             })
//             .catch(err => {
//                 console.log(err);
//         });
//     };
//
//     toggle = (e) => {
//         e.preventDefault();
//         this.setState({
//             modal:!this.state.modal
//         });
//     };
//
//     render() {
//         return (
//             <div className="container mt-5" style={{fontFamily:"sans-serif"}}>
//                 {(!this.state.allowed) && (
//                     <div className="row justify-content-center">
//                         <h1>Non sei autorizzato ad entrare in questa sezione</h1>
//                     </div>
//                 )}
//
//                 {(this.state.allowed) && (
//                     <Form>
//                         <FormGroup row>
//                             <Label for="exampleEmail" sm={2}>Nome Oggetto</Label>
//                             <Col sm={10}>
//                                 <Input type="text" name="nome" id="nome" placeholder="Nome dell'oggetto"/>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row>
//                             <Label for="exampleEmail" sm={2}>Categoria</Label>
//                             <Col sm={10}>
//                                 <Input type="select" name="select" id="categoria" placeholder="Scegli una categoria" onChange={this.populateOptions}>
//                                     {this.categories.map(item => (
//                                         <option key={item}>{item}</option>
//                                     ))}
//                                 </Input>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row id="eventi">
//                             <Label for="exampleEmail" sm={2}>Evento</Label>
//                             <Col sm={10}>
//                                 <Input type="select" name="select" id="evento" placeholder="Descrizione dell'evento" onChange={this.handleEvent}>
//                                     {this.events.map(item => (
//                                         <option key={item}>{item}</option>
//                                     ))}
//                                 </Input>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row className="d-none" id="confetti">
//                             <Label for="exampleEmail" sm={2}>Colore</Label>
//                             <Col sm={10}>
//                                 <Input type="select" name="select" id="colore" placeholder="Colore dei confetti">
//                                     {this.confetti.map(item => (
//                                         <option key={item}>{item}</option>
//                                     ))}
//                                 </Input>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row className="d-none" id="confettate">
//                             <Label for="exampleEmail" sm={2}>Evento</Label>
//                             <Col sm={10}>
//                                 <Input type="select" name="select" id="conf_event" placeholder="Colore dei confetti">
//                                     {this.confettate.map(item => (
//                                         <option key={item}>{item}</option>
//                                     ))}
//                                 </Input>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row>
//                             <Label for="exampleText" sm={2}>Descrizione</Label>
//                             <Col sm={10}>
//                                 <Input type="textarea" name="description" id="description" placeholder="Descrizione dell'oggetto"/>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row>
//                             <Label for="exampleFile" sm={2}>File</Label>
//                             <Col sm={10}>
//                                 <Input type="file" name="file" id="exampleFile" onChange={this.handleFile}/>
//                             </Col>
//                         </FormGroup>
//                         <FormGroup check row>
//                             <Col sm={{ size: 10, offset: 2 }} className="text-center mb-sm-0 mb-3">
//                                 <Button color="danger" onClick={this.fileUploadHandler}>Aggiungi</Button>
//                                 <Modal isOpen={this.state.modal} toggle={this.toggle}>
//                                     <ModalHeader toggle={this.toggle}>Articolo inserito!</ModalHeader>
//                                     <ModalBody>
//                                         Articolo correttamente inserito!
//                                     </ModalBody>
//                                 </Modal>
//                             </Col>
//                         </FormGroup>
//                 </Form>
//                 )}
//             </div>
//         );
//     }
// }
//
// export default AddItem;