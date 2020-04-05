import * as React from 'react';
import Blog from '../components/Blog'


export default class HomeScreen extends React.Component {

    render() {
        return (
            <Blog navigation={this.props.navigation}/>
        )
    }
}

