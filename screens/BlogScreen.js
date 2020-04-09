import * as React from 'react';
import Blog from '../components/Blog/Blog'


export default class BlogScreen extends React.Component {

    render() {
        return (
            <Blog navigation={this.props.navigation}/>
        )
    }
}

