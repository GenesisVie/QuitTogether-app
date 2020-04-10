import * as React from 'react';
import FriendList from '../components/Friend/FriendList'
import FriendAdd from '../components/Friend/FriendAdd'
import FriendStats from '../components/Friend/FriendStats'
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native'

export default class FriendScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            //TODO: L'api remarche allheihuia
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

