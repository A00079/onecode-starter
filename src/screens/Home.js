import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/img/app-theme.png')} style={styles.image}>
                <View style={tailwind('flex flex-col justify-start w-full h-full pt-3 px-5')}>
                    <View style={tailwind('flex flex-row justify-between w-full h-20 items-center')}>
                        <Text style={tailwind('text-gray-300 font-bold text-xl')}>Home</Text>
                        <Text style={tailwind('text-yellow-200 font-bold text-sm')}>
                            <Ionicons name='notifications' size={22} color='white' />
                        </Text>
                    </View>
                    <Text style={tailwind('text-gray-200 font-bold text-xl py-1')}>Hello, Clerk Kent</Text>
                    <Text style={tailwind('text-yellow-200 font-bold text-sm')}>Your Code :-</Text>
                    <View style={tailwind('flex flex-row justify-start w-full mb-12 items-center')}>
                        <Text style={tailwind('text-white font-bold text-sm pr-1')}>
                            Clerk@596059859
                        </Text>
                        <Text style={tailwind('text-white font-bold text-sm')}>
                            <Ionicons name='share-social' size={18} color='white' />
                        </Text>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        style={tailwind('w-full')}>
                        <View style={tailwind('w-full pt-1')}>
                            <View style={tailwind('flex flex-row justify-between w-full')}>
                                <View style={tailwind('flex flex-row justify-between bg-white border border-gray-300 text-white font-bold rounded-md  text-xl px-1 py-2')}>
                                    <Ionicons name='checkmark-done-circle' size={20} color='green' />
                                    <View style={tailwind('flex flex-col pl-1')}>
                                        <Text style={tailwind('text-green-500 font-bold text-sm pr-1')}>
                                            Paid
                                    </Text>
                                        <Text style={tailwind('text-gray-500 font-bold text-xs pr-1')}>
                                            Know More...
                                    </Text>
                                    </View>
                                    <Text style={tailwind('text-black  font-bold text-xl')}>
                                        &#8377;
                                </Text>
                                    <Text style={tailwind('text-green-300 font-bold text-xl pr-1')}>
                                        456
                                </Text>
                                </View>
                                <View style={tailwind('flex flex-row justify-between bg-white border border-gray-300 text-white font-bold rounded-md  text-xl px-1 py-2')}>
                                    <Ionicons name='timer' size={20} color='black' />
                                    <View style={tailwind('flex flex-col pl-1')}>
                                        <Text style={tailwind('text-yellow-600 font-bold text-sm pr-1')}>
                                            Pending
                                    </Text>
                                        <Text style={tailwind('text-gray-500 font-bold text-xs pr-1')}>
                                            Know More...
                                    </Text>
                                    </View>
                                    <Text style={tailwind('text-black  font-bold text-xl')}>
                                        &#8377;
                                </Text>
                                    <Text style={tailwind('text-yellow-600 font-bold text-xl pr-1')}>
                                        278
                                </Text>
                                </View>
                            </View>
                        </View>
                        <View style={tailwind('w-full pt-2')}>
                            <View style={tailwind('flex flex-row justify-between w-full')}>
                                <View style={tailwind('flex flex-row justify-between bg-yellow-300  text-white font-bold rounded-md  text-xl px-1 py-3')}>
                                    <Ionicons name='gift-sharp' size={30} color='white' />
                                    <View style={tailwind('flex flex-col pl-1')}>
                                        <Text style={tailwind('text-yellow-600 font-bold text-xs pr-1')}>
                                            Signup Bonus
                                    </Text>
                                        <Text style={tailwind('text-yellow-600  font-bold text-xs pr-1')}>
                                            <Ionicons name='md-lock-closed' size={12} color='white' />Locked
                                    </Text>
                                    </View>
                                    <Text style={tailwind('text-yellow-700   font-bold text-xl')}>
                                        &#8377;
                                </Text>
                                    <Text style={tailwind('text-yellow-600 font-bold text-xl pr-1')}>
                                        50
                                </Text>
                                </View>
                                <View style={tailwind('flex flex-row justify-between bg-yellow-300  text-white font-bold rounded-md  text-xl px-1 py-3')}>
                                    <Ionicons name='people' size={30} color='white' />
                                    <View style={tailwind('flex flex-col pl-1')}>
                                        <Text style={tailwind('text-yellow-600 font-bold text-xs pr-1')}>
                                            Refferral Bo..
                                    </Text>
                                        <Text style={tailwind('text-yellow-600 font-bold text-xs pr-1')}>
                                            <Ionicons name='md-lock-closed' size={12} color='white' />Locked
                                    </Text>
                                    </View>
                                    <Text style={tailwind('text-yellow-700  font-bold text-xl')}>
                                        &#8377;
                                    </Text>
                                    <Text style={tailwind('text-yellow-600 font-bold text-xl pr-1')}>
                                        25
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={tailwind('w-full pt-4 pb-3')}>
                            <Text style={tailwind('text-left text-gray-600  font-bold text-sm')}>
                                Offers
                            </Text>
                            <Text style={tailwind('text-left text-gray-400  font-semibold text-xs')}>
                                Top best offers are listed below
                            </Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}>
                            <View style={tailwind('flex flex-row justify-between w-full items-center')}>
                                <View style={tailwind('pr-2')}>
                                    <View style={tailwind('h-20 flex flex-row items-center border-gray-200 border p-2 rounded-lg')}>
                                        <View style={tailwind('w-16 h-16 bg-gray-100 mr-3 rounded-md')}>
                                        </View>
                                        <View style={tailwind('flex-grow')}>
                                            <View style={tailwind('flex flex-row justify-between items-center')}>
                                                <Text style={tailwind('text-gray-600 font-bold text-sm pr-2')}>
                                                    Equitas Small Finance Bank
                                                </Text>
                                                <View>
                                                    <Ionicons name='arrow-forward-circle-sharp' size={15} color="black" />
                                                </View>
                                            </View>
                                            <Text style={tailwind('text-gray-500 text-xs')}>
                                                Refer and Earn /
                                        <Text style={tailwind('text-green-500 text-xs font-bold')}>
                                                    &nbsp;$100
                                        </Text>
                                            </Text>
                                            <Text style={tailwind('w-32 text-gray-400 font-medium text-xs')}>
                                                Successfull Self Saving Account
                                    </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={tailwind('pr-2')}>
                                    <View style={tailwind('h-20 flex flex-row items-center border-gray-200 border p-2 rounded-lg')}>
                                        <View style={tailwind('w-16 h-16 bg-gray-100 mr-3 rounded-md')}>
                                        </View>
                                        <View style={tailwind('flex-grow')}>
                                            <View style={tailwind('flex flex-row justify-between')}>
                                                <Text style={tailwind('text-gray-600 font-bold text-sm pr-2')}>
                                                    Equitas Small Finance Bank
                                                </Text>
                                                <View>
                                                    <Ionicons name='arrow-forward-circle-sharp' size={15} color="black" />
                                                </View>
                                            </View>
                                            <Text style={tailwind('text-gray-500 text-xs')}>
                                                Refer and Earn /
                                        <Text style={tailwind('text-green-500 text-xs font-bold')}>
                                                    &nbsp;$100
                                        </Text>
                                            </Text>
                                            <Text style={tailwind('w-32 text-gray-400 font-medium text-xs')}>
                                                Successfull Self Saving Account
                                    </Text>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <View style={tailwind('h-20 flex flex-row items-center border-gray-200 border p-2 rounded-lg')}>
                                        <View style={tailwind('w-16 h-16 bg-gray-100 mr-3 rounded-md')}>
                                        </View>
                                        <View style={tailwind('flex-grow')}>
                                            <View style={tailwind('flex flex-row justify-between')}>
                                                <Text style={tailwind('text-gray-600 font-bold text-sm pr-2')}>
                                                    Equitas Small Finance Bank
                                                </Text>
                                                <View>
                                                    <Ionicons name='arrow-forward-circle-sharp' size={15} color="black" />
                                                </View>
                                            </View>
                                            <Text style={tailwind('text-gray-500 text-xs')}>
                                                Refer and Earn /
                                        <Text style={tailwind('text-green-500 text-xs font-bold')}>
                                                    &nbsp;$100
                                        </Text>
                                            </Text>
                                            <Text style={tailwind('w-32 text-gray-400 font-medium text-xs')}>
                                                Successfull Self Saving Account
                                    </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                        <View style={tailwind('w-full pt-4 pb-3')}>
                            <Text style={tailwind('text-left text-gray-600  font-bold text-sm')}>
                                Announcements
                            </Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}>
                            <View style={tailwind('flex flex-row justify-between w-full items-center')}>
                                <View style={tailwind('pr-2')}>
                                    <View style={tailwind('h-32 flex flex-row bg-white border border-gray-200 items-center p-2 rounded-lg')}>
                                        <View style={tailwind('flex-grow')}>
                                            <View style={tailwind('flex flex-row justify-between items-center')}>
                                                <Text style={tailwind('text-gray-900 font-bold text-sm pr-2')}>
                                                    Equitas Small Finance Bank
                                                </Text>
                                            </View>
                                            <Text style={tailwind('text-gray-600 text-xs')}>
                                                Refer and Earn /
                                            <Text style={tailwind('text-green-400 text-xs font-bold')}>
                                                    &nbsp;$100
                                            </Text>
                                            </Text>
                                            <Text style={tailwind('w-32 text-gray-600 font-medium text-xs')}>
                                                Successfull Self Saving Account
                                        </Text>
                                            <Text style={tailwind('w-32 text-gray-400 font-bold text-xs')}>
                                                Open Zero Balance Saving Account
                                        </Text>
                                        </View>
                                        <View style={tailwind('w-24 h-24 bg-gray-100 ml-3 rounded-md')}>
                                        </View>
                                    </View>
                                </View>
                                <View style={tailwind('pr-2')}>
                                    <View style={tailwind('h-32 flex flex-row bg-white border border-gray-200 items-center p-2 rounded-lg')}>
                                        <View style={tailwind('flex-grow')}>
                                            <View style={tailwind('flex flex-row justify-between items-center')}>
                                                <Text style={tailwind('text-gray-900 font-bold text-sm pr-2')}>
                                                    Equitas Small Finance Bank
                                                </Text>
                                            </View>
                                            <Text style={tailwind('text-gray-600 text-xs')}>
                                                Refer and Earn /
                                            <Text style={tailwind('text-green-400 text-xs font-bold')}>
                                                    &nbsp;$100
                                            </Text>
                                            </Text>
                                            <Text style={tailwind('w-32 text-gray-600 font-medium text-xs')}>
                                                Successfull Self Saving Account
                                        </Text>
                                            <Text style={tailwind('w-32 text-gray-400 font-bold text-xs')}>
                                                Open Zero Balance Saving Account
                                        </Text>
                                        </View>
                                        <View style={tailwind('w-24 h-24 bg-gray-100 ml-3 rounded-md')}>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </ScrollView>
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
    }
});


export default Home;
