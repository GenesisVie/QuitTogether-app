import * as React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {AsyncStorage} from 'react-native';
import {_authenticate} from '../../services/Auth'
import {API_URL} from 'react-native-dotenv'

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            message: ""
        };
    }

    _login = async () => {
        await _authenticate(this.state.email, this.state.password)
        const token = await AsyncStorage.getItem('token');
        if (token) {
            this.props.navigation.navigate('App')
        }
    }


    _fetchingAsync = async () => {
        const fetchedAsync = await AsyncStorage.getItem('token');
        console.log(fetchedAsync)
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Connexion</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#003f5c"
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                    />
                </View>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={this._login}
                >
                    <Text style={{color: "#fff"}}>Connexion</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.loginText}
                          onPress={() => this.props.navigation.navigate("Register")}
                    >
                        Inscription
                    </Text>
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
    loginBtn: {
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
