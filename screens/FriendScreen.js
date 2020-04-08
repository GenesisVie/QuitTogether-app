import * as React from 'react';
import FriendList from '../components/FriendList'
import FriendAdd from '../components/FriendAdd'
import FriendStats from '../components/FriendStats'
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native'

export default class FriendScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FriendAdd/>
                <FriendStats/>
                <FriendList/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

})

