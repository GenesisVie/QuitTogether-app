import * as React from 'react';
import {StyleSheet, View} from "react-native";
import CigaretteAdd from "../components/Cigarettes/CigaretteAdd";


export default class CigaretteScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <CigaretteAdd/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

})
