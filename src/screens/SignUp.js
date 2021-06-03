import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, CheckBox, TouchableOpacity, ImageBackground } from 'react-native';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../src/components';

const SignUp = ({ navigation }) => {
    const [isSelected, setSelection] = useState(true);
    const handleNavigation = (stackname) => {
        navigation.navigate(stackname);
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/img/on-board-bg.png')} style={styles.image}>
                <View style={tailwind('flex flex-col w-full h-full justify-between pt-12 px-5')}>
                    <View style={tailwind('w-full')}>
                        <Text style={tailwind('text-center text-sm text-gray-200 font-bold')}>Invite Only Sign Up</Text>
                        <Text style={tailwind('text-center text-sm text-yellow-200 font-medium')}>Know More</Text>
                    </View>
                    <View style={tailwind('w-full')}>
                        <SafeAreaView>
                            <View style={tailwind('w-full mb-4')}>
                                <Text style={tailwind('text-left text-sm text-gray-200 font-bold pb-1')}>Name</Text>
                                <TextInput
                                    style={tailwind('px-3 py-2 text-gray-300 relative bg-purple-900 rounded text-sm border border-gray-500')}
                                    value={'Ajay Bendre'}
                                />
                            </View>
                            <View style={tailwind('w-full mb-4')}>
                                <Text style={tailwind('text-left text-sm text-gray-200 font-bold pb-1')}>Mobile Number</Text>
                                <TextInput
                                    style={tailwind('px-3 py-2 text-gray-300 relative bg-purple-900 rounded text-sm border border-gray-500')}
                                    value={'91+ 98947484674'}
                                />
                            </View>
                            <View style={tailwind('w-full mb-4')}>
                                <Text style={tailwind('text-left text-sm text-gray-200 font-bold pb-1')}>Referral Code Number</Text>
                                <TextInput
                                    style={tailwind('px-3 py-2 text-gray-300 relative bg-purple-900 rounded text-sm border border-gray-500')}
                                    value={'Enter friends referral code *'}
                                />
                            </View>
                            <View style={tailwind('w-full mb-4')}>
                                <Text style={tailwind('text-left text-sm text-gray-200 font-bold pb-1')}>Email Address</Text>
                                <TextInput
                                    style={tailwind('px-3 py-2 text-gray-300 relative bg-purple-900 rounded text-sm border border-gray-500')}
                                    value={'Email Address (optional)'}
                                />
                            </View>
                            <View style={tailwind('w-full flex flex-row items-center')}>
                                <CheckBox
                                    checkedColor='white'
                                    value={isSelected}
                                    onValueChange={setSelection}
                                />
                                <Text style={tailwind('text-left text-sm text-gray-200 font-bold')}>I accept all T & C</Text>
                            </View>
                        </SafeAreaView>
                    </View>
                    <View style={tailwind('w-full pb-12 px-16')}>
                        <Button
                            icon_name='person-add'
                            iconSize={14}
                            text='Create Free Account'
                            classname='w-full px-5 py-3 rounded-lg'
                            grdStart={1.6}
                            grdEnd={2}
                            icon_color='black'
                            textColor='text-black'
                            gradientColors={['#e8eae6', '#e8eae6', '#e8eae6']}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
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
    chkbox:{
        color: 'white'
    }
});

export default SignUp;
