import React,{Component} from 'react';
//import {Link} from 'react-router-dom';
import axios from 'axios';
import Alerta from '../alerts/Alerta';

class Auth extends Component {

    state = {
        nomeUtente:"",
        password:"",
        allowed: false,
        alertVisibility: false
    }

    handleUser = (e) => {
        this.setState({
            nomeUtente: e.target.value
        });
    };

    handlePass = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    checkData = (e) => {

        e.preventDefault();

        var body = {
            nomeUtente:this.state.nomeUtente,
            password:this.state.password
        }

        console.log(body);

        axios.post("http://althea-bomboniere.it:5000/api/users/findUser", body)
            .then(res => {
                if(res.data.length > 0) {
                    this.setState({
                        allowed:true
                    });
                    this.props.history.push({
                        pathname:"/areapersonale",
                        state: {allowed:this.state.allowed}
                    });
                } else if(res.data.length === 0) {
                    this.setState({
                        alertVisibility: !this.state.alertVisibility
                    })
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="container my-4">
                <div className="row justify-content-center">
                    <h1 style={{fontFamily:"sans-serif"}}>Effettua il login prima di entrare nell'area privata</h1>
                </div>
                <div className="row justify-content-center">
                    {(this.state.alertVisibility) && (
                        <Alerta/>
                    )}
                </div>
                <div className="row justify-content-center">
                    <form  onSubmit = {this.checkData}>
                        <div className="row">
                            <div className="input-group mb-3">
                                <input type="text" style={{fontFamily:"sans-serif"}} className="form-control w-100" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleUser}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-group mb-3">
                                <input type="password" style={{fontFamily:"sans-serif"}} id="password" className="form-control w-100" placeholder="Password" required onChange={this.handlePass}></input>
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

}

export default Auth;