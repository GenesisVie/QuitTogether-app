import * as React from 'react';
import {AsyncStorage, StyleSheet, View, Text} from 'react-native';


export default class DetailBlog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: {
                'title': '',
                'description': '',
                'image': '',
                'createdAt': ''
            }
        }
        this._loadDetail();
    }

    _loadDetail = async () => {
        const idBlog = this.props.route.params.id;
        const result = await fetch('https://quittogether.influcom-preprod.fr/api/blog/id/' + idBlog, {
            headers: {
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            method: 'GET',
        });
        const blog = await result.json();
        this.state.blog.title = blog.title;
        this.state.blog.description = blog.description;
        this.state.blog.image = blog.image;
        this.state.blog.createdAt = blog.createdAt;
        this.forceUpdate()
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.blog.title}</Text>
                <Text style={styles.description}>{this.state.blog.description}</Text>
                <Text style={styles.image}>{this.state.blog.image}</Text>
            </View>
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
    description: {
        backgroundColor: "#003f5c",
        color: "#ffffff",
        padding: 20
    },
    image:{
        backgroundColor: "#003f5c",
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
    },
});

