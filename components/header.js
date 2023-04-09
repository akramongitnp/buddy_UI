import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import Icons from 'react-native-vector-icons/Ionicons';


export default function Header({navigation}) {
  return (
    <SafeAreaView style={styles.header}>
        <TouchableOpacity><Icons name="menu-outline" size={responsiveFontSize(5)} /></TouchableOpacity>
        <Text style={{fontSize: responsiveFontSize(4)}}>buddy</Text>
        <TouchableOpacity onPress={() => {navigation.navigate('Auth')}}><Icons name="person-circle-outline" size={responsiveFontSize(5)} /></TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header: {
        width: responsiveWidth(100),
        height: responsiveHeight(15),
        alignItems:"center",
        justifyContent: "space-between",
        backgroundColor: "#eee",
        flexDirection: "row",
        padding: responsiveWidth(5),
        paddingTop: responsiveWidth(9)
    }
})