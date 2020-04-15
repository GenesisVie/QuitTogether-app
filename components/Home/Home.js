import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {ErrorBoundary} from "../ErrorBoundary";


export default class Home extends React.Component {

    render() {
        return (
            <ErrorBoundary>
                <View style={styles.container}>
                    <Text style={styles.title}>Bienvenue sur QuitTogether !</Text>
                    <Text style={styles.description}>
                        Si vous avez téléchargé cette application c'est que vous aviez besoin d'aide pour arrêter de fumer.
                        Nous avons hâte d'être a vos côtés durant cette période.
                        Mais d'abord il va falloir que vous vous inscriviez afin que l'on puisse en apprendre plus sur
                        votre situation, a tout de suite!
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
        textAlign: "justify",
        marginLeft: 20,
        marginRight: 20,
        fontSize: 25
    },
    image: {
        margin: 20
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

