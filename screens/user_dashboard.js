import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Header from "../components/header";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import Icons from 'react-native-vector-icons/Ionicons';

export default function user_dashboard() {
    return(
        <View style={styles.container}>
            <View style={styles.upper_area}>
                <Icons name="menu-outline" size={responsiveFontSize(2.5)} />
                <Text style={{fontSize: responsiveFontSize(2)}}>buddy</Text>
                <Icons name="person-circle-outline" size={responsiveFontSize(2.5)} />
            </View>
            <View style={styles.mid_area}>
                <Text style={{fontSize: responsiveFontSize(3.5)}}>Hello there, Good morning!</Text>
                <Text style={{fontSize: responsiveFontSize(3.5)}}>Welcome to buddy.</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
    },
    upper_area: {
        backgroundColor: "#CAFF33",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: responsiveHeight(100),
        padding: responsiveWidth(0.5),
    },
    mid_area: {
        backgroundColor: "#CAFF33",
        flexDirection: "column",
        width: responsiveHeight(100),
        padding: responsiveHeight(2)
    },
    card: {
        flex: 1,
        backgroundColor: "#eee",
        height: responsiveHeight(100),
        width: responsiveWidth(95),
        flexDirection: "column",
        // alignItems: "center", // We don't need this as we are using srollView default props.
        borderTopLeftRadius: responsiveHeight(5),
        borderTopRightRadius: responsiveHeight(5),
        paddingTop: responsiveHeight(2)
    },
    t_card: {
        width: responsiveWidth(85),
        height: responsiveHeight(10),
        backgroundColor: "#fff",
        borderRadius: responsiveWidth(2),
        flexDirection: "row",
        justifyContent: "space-between",
        padding: responsiveWidth(3),
        marginTop: responsiveHeight(2)
    }
})