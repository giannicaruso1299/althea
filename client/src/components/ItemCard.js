import React, {useState} from "react";
import axios from "axios";
import {Modal, ModalBody, ModalHeader} from "reactstrap";

function ItemCard({items, path}) {

    const [formModalEdit, setFormModalEdit] = useState(false);
    const [modalEdited, setModalEdited] = useState(false);
    const [modalConfirmEdit, setModalConfirmEdit] = useState(false);
    const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
    const [modalDeleted, setModalDeleted] = useState(false);
    const [item, setItem] = useState({});
    const [file, setFile] = useState('');

    const handleFile = (e) => {
        const fullFile = e.target.files[0];
        setFile(fullFile);
    };

    const handleModalConfirmDelete = () => {
        setModalConfirmDelete(true);
    }

    const handleFormModalEdit = async (e) => {
        const id = e.target.getAttribute('data-value');
        await axios.get('http://althea-bomboniere.it:5000/api/items/findItem/' + id, {headers: {'auth-token': sessionStorage.getItem('token')}})
            .then(res => {
                setFormModalEdit(true);
                setItem(res.data);
            })
            .catch(err => console.log(err))
    }

    const events = ['Nascita','Battesimo','Compleanno','Comunione','Cresima','Laurea','Matrimonio'];
    const confetti = ['Bianco','Rosa','Celeste','Rosso','Colorato','Speciali'];
    const confettate = ['Laurea','Battesimo','Compleanno','Matrimonio'];

    const handleDelete = async (e) => {
        let elemTarget = e.target;
        let id = elemTarget.getAttribute('data-value');
        await axios.delete('http://althea-bomboniere.it:5000/api/items/' + id, {headers: {'auth-token': sessionStorage.getItem('token')}})
            .then(() => {
                setModalDeleted(true);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const confirmEditElement = (e) => {
        e.preventDefault();
        setModalConfirmEdit(true);
    }

    const editElement = async (e) => {

        e.preventDefault();

        let evento;
        let colore;
        let conf_event;

        if (document.getElementById('evento') === undefined || document.getElementById('evento') === null) {
            evento = '';
        } else {
            evento = document.getElementById('evento').value;
        }
        if (document.querySelector('#colore') === undefined || document.querySelector('#colore') === null) {
            colore = '';
        } else {
            colore = document.querySelector('#colore').value;
        }
        if (document.querySelector('#conf_event') === undefined || document.querySelector('#conf_event') === null) {
            conf_event = '';
        } else {
            conf_event = document.querySelector('#conf_event').value;
        }
        if (file !== '') {
            const fd = new FormData();
            fd.append('id', e.target.getAttribute('data-value'));
            fd.append('name',document.getElementById('name').value);
            fd.append('event', evento);
            fd.append('colore', colore);
            fd.append('conf_event', conf_event);
            fd.append('description',document.getElementById('description').value);
            fd.append('productImage',file, file.name);
            await axios.post('http://althea-bomboniere.it:5000/api/items/update',fd, {headers: {
                    'auth-token': sessionStorage.getItem('token'),
                }})
                .then(() => {
                    setModalEdited(true);
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            const payload = {
                id: e.target.getAttribute('data-value'),
                name: document.getElementById('name').value,
                event: evento,
                colore: colore,
                conf_event: conf_event,
                description: document.getElementById('description').value
            }
            await axios.post('http://althea-bomboniere.it:5000/api/items/updatetext',payload, {headers: {
                    'auth-token': sessionStorage.getItem('token'),
                }})
                .then(() => {
                    setModalEdited(true);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    const toggleDeleted = (e) => {
        e.preventDefault();
        setModalDeleted(!modalDeleted);
        window.location.reload();
    }

    const toggleEdited = (e) => {
        e.preventDefault();
        setModalEdited(!modalEdited);
        window.location.reload();
    }

    const toggleDelete = (e) => {
        e.preventDefault();
        setModalConfirmDelete(!modalConfirmDelete);
    };

    const toggleEdit = (e) => {
        e.preventDefault();
        setModalConfirmEdit(!modalConfirmEdit);
    };

    const toggleDeleteFormEdit = (e) => {
        e.preventDefault();
        setFormModalEdit(!formModalEdit);
    }

    return (
        <div className="row mb-4" style={{fontFamily:"sans-serif"}}>
            {items.map(item => (
                <div className="col-3">
                    <div className="card w-75">
                        <img src={path + item.productImage} className="card-img-top" alt={item.name}/>
                        <div className="card-body">
                            <h4 className="card-title">{item.name}</h4>
                            <hr/>
                            <div className="row">
                                <div className="col-6">
                                    <small className="card-text float-left">{item.description}</small>
                                </div>
                                <div className="col-6">
                                    <div className="float-right">
                                        <i className="fas fa-pencil-alt mr-2" id="edit" data-value={item._id} onClick={handleFormModalEdit}/>
                                        <i className="fas fa-trash" id="remove" onClick={handleModalConfirmDelete}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal isOpen={modalConfirmDelete} toggle={toggleDelete} style={{fontFamily:"sans-serif"}}>
                        <ModalHeader toggle={toggleDelete}>
                            Sei sicuro di voler eliminare l'elemento?
                        </ModalHeader>
                        <ModalBody className="text-center">
                            <button className="btn btn-success mr-2" onClick={handleDelete} data-value={item._id}>Sì</button>
                            <button className="btn btn-danger" onClick={toggleDelete} data-value={item._id}>No</button>
                        </ModalBody>
                    </Modal>
                    <Modal isOpen={modalDeleted} toggle={toggleDeleted} style={{fontFamily:"sans-serif"}}>
                        <ModalHeader toggle={toggleDeleted}>
                            Eliminato
                        </ModalHeader>
                        <ModalBody
                            className="text-center">
                            <p>Elemento correttamente eliminato</p>
                        </ModalBody>
                    </Modal>
                    <Modal isOpen={modalDeleted} toggle={toggleDeleted} style={{fontFamily:"sans-serif"}}>
                        <ModalHeader toggle={toggleDeleted}>
                            Eliminato
                        </ModalHeader>
                        <ModalBody
                            className="text-center">
                            <p>Elemento correttamente eliminato</p>
                        </ModalBody>
                    </Modal>
                    <Modal isOpen={modalEdited} toggle={toggleEdited} style={{fontFamily:"sans-serif"}}>
                        <ModalHeader toggle={toggleEdited}>
                            Modificato
                        </ModalHeader>
                        <ModalBody
                            className="text-center">
                            <p>Elemento correttamente modificato</p>
                        </ModalBody>
                    </Modal>
                </div>
            ))}
            {item && (
                <div>
                    <Modal isOpen={modalConfirmEdit} toggle={toggleEdit} style={{fontFamily:"sans-serif"}}>
                        <ModalHeader toggle={toggleEdit}>
                            Sei sicuro di voler modificare l'elemento?
                        </ModalHeader>
                        <ModalBody className="text-center">
                            <button className="btn btn-success mr-2" onClick={editElement} data-value={item._id}>Sì</button>
                            <button className="btn btn-danger" onClick={toggleEdit} data-value={item._id}>No</button>
                        </ModalBody>
                    </Modal>
                    <Modal isOpen={formModalEdit} toggle={toggleDeleteFormEdit} style={{fontFamily:"sans-serif"}}>
                        <ModalHeader toggle={toggleDeleteFormEdit}>
                            Modifica elemento
                        </ModalHeader>
                        <ModalBody>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Nome</label>
                                    <textarea className="form-control" id="name" placeholder={item.name} rows="2"/>
                                </div>
                                {item.category === 'Eventi' && (
                                    <div className="mb-3">
                                        <label className="form-label">Evento</label>
                                        <select className="form-select" id="evento" placeholder={item.event}>
                                            {events.map(event => (
                                                <option>{event}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                                {item.category === 'Confetti' && (
                                    <div className="mb-3">
                                        <label className="form-label">Colore</label>
                                        <select className="form-select" id="colore" placeholder={item.colore}>
                                            {confetti.map(colore => (
                                                <option>{colore}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                                {item.category === 'Confettate' && (
                                    <div className="mb-3">
                                        <label className="form-label">Evento</label>
                                        <select className="form-select" id="conf_event" placeholder={item.conf_event}>
                                            {confettate.map(evento => (
                                                <option>{evento}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                                <div className="mb-3">
                                    <label className="form-label">Descrizione</label>
                                    <textarea className="form-control" id="description" placeholder={item.description} rows="2"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Foto</label>
                                    <input type="file" className="form-control" id="file" onChange={handleFile}/>
                                </div>
                                <div className="mb-3 text-center">
                                    <button type="submit" data-submit = {item._id} onClick={confirmEditElement} className="btn btn-success">Modifica elemento</button>
                                </div>
                            </form>
                        </ModalBody>
                    </Modal>
                </div>
            )}
        </div>
    )
}

export default ItemCard;