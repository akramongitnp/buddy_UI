// import React from "react";
// import { View, Text, SafeAreaView } from "react-native";

// export default function User_dashboard() {
//     return (
//         <SafeAreaView style={{backgroundColor: "blue", alignItems: "center"}}>
//             <Text>This is working now!</Text>
//         </SafeAreaView>
//     )
// }












import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
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
                <Text style={{fontSize: responsiveFontSize(2.5)}}>Hello there, Good morning!</Text>
                <Text style={{fontSize: responsiveFontSize(2.5)}}>Welcome to buddy.</Text>
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
    lower_area: {
        backgroundColor: "red",
        height: responsiveHeight(100),
        width: responsiveHeight(100),
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopLeftRadius: responsiveHeight(10),
        borderTopRightRadius: responsiveHeight(10),
    },
    t_box: {
        backgroundColor: "blue",
        height: responsiveHeight(15),
        width: responsiveWidth(30),
        borderRadius: responsiveWidth(2),
        padding: responsiveHeight(4),
    }
})