import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Dimensions, TextInput } from "react-native"
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { Input, Button } from "native-base"

export default function Auth({navigation}) {
    return(
        <ScrollView style={{flex: 1, backgroundColor: '#fff'}} showsVerticalScrollIndicator={false}>
            <ImageBackground source={require('../assets/im.jpg')} style={styles.imgB}>
            
            </ImageBackground>
            <View style={styles.bottomView}>
                <View style={{padding: 40}}>
                    <Text style={{fontSize: 36, fontWeight: "bold", color: "#4632A1"}}>Welcome</Text>
                    <Text>
                        Don't have an account?<Text style={{color: 'red', fontStyle: "italic"}}> Register Now!</Text>
                    </Text>
                </View>
                <View style={{marginTop: 20}}>
                    <View style={{padding: 40, paddingTop: 10}}>
                        <Input placeholder="Email"/>
                    </View>
                    <View style={{padding: 40, paddingTop: -10}}>
                        <Input placeholder="Password" type="password"/>
                    </View>
                    <View style={{padding: 40}}>
                        <Button style={styles.btn} onPress={() => {navigation.navigate('User_dashboard')}}>Login</Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imgB: {
        height: Dimensions.get('window').height/3,
    },
    bottomView: {
        flex: 1.5,
        bottom : 50,
        backgroundColor: "#fff",
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
    },
    btn: {
        height: Dimensions.get('window').height/15
    }
})