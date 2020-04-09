import * as React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, AsyncStorage} from 'react-native';
import {API_URL} from 'react-native-dotenv'
// import DateTime from '../components/DateTime'

export default class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lastname: "",
            firstname: "",
            countDown: "",
            packageCost: "",
            stoppedAtDate: "",
            stoppedAt: "",
            averageDay: "",
            image: ""
        };
    }

    componentDidMount() {
        this._fetchingMyDetails();
    }

    _fetchingMyDetails = async () => {
        const token = await AsyncStorage.getItem('token');
        const result = await fetch(API_URL + 'api/user/me', {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            method: 'GET',

        });
        const data = await result.json();

        this.state.lastname = data.lastname
        this.state.firstname = data.firstname
        this.state.stoppedAtDate = new Date(data.stoppedAt.timestamp * 1000).toLocaleDateString("fr-FR");
        this.state.stoppedAt = data.stoppedAt;
        this.state.averageDay= data.averageDay;
        this.state.image = data.image
        this.state.packageCost = data.packageCost;
        this.forceUpdate()

        // this.state.countDown = data,
    };

    _updatingMyDetails = async () => {
        const result = await fetch(API_URL + 'api/user/update', {
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
        const stoppedAt = new Date(this.state.stoppedAt.timestamp * 1000);
        const oneDay = 24 * 60 * 60 * 1000;
        const today = new Date();
        const countUp = Math.round(Math.abs((today - stoppedAt) / oneDay));
        const eco = ((this.state.averageDay* countUp) / 20) * this.state.packageCost;
        return (
            <View style={styles.container}>
                <Text style={styles.stats}>Mes Stats</Text>
                <Text style={styles.textStats}>
                    Ça fait <Text style={styles.bigRed}>{countUp}</Text> jours que vous n'avez pas fumé !!
                </Text>
                <Text style={styles.textStats}>
                    Vous avez économisez <Text style={styles.bigRed}>{eco}€</Text>
                </Text>
                <Text style={styles.logo}>Mes Informations</Text>
                <Image
                    style={styles.image}
                    source={{source: {uri: API_URL + 'uploads/images/user/' + this.state.image}}}
                />
                <Text style={styles.text}>
                    {this.state.firstname}</Text>
                <Text style={styles.text}>
                    {this.state.lastname}</Text>

                <Text style={styles.modif}>Modifiable</Text>
                <View style={styles.inputView}>
                    {/*TODO: DatePicker (ca marchait pas du coup on peut pas changer la date même si la requête existe côté back :/ */}
                    {/*<DateTime date={this.state.date}/>*/}
                    <TextInput
                        style={styles.inputText}
                        placeholderTextColor="#003f5c"
                        onChangeText={(stoppedAt) => this.setState({stoppedAt: stoppedAt})}
                        value={this.state.stoppedAtDate}
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
    bigRed: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#fb5b5a",
    },
    stats: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
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
    textStats: {
        color: "#ffffff",
        justifyContent: "center",
        padding: 20
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
