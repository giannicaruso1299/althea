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

    categories = ["Eventi","Confetti","Confettate"];
    events = ['Nascita','Battesimo','Compleanno','Comunione','Cresima','Laurea','Matrimonio'];
    confetti = ['Bianco','Rosa','Celeste','Rosso','Colorato','Speciali'];
    confettate = ['Laurea','Battesimo','Compleanno','Matrimonio'];

    handleFile = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        });
    };

    populateOptions = (e) => {
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
        console.log(selection);
    }

    fileUploadHandler = (e) => {

        e.preventDefault();

        const evento = document.getElementById('evento').value;
        const colore = document.getElementById('colore').value;
        const conf_event = document.getElementById('conf_event').value;

        const fd = new FormData();
        fd.append('name',document.getElementById('nome').value);
        fd.append('category', document.getElementById('categoria').value);
        if (this.categories.indexOf(document.getElementById('categoria').value) === 0) {
            fd.append('event', evento);
        } else if (this.categories.indexOf(document.getElementById('categoria').value) === 1) {
            fd.append('colore', colore);
        } else if (this.categories.indexOf(document.getElementById('categoria').value) === 2) {
            fd.append('conf_event', conf_event);
        }
        fd.append('description',document.getElementById('description').value);
        fd.append('productImage',this.state.selectedFile,this.state.selectedFile.name);

        axios.post('http://althea-bomboniere.it:5000/api/items',fd)
            .then(res => {
                console.log(res.data);
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
                                <Input type="text" name="nome" id="nome" placeholder="Nome dell'oggetto"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Categoria</Label>
                            <Col sm={10}>
                                <Input type="select" name="select" id="categoria" placeholder="Scegli una categoria" onChange={this.populateOptions}>
                                    {this.categories.map(item => (
                                        <option>{item}</option>
                                    ))}
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row id="eventi">
                            <Label for="exampleEmail" sm={2}>Evento</Label>
                            <Col sm={10}>
                                <Input type="select" name="select" id="evento" placeholder="Descrizione dell'evento" onChange={this.handleEvent}>
                                    {this.events.map(item => (
                                        <option>{item}</option>
                                    ))}
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row className="d-none" id="confetti">
                            <Label for="exampleEmail" sm={2}>Colore</Label>
                            <Col sm={10}>
                                <Input type="select" name="select" id="colore" placeholder="Colore dei confetti">
                                    {this.confetti.map(item => (
                                        <option>{item}</option>
                                    ))}
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row className="d-none" id="confettate">
                            <Label for="exampleEmail" sm={2}>Evento</Label>
                            <Col sm={10}>
                                <Input type="select" name="select" id="conf_event" placeholder="Colore dei confetti">
                                    {this.confettate.map(item => (
                                        <option>{item}</option>
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