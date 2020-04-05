import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class DetailStats extends React.Component {

    constructor(props) {
        super(props);
        const stat = this.props.route.params.stat;
        this.state = {
            stat: {
                'title': stat.title,
                'lifetime': stat.lifetime,
                'moneyEco': stat.moneyEco,
                'cigarettes': stat.cigarettes
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.stat.title}</Text>
                <Text style={styles.description}>{this.state.stat.cigarettes}</Text>
                <Text style={styles.image}>{this.state.stat.lifetime}</Text>
                <Text style={styles.image}>{this.state.stat.moneyEco}</Text>
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
    image: {
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

