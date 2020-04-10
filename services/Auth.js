import * as React from 'react'
import {AsyncStorage} from 'react-native'
import {API_URL} from "react-native-dotenv";

export const _authenticate = async (email, password) => {
    return await fetch(API_URL + 'api/login_check',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                username: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(async (res) => {
            if (!res.token) {
                await AsyncStorage.setItem('token', '')
                alert('Identifiants invalides')
            }
            await AsyncStorage.setItem('token', res.token)
            await AsyncStorage.setItem("email", email)
            await AsyncStorage.setItem("password", password)
        })
        .catch(error => console.log(error))
        ;
}



