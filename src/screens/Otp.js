import React, { Component, useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../src/components';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import Constants from 'expo-constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from '../../firebase';

const Otp = ({ navigation, route }) => {
    const [code1, setCode1] = useState('');
    const [code2, setCode2] = useState('');
    const [code3, setCode3] = useState('');
    const [code4, setCode4] = useState('');
    const [code5, setCode5] = useState('');
    const [code6, setCode6] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    // useEffect(() => {
    //     if (!!route.params.phonenumber) {
    //         sendVerification(route.params.phonenumber);
    //     }
    // }, []);

    const sendVerification = (phoneNumber) => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
            .then(setVerificationId);
    };

    const confirmCode = () => {
        // const credential = firebase.auth.PhoneAuthProvider.credential(
        //     verificationId,
        //     code1 + code2 + code3 + code4 + code5 + code6
        // );
        // firebase
        //     .auth()
        //     .signInWithCredential(credential)
        //     .then((result) => {
        //         console.log(result);
        //         navigation.navigate('Landing');
        //     });
        navigation.navigate('Landing');
    };
    const handleNavigation = (stackname) => {
        navigation.navigate(stackname);
    }
    return (
        < View style={styles.container} >
            <ImageBackground source={require('../../assets/img/on-board-bg.png')} style={styles.image}>
                <FirebaseRecaptchaVerifierModal
                    ref={recaptchaVerifier}
                    firebaseConfig={Constants.manifest.extra.firebase}
                />
                <View style={tailwind('flex flex-col w-full h-full justify-center px-5')}>
                    <View style={tailwind('w-full')}>
                        <View style={tailwind('flex flex-col w-full items-center justify-center')}>
                            <Image
                                style={tailwind('flex flex-wrap w-60 h-64 content-center')}
                                source={require('../../assets/img/otpscreen.png')}
                            />
                        </View>
                    </View>
                    <View style={tailwind('w-full')}>
                        <Text style={tailwind('text-yellow-300 font-bold text-2xl text-center py-1')}>Verification</Text>
                        <Text style={tailwind('text-white font-bold text-lg text-center')}>Enter OTP To
                        Verify Account
                        </Text>
                        <View style={tailwind('w-full')}>
                            <Text style={tailwind('text-white text-center w-full')}>We have send the OTP on</Text>
                            <Text style={tailwind('text-white text-center w-full')}>9895857483</Text>
                        </View>
                        <View style={tailwind('w-full py-6')}>
                            <View style={tailwind('flex flex-row w-full items-center justify-between px-2')}>
                                <View style={tailwind('w-11')}>
                                    <TextInput
                                        style={tailwind('px-3 py-2 text-center text-gray-300 relative bg-purple-900  rounded text-sm border border-gray-500')}
                                        onChangeText={setCode1}
                                        keyboardType="number-pad"
                                    />
                                </View>
                                <View style={tailwind('w-11')}>
                                    <TextInput
                                        style={tailwind('px-3 py-2 text-center text-gray-300 relative bg-purple-900  rounded text-sm border border-gray-500')}
                                        onChangeText={setCode2}
                                        keyboardType="number-pad"
                                    />
                                </View>
                                <View style={tailwind('w-11')}>
                                    <TextInput
                                        style={tailwind('px-3 py-2 text-center text-gray-300 relative bg-purple-900  rounded text-sm border border-gray-500')}
                                        onChangeText={setCode3}
                                        keyboardType="number-pad"
                                    />
                                </View>
                                <View style={tailwind('w-11')}>
                                    <TextInput
                                        style={tailwind('px-3 py-2 text-center text-gray-300 relative bg-purple-900  rounded text-sm border border-gray-500')}
                                        onChangeText={setCode4}
                                        keyboardType="number-pad"
                                    />
                                </View>
                                <View style={tailwind('w-11')}>
                                    <TextInput
                                        style={tailwind('px-3 py-2 text-center text-gray-300 relative bg-purple-900  rounded text-sm border border-gray-500')}
                                        onChangeText={setCode5}
                                        keyboardType="number-pad"
                                    />
                                </View>
                                <View style={tailwind('w-11')}>
                                    <TextInput
                                        style={tailwind('px-3 py-2 text-center text-gray-300 relative bg-purple-900  rounded text-sm border border-gray-500')}
                                        onChangeText={setCode6}
                                        keyboardType="number-pad"
                                    />
                                </View>
                            </View>
                            <View style={tailwind('w-full py-6 px-24')}>
                                <Button
                                    icon_name='shield'
                                    text='Verify OTP'
                                    onPress={() => confirmCode()}
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

export default Otp;
