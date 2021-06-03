import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../src/components';

const SignIn = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleNavigation = (stackname) => {
        navigation.navigate(stackname, { phonenumber: '+91' + phoneNumber });
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/img/on-board-bg.png')} style={styles.image}>
                <View style={tailwind('flex flex-col w-full h-full justify-center px-5')}>
                    <View style={tailwind('w-full')}>
                        <View style={tailwind('flex flex-col w-full items-center justify-center')}>
                            <Image
                                style={tailwind('w-56 h-48 content-center')}
                                source={require('../../assets/img/signotp.png')}
                            />
                        </View>
                    </View>
                    <View style={tailwind('w-full')}>
                        <Text style={tailwind('text-white font-bold text-lg text-center py-1 w-full')}>Enter your mobile number</Text>
                        <View style={tailwind('w-full px-16')}>
                            <Text style={tailwind('text-white text-center w-full')}>Will send you one time password (OTP)</Text>
                        </View>
                    </View>
                    <View style={tailwind('w-full py-6')}>
                        <View style={tailwind('w-full px-8')}>
                            <TextInput
                                onChangeText={setPhoneNumber}
                                placeholder='Enter mobile number'
                                keyboardType="phone-pad"
                                autoCompleteType="tel"
                                style={tailwind('px-3 py-2 text-center text-white relative bg-purple-900 rounded text-lg border border-gray-500')}
                            />
                        </View>
                    </View>
                    <View style={tailwind('w-full px-24')}>
                        <Button
                            icon_name='mail'
                            text='Send OTP'
                            onPress={() => handleNavigation('OTP')}
                            iconSize={14}
                            gradientColors={['#e8eae6', '#e8eae6', '#e8eae6']}
                            classname='w-full px-5 py-3 rounded-lg'
                            grdStart={1.6}
                            grdEnd={2}
                            icon_color='black'
                            textColor='text-black'
                        />
                    </View>
                </View>
            </ImageBackground>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    }
});


export default SignIn;
