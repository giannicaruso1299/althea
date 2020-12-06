import React, {useState} from 'react';
import {Alert} from 'reactstrap';

function Alerta()  {

    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);

    return (
        <Alert color="danger" isOpen={visible} toggle={onDismiss} style={{fontFamily:"sans-serif"}}>
            <h1 className="alert-heading">Attenzione</h1>
            <hr/>
            <p>Hai inserito dei dati sbagliati</p>  
        </Alert>
    );

}

export default Alerta;