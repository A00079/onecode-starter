import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { enableScreens } from 'react-native-screens';
import Start from '../src/screens/Start';
import SignUp from '../src/screens/SignUp';
import SignIn from '../src/screens/SignIn';
import Otp from '../src/screens/Otp';
import Landing from '../src/screens/Landing';

enableScreens();

const Stack = createNativeStackNavigator();

export default function StartNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Start"
                component={Start}
                options={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    stackAnimation: 'slide_from_right',
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    title: 'Sign up',
                    headerShown: true,
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    stackAnimation: 'slide_from_right',
                    headerStyle: {
                        backgroundColor: '#2F176B',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bolder',
                    },
                }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    title: 'Sign in',
                    headerShown: true,
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    stackAnimation: 'slide_from_right',
                    headerStyle: {
                        backgroundColor: '#2F176B',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bolder',
                    },

                }}
            />
            <Stack.Screen
                name="OTP"
                component={Otp}
                options={{
                    title: 'OTP',
                    headerShown: true,
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    stackAnimation: 'slide_from_right',
                    headerStyle: {
                        backgroundColor: '#2F176B',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bolder',
                    },
                }}
            />
            <Stack.Screen
                name="Landing"
                component={Landing}
                options={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                }}
            />
        </Stack.Navigator>
    );
}