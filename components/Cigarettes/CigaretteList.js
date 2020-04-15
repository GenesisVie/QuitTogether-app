import * as React from 'react';
import {AsyncStorage, FlatList, StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {ListItem} from 'react-native-elements'
import {ErrorBoundary} from "../ErrorBoundary";
import {API_URL} from 'react-native-dotenv'

export default class CigaretteList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cigarettes: [],
            loading: false
        }
        this._loadCigarette();
    }

    _loadCigarette = async () => {
        const result = await fetch(API_URL + 'api/cigarette/all', {
            headers: {
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET',
        });
        const data = await result.json();
        console.log(data)
        if (data.status !== 500) {
            this.state.cigarettes = data;
        }
        if (this.state.cigarettes.length > 0) {
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
            title={item.reason }
        />
    );

    render() {
        if (this.state.loading) {
            return (
                <ErrorBoundary>
                    <View style={styles.container}>
                        <Text style={styles.title}>Mes Craquages</Text>
                        <FlatList
                            style={styles.content}
                            keyExtractor={this.keyExtractor}
                            data={this.state.cigarettes}
                            renderItem={this.renderItem}
                        />
                    </View>
                </ErrorBoundary>
            )
        } else {
            return (
                <View />
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

