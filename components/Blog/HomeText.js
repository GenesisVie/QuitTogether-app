import * as React from 'react';
import { StyleSheet, View, Text} from 'react-native';


export default class HomeText extends React.Component {


    render() {
        return (
                <View style={styles.container}>
                    <Text style={styles.title}>QuitTogether</Text>
                    <Text style={styles.text}>
                        Merci de nous faire confiance durant cette aventure avec vous.

                        Quit Together dispose de plusieurs fonctionnalités qui vous aideront tout au long de votre épreuve d'arrêter la cigarette.
                        Nous disposons tout d'abord d'un blog qui vous permettra d'avoir des articles en temps réel sur les bienfaits de l'arrêt de la cigarette ainsi que diverses articles autour de la cigarette. Je vous invite a aller voir dès maintenant les premiers articles disponibles!
                        Bonne navigation et bonne chance.

                        Quit Together for a better health.
                    </Text>
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
        padding: 20,
        marginTop: 10
    },
});

