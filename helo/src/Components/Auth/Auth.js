import React, { Component } from 'react';
import Helo from "../../imgs/helo.png"
import axios from "axios";
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
            picture: ""
         }
    }


    handleRegister = () => {
        const {username, password} = this.state;

        axios.post('/auth/register', {username, password})
        .then(res => {
            this.props.getUser(res.data)
            this.props.history.push("/dashboard")
        })
        .catch(err => console.log(err));
    }


    render() { 
        return ( 
            <div className="auth">
                <img src={Helo} alt="Smiley face"/>
                <h1 className="main-h1">Helo</h1>
                <div>
                    Username:
                    <input/>
                </div>
                <div>
                    Password:
                    <input/>
                </div>
                <div className="btn-div">
                    <button className="btns">Login</button>
                    <button className="btns" onClick={this.handleRegister}>Register</button>
                </div>
            </div>
         );
    }
}
 
export default Auth;