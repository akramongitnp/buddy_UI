import React from "react";
import { StyleSheet,View, Text, SafeAreaView } from "react-native"

export default function user_dashboard() {
    return(
        <View style={styles.container}>
            <View style={styles.upper_area}>
                <Text>Upper Area</Text>
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
        
    },
    lower_area: {
        backgroundColor: "#FF336E",
        height: "30%"
    }
})