import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import Icons from 'react-native-vector-icons/Ionicons';
import Transations from "../data/transactions"
import Try from "../components/try";

export default function User_dashboard({navigation}) {

    return (
        <View style={{flex: 1 ,alignItems: "center"}}>
            <SafeAreaView style={styles.header}>
                <TouchableOpacity><Icons name="menu-outline" size={responsiveFontSize(5)} /></TouchableOpacity>
                <Text style={{fontSize: responsiveFontSize(4)}}>buddy</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('Auth')}}><Icons name="person-circle-outline" size={responsiveFontSize(5)} /></TouchableOpacity>
            </SafeAreaView>
            <View style={styles.mid_area}>
                <Text style={{fontSize: responsiveFontSize(3.5)}}>Hello there, Good morning!</Text>
                <Text style={{fontSize: responsiveFontSize(3.5)}}>Welcome to buddy.</Text>
            </View>
            <View style={styles.card}>
                <FlatList 
                    data={Transations}
                    renderItem={({item}) => 
                        <TouchableOpacity>
                            <View style={styles.t_card}>
                                <View style={{ justifyContent: "center" }}>
                                    <Icons name="person-circle-outline" size={responsiveFontSize(7)} />
                                </View>
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={{fontWeight: "bold", fontSize: responsiveFontSize(2)}}>{item.name}</Text>
                                    <Text>{item.comment}</Text>
                                </View>
                                <View style={{justifyContent: "center"}}>
                                    <Text>₹{item.amout}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>      
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mid_area: {
        width: responsiveWidth(100),
        height: responsiveHeight(15),
        padding: responsiveWidth(6)
    },
    card: {
        backgroundColor: "#eee",
        height: responsiveHeight(100),
        width: responsiveWidth(95),
        flexDirection: "column",
        alignItems: "center",  //We don't need this as we are using srollView default props.
        borderTopLeftRadius: responsiveHeight(5),
        borderTopRightRadius: responsiveHeight(5),
        paddingTop: responsiveHeight(2),

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
    },
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