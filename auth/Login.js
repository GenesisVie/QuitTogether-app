import React, {Component, Fragment} from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';
import deviceStorage from '../services/deviceStorage';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        };

        this.loginUser = this.loginUser.bind(this);
    }

    loginUser() {
        const {email, password, password_confirmation} = this.state;

        this.setState({error: '', loading: true});

        // NOTE Post to HTTPS only in production
        axios.post("http://127.0.0.1:8000/api/login_check", {
            email: email,
            password: password
        })
            .then((response) => {
                deviceStorage.saveKey("id_token", response.data.jwt);
                this.props.newJWT(response.data.jwt);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
