import * as React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, AsyncStorage} from 'react-native';
import { API_URL } from 'react-native-dotenv'
// import DateTime from '../components/DateTime'

export default class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lastname: "",
            firstname: "",
            countDown: "",
            packageCost: "",
            stoppedAt: '',
            image: ""
        };
        this._fetchingMyDetails();
    }

    _fetchingMyDetails = async () => {
        const result = await fetch(API_URL+'/api/user/me', {
            headers: {
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            method: 'GET',

        });
        const data = await result.json();
        this.state.lastname = data.lastname
        this.state.firstname = data.firstname
        this.state.stoppedAt = new Date(data.stoppedAt.timestamp * 1000).toLocaleDateString("fr-FR");
        this.state.image = data.image
        this.state.packageCost = data.packageCost;
        this.forceUpdate()

        // this.state.countDown = data,
    };

    _updatingMyDetails = async () => {
        const result = await fetch(API_URL+'api/user/update', {
            headers: {
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                stoppedAt: this.state.stoppedAt,
                packageCost: this.state.packageCost,
            })
        });

        this.forceUpdate()
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Mes Informations</Text>
                <Image
                    style={styles.image}
                    source={{source: {uri: API_URL+'uploads/images/user/' + this.state.image}}}
                />
                <Text style={styles.text}>
                    {this.state.firstname}</Text>
                <Text style={styles.text}>
                    {this.state.lastname}</Text>

                <Text style={styles.modif}>Modifiable</Text>
                <View style={styles.inputView}>
                    {/*TODO: DatePicker (ca marchait pas du coup on peut pas changer la date alors que ca marche en back :/ */}
                    {/*<DateTime date={this.state.date}/>*/}
                    <TextInput
                        style={styles.inputText}
                        placeholderTextColor="#003f5c"
                        onChangeText={(stoppedAt) => this.setState({stoppedAt: stoppedAt})}
                        value={this.state.stoppedAt}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholderTextColor="#003f5c"
                        onChangeText={(packageCost) => this.setState({packageCost: packageCost})}
                        value={this.state.packageCost.toString()}
                    />
                </View>
                <TouchableOpacity
                    style={styles.registerBtn}
                    onPress={this._register}
                >
                    <Text style={{color: "#fff"}}>Mettre à jour</Text>
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
    modif: {
        fontStyle: 'italic',
        fontSize: 15,
        color: "#fb5b5a",
        marginBottom: 10
    },
    inputView: {
        width: "50%",
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
    image: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        width: "50%",
        backgroundColor: "#465881",
        color: "#ffffff",
        borderRadius: 25,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
});
