import * as React from 'react';
import Stats from '../components/Stats/Stats'
import CigaretteBtn from "../components/Cigarettes/CigaretteBtn";
import CigaretteList from "../components/Cigarettes/CigaretteList";
import {View} from "react-native";

export default class StatsScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Stats navigation={this.props.navigation}/>
                <CigaretteList/>
                <CigaretteBtn navigation={this.props.navigation}/>
            </View>
        )
    }
}

