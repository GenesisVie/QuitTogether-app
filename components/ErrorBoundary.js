import React from 'react';
import {Text} from "react-native";

export class ErrorBoundary extends React.Component {
    state = { hasError: false }

    static getDerivedStateFromError (error) {
        return { hasError: true }
    }

    componentDidCatch (error, info) {
        console.log(error, info.componentStack)
    }

    render () {
        return this.state.hasError
            ? <Text>RELOAD</Text>
            : this.props.children
    }
}
