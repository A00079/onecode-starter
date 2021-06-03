import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

const Button = ({ text, classname, grdStart, grdEnd, icon_color, icon_name, textColor, onPress, gradientColors, iconSize }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                colors={[...gradientColors]}
                start={{ x: 0, y: 0 }}
                end={{ x: grdStart, y: grdEnd }}
                style={tailwind(`flex flex-row items-center ${classname}`)}
            >
                <Text style={tailwind(`${textColor} text-center font-bold text-sm`)}> {text} </Text>
                <Ionicons name={icon_name} size={iconSize} color={icon_color} />
            </LinearGradient>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    buttonbg: {
        backgroundColor: '#000'
    }
});

export default Button;
