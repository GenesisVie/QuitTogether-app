import * as React from 'react';
import {AsyncStorage, FlatList, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements'
import {ErrorBoundary} from "../ErrorBoundary";
import {API_URL} from 'react-native-dotenv'

export default class FriendStat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            friendsStats: [],
            loading: false
        }
        this._loadFriendStats();
    }

    //TODO: Système de likes ou réaction


    _loadFriendStats = async () => {
        const result = await fetch(API_URL + 'api/friend/all/user-stat', {
            headers: {
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET',
        });
        const data = await result.json();
        if (data.status !== 500) {
            this.state.friendsStats = data;
            this.state.loading = true;
        }
        this.forceUpdate()
    };

    keyExtractor = (item, index) => index.toString()
    _displayDetailStats = (item) => {
        //TODO: Detail stats friend
        //Detail de la stat, avec un check si on l'a debloqué aussi
        console.log(item)
    }
    renderItem = ({item}) => (
        <TouchableOpacity onPress={() => {
            this._displayDetailStats(item)
        }}>
            <ListItem
                containerStyle={styles.containerList}
                contentContainerStyle={styles.item}
                subtitleStyle={styles.text}
                subtitle={'"' + item.title + '"'}
                titleStyle={styles.titlecontent}
                title={item.firstname + ' ' + item.lastname + ' a débloqué un accomplissement'}
                // leftAvatar={{ source: { uri: API_URL+'uploads/images/stats/'+item.image} }}
                chevron
            />
        </TouchableOpacity>
    )

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Les accomplissements de vos amis</Text>
                    <FlatList
                        style={styles.content}
                        keyExtractor={this.keyExtractor}
                        data={this.state.friendsStats}
                        renderItem={this.renderItem}
                    />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Pas d'amis pas de stats </Text>
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
        height: 50,
        marginBottom: 20,
        color: "#ffffff",
        padding: 20
    },
    containerList: {
        backgroundColor: "#465881",
        marginBottom: 30,
        borderRadius: 10,
        padding: 20
    },
    item: {
        height: 20,
        marginTop: 10,
        margin: 5
    },
    titlecontent: {
        color: "#ffffff",
    },
    text: {
        color: "#ffffff",
    },
});

