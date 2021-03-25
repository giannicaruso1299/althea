import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AlertUser from '../alerts/AlertUser';
import AlertPassword from "../alerts/AlertPassword";

function Auth() {

    const [alert, setAlert] = useState(false);
    const [alertPassword, setAlertPassword] = useState(false);

    useEffect(() => {
        document.title = 'Althea Bomboniere | Login';
    })

    const closeAlert = () => {
        setAlert(false);
    }

    const closeAlertPassword = () => {
        setAlertPassword(false);
    }

    const alertUser = alert ? <AlertUser closeAlert = {closeAlert}/> : '';
    const allertPassword = alertPassword ? <AlertPassword closeAlert = {closeAlertPassword}/> : '';

    const checkData = (e) => {

        e.preventDefault();

        let body = {
            nomeUtente: document.getElementById('nomeUtente').value,
            password: document.getElementById('password').value
        };

        const options = {
            "Access-Control-Allow-Origin":"//althea-bomboniere.it:5000"
        }

        axios.post("//althea-bomboniere.it:5000/api/users/login", body, options)
            .then(res => {
                    sessionStorage.setItem('token', res.data);
                    window.location.href = '/areapersonale';
            })
            .catch(err => {
                if (err.response.status === 400) {
                    if (err.response.data === 'Utente non trovato') {
                        setAlert(true);
                    } else if (err.response.data === 'Invalid password') {
                        setAlertPassword(true);
                    }
                }
            });
    }

    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                <h1 style={{fontFamily:"sans-serif"}}>Effettua il login prima di entrare nell'area privata</h1>
            </div>
            <div className="row justify-content-center">
                {alertUser}
                {allertPassword}
            </div>
            <div className="row justify-content-center">
                <form onSubmit = {checkData}>
                    <div className="row">
                        <div className="input-group mb-3">
                            <input type="text" style={{fontFamily:"sans-serif"}} id="nomeUtente" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group mb-3">
                            <input type="password" style={{fontFamily:"sans-serif"}} id="password" className="form-control" placeholder="Password" required/>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn btn-danger" type="submit" style={{fontFamily:"sans-serif"}}>Accedi</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Auth;