import * as React from 'react';
import Stats from '../components/Stats'

export default class StatsScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stats navigation={this.props.navigation}/>
        )
    }
}

