import * as React from 'react';
import FriendList from '../components/FriendList'
// import FriendAdd from '../components/FriendAdd'
// import FriendStat from '../components/FriendStat'

export default class FriendScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FriendList></FriendList>
        )
    }
}

