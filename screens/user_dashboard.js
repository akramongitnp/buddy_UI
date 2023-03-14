import React from "react";
import { StyleSheet,View, Text, SafeAreaView } from "react-native"

export default function user_dashboard() {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.upper_area}>
                    <Text>Upper area</Text>
                </View>
                <View style={styles.lower_area}>
                    <Text>Lower area</Text>
                </View>
            </View>
        </SafeAreaView>
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
        flex: 4,
    }
})