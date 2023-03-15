import React from "react";
import { StyleSheet,View, Text, SafeAreaView } from "react-native"

export default function user_dashboard() {
    return(
        <View style={styles.container}>
            <View style={styles.upper_area}>
                <Text>Upper Area</Text>
            </View>
            <View style={styles.lower_area}>
                <Text>Lower Area</Text>
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
        flex: 2,
    },
    lower_area: {
        backgroundColor: "#FF336E",
        padding: "15%"
    }
})