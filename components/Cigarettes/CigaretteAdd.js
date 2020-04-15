import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import {API_URL} from 'react-native-dotenv'

export default class CigaretteAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            intensity: '',
            feelings: '',
            reason: '',
        }
    }

    _loadFriend = async () => {
        const result = await fetch(API_URL + 'api/cigarette/add', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                intensity: this.state.intensity,
                feelings: this.state.feelings,
                reason: this.state.reason,
            })
        });
        this.forceUpdate()
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>Rajouter une cigarette si vous avez craqué aujourd'hui, malheuresement cela va remettre votre compteur a 0</Text>
                <Text style={styles.title}>Ajouter une cigarette</Text>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Intensité ..."
                        placeholderTextColor="#003f5c"
                        onChangeText={(intensity) => this.setState({intensity})}
                        value={this.state.intensity}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Ressenti ..."
                        placeholderTextColor="#003f5c"
                        onChangeText={(feelings) => this.setState({feelings})}
                        value={this.state.feelings}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Raison ..."
                        placeholderTextColor="#003f5c"
                        onChangeText={(reason) => this.setState({reason})}
                        value={this.state.reason}
                    />
                </View>
                <TouchableOpacity
                    style={styles.add}
                    onPress={this._loadFriend}
                >
                    <Text style={{color: "#fff"}}>Ajouter</Text>
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
    title: {
        fontWeight: "bold",
        fontSize: 25,
        color: "#fb5b5a",
        padding: 20
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 30,
        justifyContent: "center",
        padding: 20,
        margin: 10
    },
    inputText: {
        height: 50,
        color: "white"
    },
    add: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },
    txt: {
        margin: 40,
        color: '#fff',
        alignItems: "center",
        justifyContent: 'center'
    }
});
