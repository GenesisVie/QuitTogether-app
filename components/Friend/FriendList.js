import * as React from 'react';
import {AsyncStorage, FlatList, StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {ListItem} from 'react-native-elements'
import {ErrorBoundary} from "../ErrorBoundary";
import {API_URL} from 'react-native-dotenv'

export default class FriendList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            loading: false
        }
        this._loadFriend();
    }

    _loadFriend = async () => {
        const result = await fetch(API_URL + 'api/friend/all', {
            headers: {
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET',
        });
        const data = await result.json();
        if (data.status !== 500) {
            this.state.friends = data;
            this.state.loading = true;
        }
        this.forceUpdate()
    };

    keyExtractor = (item, index) => index.toString()

    renderItem = ({item}) => (
        <ListItem
            containerStyle={styles.containerList}
            contentContainerStyle={styles.item}
            titleStyle={styles.titlecontent}
            title={item.firstname + ' ' + item.lastname}
            leftAvatar={{source: {uri: API_URL + 'uploads/images/user/' + item.image}}}
        />
    );

    render() {
        if (this.state.loading) {
            return (
                <ErrorBoundary>
                    <View style={styles.container}>
                        <Text style={styles.title}>Mes Amis</Text>
                        <FlatList
                            style={styles.content}
                            keyExtractor={this.keyExtractor}
                            data={this.state.friends}
                            renderItem={this.renderItem}
                        />
                    </View>
                </ErrorBoundary>
            )
        }else{
            return (
                    <View style={styles.container}>
                        <Text style={styles.title}>Vous n'avez pas d'amis :( </Text>

                    </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        color: "#fb5b5a",
        padding: 20
    },
    content: {
        backgroundColor: "#003f5c",
        height: 30,
        marginBottom: 10,
        color: "#ffffff",
        padding: 20
    },
    containerList: {
        backgroundColor: "#465881",
        marginBottom: 20,
        borderRadius: 10,
        padding: 10
    },
    item: {
        height: 20,
        marginTop: 10,
        margin: 5
    },
    titlecontent: {
        textAlign: 'center',
        color: "#ffffff",
        padding: 10
    },
    text: {
        color: "#ffffff",
    },
});

