import React, { useState} from "react";
import axios from "axios";
import {Modal, ModalBody, ModalHeader} from "reactstrap";

function ItemCard({items, path, edit}) {

    const [formModalEdit, setFormModalEdit] = useState(false);
    const [modalEdited, setModalEdited] = useState(false);
    const [modalConfirmEdit, setModalConfirmEdit] = useState(false);
    const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
    const [modalDeleted, setModalDeleted] = useState(false);
    const [item, setItem] = useState({});
    const [file, setFile] = useState('');
    const [select, setSelect] = useState('');

    const handleFile = (e) => {
        const fullFile = e.target.files[0];
        setFile(fullFile);
    };

    let width = window.innerWidth;

    const handleModalConfirmDelete = () => {
        setModalConfirmDelete(true);
    }

    const handleFormModalEdit = async (e) => {
        const id = e.target.getAttribute('data-value');
        await axios.get('//althea-bomboniere.it/api/items/findItem/' + id, {headers: {'auth-token': sessionStorage.getItem('token')}})
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
        await axios.delete('//althea-bomboniere.it/api/items/' + id, {headers: {'auth-token': sessionStorage.getItem('token')}})
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

        const category = e.target.getAttribute('data-category');

        let evento;
        let colore;
        let conf_event;

        if (category === 'Eventi') {
            evento = select;
            colore = '';
            conf_event = '';
        } else if (category === 'Confetti') {
            evento = '';
            colore = select;
            conf_event = '';
        } else if (category === 'Confettate') {
            evento = '';
            colore = '';
            conf_event = select;
        }

        console.log(evento);

        if (file !== '') {
            const fd = new FormData();
            fd.append('id', e.target.getAttribute('data-value'));
            fd.append('name',document.getElementById('name').value);
            fd.append('event', evento);
            fd.append('colore', colore);
            fd.append('conf_event', conf_event);
            fd.append('description',document.getElementById('description').value);
            fd.append('productImage',file, file.name);
            await axios.post('//althea-bomboniere.it/api/items/update',fd, {headers: {
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
            await axios.post('//althea-bomboniere.it/api/items/updatetext',payload, {headers: {
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

    const setSelects = (e) => {
        setSelect(e.target.value);
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
        <div className="row mb-5 d-flex flex-row" style={{fontFamily:"Open Sans"}}>
            {items.map(item => (
                <div className="col-md-6 col-lg-3 col-6 my-3 text-center" key={item._id}>
                    <div className="flip-card" style={{margin: "0 auto"}}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                {width >= 768 && (
                                    <img src={path + item.productImage} alt={item.name}/>
                                )}
                                {width < 768 && (
                                    <img src={path + item.productImageSm} className="w-100" alt={item.name}/>
                                )}
                            </div>
                            <div className="flip-card-back">
                                <p className="lead font-weight-bold">{item.name}</p>
                                <hr className="mx-3"/>
                                <small className="lead">{item.description}</small>
                                {edit && (
                                    <div className="text-center mt-2">
                                        <i className="fas fa-pencil-alt mr-2" id="edit" data-value={item._id} onClick={handleFormModalEdit}/>
                                        <i className="fas fa-trash" id="remove" onClick={handleModalConfirmDelete}/>
                                    </div>

                                )}
                            </div>
                        </div>
                    </div>
                    <Modal isOpen={modalConfirmDelete} toggle={toggleDelete} style={{fontFamily:"sans-serif"}}>
                        <ModalHeader toggle={toggleDelete}>
                            Sei sicuro di voler eliminare l'elemento?
                        </ModalHeader>
                        <ModalBody className="text-center">
                            <button className="btn btn-success mr-2" onClick={handleDelete} data-value={item._id}>S??</button>
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
                            <button className="btn btn-success mr-2" data-category={item.category} onClick={editElement} data-value={item._id}>S??</button>
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
                                        <select className="form-select" id="evento" defaultValue={item.event} onChange={setSelects} placeholder={item.event}>
                                            {events.map(event => (
                                                <option key={event}>{event}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                                {item.category === 'Confetti' && (
                                    <div className="mb-3">
                                        <label className="form-label">Colore</label>
                                        <select className="form-select" id="colore" defaultValue={item.colore} onChange={setSelects} placeholder={item.colore}>
                                            {confetti.map(colore => (
                                                <option key={colore}>{colore}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                                {item.category === 'Confettate' && (
                                    <div className="mb-3">
                                        <label className="form-label">Evento</label>
                                        <select className="form-select" id="conf_event" defaultValue={item.conf_event} onChange={setSelects} placeholder={item.conf_event}>
                                            {confettate.map(evento => (
                                                <option key={evento}>{evento}</option>
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