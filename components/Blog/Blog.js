import * as React from 'react';
import {AsyncStorage, FlatList, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements'
import {ErrorBoundary} from "../ErrorBoundary";
import {API_URL} from 'react-native-dotenv'

export default class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {blogs: []}
        this._loadBlogs();
    }

    _loadBlogs = async () => {
        const result = await fetch(API_URL + 'api/blog/all', {
            headers: {
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET',
        });
        this.state.blogs = await result.json();
        this.forceUpdate()
    };

    keyExtractor = (item, index) => index.toString()

    renderItem = ({item}) => (
        <TouchableOpacity onPress={() => {
            this._displayDetailBlog(item.id)
        }}>
            <ListItem
                containerStyle={styles.containerList}
                contentContainerStyle={styles.item}
                titleStyle={styles.titlecontent}
                title={item.title}
                leftAvatar={{source: {uri: API_URL + 'uploads/images/blog/' + item.image}}}
                chevron
            />
        </TouchableOpacity>
    );
    _displayDetailBlog = (idBlog) => {
        this.props.navigation.navigate("DetailBlog", {id: idBlog})
    };

    render() {
        return (

            <ErrorBoundary>
                <View style={styles.container}>
                    <Text style={styles.title}>QuitTogether</Text>
                    <Text style={styles.text}>
                        Merci de nous faire confiance durant cette aventure avec vous.

                        Quit Together dispose de plusieurs fonctionnalités qui vous aideront tout au long de votre
                        épreuve d'arrêter la cigarette.
                        Nous disposons tout d'abord d'un blog qui vous permettra d'avoir des articles en temps réel sur
                        les bienfaits de l'arrêt de la cigarette ainsi que diverses articles autour de la cigarette. Je
                        vous invite a aller voir dès maintenant les premiers articles disponibles!
                        Bonne navigation et bonne chance.

                        Quit Together for a better health.
                    </Text>
                    <Text style={styles.title}>Nos Article Stop Tabac</Text>
                    <FlatList
                        style={styles.content}
                        keyExtractor={this.keyExtractor}
                        data={this.state.blogs}
                        renderItem={this.renderItem}
                    />
                </View>
            </ErrorBoundary>
        )
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
        marginTop: 40,
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
        color: "#fb5b5a",
    },
    text: {
        color: "#ffffff",
        textAlign: "justify",
        marginLeft: 20,
        marginRight: 20
    },
});

