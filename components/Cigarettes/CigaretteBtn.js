import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import {API_URL} from 'react-native-dotenv'

export default class CigaretteBtn extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.add}
                    onPress={() => {this.props.navigation.navigate('Cigarette')}}
                >
                    <Text style={{color: "#fff"}}>J'ai craqué </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },

    add: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        margin: 20
    },
});
