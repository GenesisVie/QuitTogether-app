import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {ErrorBoundary} from "../ErrorBoundary";


export default class Home extends React.Component {

    render() {
        return (
            <ErrorBoundary>
                <View style={styles.container}>
                    <Text style={styles.title}>Bienvenue sur QuitTogether</Text>
                    <Text style={styles.description}>Venez arreter de fumer avec vos amis pour avoir la meilleure des
                        motivations
                    </Text>
                    <Image style={styles.image} source={require('../../assets/images/friend.png')}/>
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
        fontSize: 30,
        color: "#fb5b5a",
        marginTop: 40,
        padding: 20
    },
    description: {
        margin: 40,
        color: "#ffffff",
        fontSize: 25
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',

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

