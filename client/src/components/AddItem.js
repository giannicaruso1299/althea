import React, {Component} from 'react';
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios';

function setDefaultVal(value, defaultValue) {
    return (value === undefined) ? defaultValue : value;
}

class AddItem extends Component {

    state = {
        modal:false,
        modalErr:false,
        allowed: setDefaultVal(this.props.location.state, false),
        selectedFile:""
    };

    handleFile = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        });
    };



    fileUploadHandler = (e) => {

        e.preventDefault();

        const fd = new FormData();
        fd.append('name',document.getElementById('nome').value);
        fd.append('event',document.getElementById('evento').value);
        fd.append('description',document.getElementById('description').value);
        fd.append('productImage',this.state.selectedFile,this.state.selectedFile.name);

        axios.post('http://localhost:5000/api/items',fd)
            .then(res => {
                this.setState({
                    modal:true
                });
            })
            .catch(err => {
                console.log(err);
        });
    };

    toggle = (e) => {
        e.preventDefault();
        this.setState({
            modal:!this.state.modal
        });
    };

    render() {
        return (
            <div className="container mt-5" style={{fontFamily:"sans-serif"}}>
                {(!this.state.allowed) && (
                    <div className="row justify-content-center">
                        <h1>Non sei autorizzato ad entrare in questa sezione</h1>
                    </div>
                )}

                {(this.state.allowed) && (
                    <Form>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Nome Oggetto</Label>
                            <Col sm={10}>
                                <Input type="text" name="nome" id="nome" placeholder="Nome dell'oggetto" onChange={this.handleName}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Evento</Label>
                            <Col sm={10}>
                                <Input type="select" name="select" id="evento" placeholder="Descrizione dell'evento" onChange={this.handleEvent}>
                                    <option>Nascita</option>
                                    <option>Battesimo</option>
                                    <option>Compleanno</option>
                                    <option>Comunione</option>
                                    <option>Cresima</option>
                                    <option>Laurea</option>
                                    <option>Matrimonio</option>
                                    <option>Altri</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleText" sm={2}>Descrizione</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="description" id="description" placeholder="Descrizione dell'oggetto"onChange={this.handleDesc}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleFile" sm={2}>File</Label>
                            <Col sm={10}>
                                <Input type="file" name="file" id="exampleFile" onChange={this.handleFile}/>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }} className="text-center mb-sm-0 mb-3">
                                <Button color="danger" onClick={this.fileUploadHandler}>Aggiungi</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                    <ModalHeader toggle={this.toggle}>Articolo inserito!</ModalHeader>
                                    <ModalBody>
                                        Articolo correttamente inserito!
                                    </ModalBody>
                                </Modal>
                            </Col>
                        </FormGroup>
                </Form>
                )}
            </div>
        );
    }
}

export default AddItem;