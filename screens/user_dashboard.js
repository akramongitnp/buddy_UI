import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Header from "../components/header";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import Icons from 'react-native-vector-icons/Ionicons';

export default function User_dashboard() {
    return (
        <View style={{flex: 1 ,alignItems: "center"}}>
            <Header />
            <View style={styles.mid_area}>
                <Text style={{fontSize: responsiveFontSize(3.5)}}>Hello there, Good morning!</Text>
                <Text style={{fontSize: responsiveFontSize(3.5)}}>Welcome to buddy.</Text>
            </View>
            <ScrollView contentContainerStyle={{alignItems: "center"}} style={styles.card}>
                <TouchableOpacity>
                    <View style={styles.t_card}>
                        <View style={{ justifyContent: "center" }}>
                            <Icons name="person-circle-outline" size={responsiveFontSize(7)} />
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{fontWeight: "bold", fontSize: responsiveFontSize(2)}}>Rohit</Text>
                            <Text>Internet expenses.</Text>
                        </View>
                        <View style={{justifyContent: "center"}}>
                            <Text>Rs.600</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.t_card}>
                        <View style={{ justifyContent: "center" }}>
                            <Icons name="person-circle-outline" size={responsiveFontSize(7)} />
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{fontWeight: "bold", fontSize: responsiveFontSize(2)}}>Rohit</Text>
                            <Text>Internet expenses.</Text>
                        </View>
                        <View style={{justifyContent: "center"}}>
                            <Text>Rs.600</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.t_card}>
                        <View style={{ justifyContent: "center" }}>
                            <Icons name="person-circle-outline" size={responsiveFontSize(7)} />
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{fontWeight: "bold", fontSize: responsiveFontSize(2)}}>Rohit</Text>
                            <Text>Internet expenses.</Text>
                        </View>
                        <View style={{justifyContent: "center"}}>
                            <Text>Rs.600</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.t_card}>
                        <View style={{ justifyContent: "center" }}>
                            <Icons name="person-circle-outline" size={responsiveFontSize(7)} />
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{fontWeight: "bold", fontSize: responsiveFontSize(2)}}>Rohit</Text>
                            <Text>Internet expenses.</Text>
                        </View>
                        <View style={{justifyContent: "center"}}>
                            <Text>Rs.600</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.t_card}>
                        <View style={{ justifyContent: "center" }}>
                            <Icons name="person-circle-outline" size={responsiveFontSize(7)} />
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{fontWeight: "bold", fontSize: responsiveFontSize(2)}}>Rohit</Text>
                            <Text>Internet expenses.</Text>
                        </View>
                        <View style={{justifyContent: "center"}}>
                            <Text>Rs.600</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.t_card}>
                        <View style={{ justifyContent: "center" }}>
                            <Icons name="person-circle-outline" size={responsiveFontSize(7)} />
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{fontWeight: "bold", fontSize: responsiveFontSize(2)}}>Rohit</Text>
                            <Text>Internet expenses.</Text>
                        </View>
                        <View style={{justifyContent: "center"}}>
                            <Text>Rs.600</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.t_card}>
                        <View style={{ justifyContent: "center" }}>
                            <Icons name="person-circle-outline" size={responsiveFontSize(7)} />
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{fontWeight: "bold", fontSize: responsiveFontSize(2)}}>Rohit</Text>
                            <Text>Internet expenses.</Text>
                        </View>
                        <View style={{justifyContent: "center"}}>
                            <Text>Rs.600</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
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