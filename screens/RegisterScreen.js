import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {AsyncStorage} from 'react-native';
import { API_URL } from 'react-native-dotenv'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            birthday: "",
            packageCost: "",
        };
    }

    _register= async () => {
        if (this.state.email !== '' && this.state.password !== "") {
            const result = await fetch(API_URL+'user/register', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    password: this.state.password,
                    email: this.state.email,
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    birthday: this.state.birthday,
                    packageCost: this.state.packageCost,
                })
            });
            await AsyncStorage.setItem("email", this.state.email)
            await AsyncStorage.setItem("password", this.state.password)
            const data = await result.json();

        } else {
            alert('error register')
        }
    };

    _login = async () => {
        if (this.state.email !== '' && this.state.password !== "") {
            const result = await fetch(API_URL+'api/login_check', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    username: this.state.email,
                    password: this.state.password
                })
            });

            const data = await result.json();
            AsyncStorage.setItem('token', data.token)
        } else {
            alert('error loggin')
        }
    };

    _fetchingAsync = async () => {
        const fetchedAsync = await AsyncStorage.getItem('token');
        console.log(fetchedAsync)
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Inscription</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Prénom..."
                        placeholderTextColor="#003f5c"
                        onChangeText={(firstname) => this.setState({firstname: firstname})}
                        value={this.state.firstname}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Nom..."
                        placeholderTextColor="#003f5c"
                        onChangeText={(lastname) => this.setState({lastname: lastname})}
                        value={this.state.lastname}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => this.setState({email: email})}
                        value={this.state.email}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Mot de passe..."
                        placeholderTextColor="#003f5c"
                        onChangeText={(password) => this.setState({password: password})}
                        value={this.state.password}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Date de naissance..."
                        placeholderTextColor="#003f5c"
                        onChangeText={(birthday) => this.setState({birthday: birthday})}
                        value={this.state.birthday}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Coût du paquet..."
                        placeholderTextColor="#003f5c"
                        onChangeText={(packageCost) => this.setState({packageCost: packageCost})}
                        value={this.state.packageCost}
                    />
                </View>

                <TouchableOpacity
                    style={styles.registerBtn}
                    onPress={this._register}
                >
                    <Text style={{color: "#fff"}}>Inscription</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
    registerBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    }
});
