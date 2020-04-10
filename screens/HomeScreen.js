import * as React from 'react';
import {SafeAreaView, StyleSheet, View} from "react-native";
import Blog from '../components/Blog/Blog'
import HomeText from "../components/Blog/HomeText";


export default class HomeScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <HomeText/>
                <Blog navigation={this.props.navigation}/>
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
