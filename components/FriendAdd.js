import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import {API_URL} from 'react-native-dotenv'

export default class FriendAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
    }

    _loadFriend = async () => {
        const result = await fetch(API_URL + 'api/friend/add', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                username: this.state.email,
            })
        });
        this.forceUpdate()
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Ajouter un amis</Text>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                    />
                </View>

                <TouchableOpacity
                    style={styles.add}
                    onPress={this._loadFriend}
                >
                    <Text style={{color: "#fff"}}>ajouter</Text>
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
        padding: 20
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
});
