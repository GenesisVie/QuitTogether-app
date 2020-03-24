import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import deviceStorage from '../services/deviceStorage';


class Registration extends Component {
    constructor(props) {
        super(props);
        this.registerUser = this.registerUser.bind(this);
    }


    registerUser() {
        const { email, password, password_confirmation } = this.state;

        this.setState({ error: '', loading: true });

        axios.post("http://localhost:8000/api/user/register",{
            user: {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        },)
            .then((response) => {
                // deviceStorage.saveKey("id_token", response.data.jwt);
                console.log(response.data)
            })
            .catch((error) => {
                // Handle returned errors here
            });
    }
}

