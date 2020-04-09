import * as React from 'react';
import Stats from '../components/Stats'
import {View} from "react-native";

export default class StatsScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Stats navigation={this.props.navigation}/>
            </View>
        )
    }
}

