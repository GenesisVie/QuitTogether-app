import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import Login from '../components/Auth/Login'
import Home from "../components/Home/Home";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Login';

export default function BottomTabNavigator({navigation, route}) {
    // Set the header title on the parent stack navigator depending on the
    // currently active tab. Learn more in the documentation:
    // https://reactnavigation.org/docs/en/screen-options-resolution.html

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: () =>false,
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-home"/>,
                }}
            />
            <BottomTab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarLabel: () =>false,
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-key"/>,
                }}
            />
        </BottomTab.Navigator>
    );
}
