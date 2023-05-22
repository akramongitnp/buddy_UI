import React, {useState} from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Modal, FlatList, TextInput } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import Icons from 'react-native-vector-icons/Ionicons';
import Transations from "../data/transactions"
import Try from "../components/try";
import { Input, Button } from "native-base";

export default function User_dashboard({navigation}) {

    const [modalVisible, setModalVisible] = useState(false)
    const [modalTvisible, setModalTvisible] = useState(false)
    return (
        <View style={{flex: 1 ,alignItems: "center"}}>
            <SafeAreaView style={styles.header}>
                <TouchableOpacity><Icons name="menu-outline" size={responsiveFontSize(5)} /></TouchableOpacity>
                <Text style={{fontSize: responsiveFontSize(4)}}>buddy</Text>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}><Icons name="add-outline" size={responsiveFontSize(5)}/></TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate('Auth')}}><Icons name="person-circle-outline" size={responsiveFontSize(5)} /></TouchableOpacity>
                </View>
            </SafeAreaView>
            <View style={styles.mid_area}>
                <Text style={{fontSize: responsiveFontSize(3.5)}}>Hello there, Good morning!</Text>
                <Text style={{fontSize: responsiveFontSize(3.5)}}>Welcome to buddy.</Text>
            </View>
            <View style={styles.card}>
                <FlatList 
                    data={Transations}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => 
                        <TouchableOpacity onPress={() => {setModalTvisible(true)}}>
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
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {setModalVisible(!modalVisible)}}
            >
                <View style={styles.modalMid}>
                    <View style={styles.modalView}>
                        <Input style={{}} placeholder="Enter Amount" keyboardType="numeric"/>
                        <Input style={{}} placeholder="Enter Description"/>
                        <Icons name="newspaper" size={responsiveWidth(20)} style={{paddingLeft: responsiveWidth(45)}}/>
                        <Button style={{width: responsiveWidth(50)}} onPress={() => setModalVisible(!modalVisible)}>Add</Button>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalTvisible}
                onRequestClose={() => {setModalTvisible(!modalTvisible)}}
            >
                <View style={styles.modalMid}>
                    <View style={styles.modalView}>
                        <View style={{alignItems: "center", justifyContent: "center"}}>
                            <Icons name="person-circle-outline" size={responsiveWidth(30)} style={{}}/>
                            <Text style={{fontSize: responsiveFontSize(2), fontWeight: "bold"}}>Ronit</Text>
                        </View>
                        <View style={{height: responsiveHeight(15), width: responsiveWidth(70), backgroundColor: "#EEEEE5", margin: responsiveWidth(10), borderRadius: responsiveHeight(1), padding: responsiveHeight(1)}}>
                            <Text style={{fontWeight: "100"}}>20/08/2023 on 09.05 AM</Text>
                            <Text style={{paddingTop: responsiveHeight(2), fontWeight: "bold"}}>" This is due to Internet charges for this month. "</Text>
                        </View>
                        <Button style={{width: responsiveWidth(50)}} onPress={() => setModalTvisible(!modalTvisible)}>Understood!</Button>
                    </View>
                </View>
            </Modal>
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
        paddingBottom: responsiveHeight(27)

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
    },
    modalView: {
        height: responsiveHeight(50),
        width: responsiveWidth(80),
        backgroundColor: "#FFF",
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: {
            width: responsiveWidth(0),
            height: responsiveHeight(2),
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: responsiveWidth(5),
        padding: responsiveWidth(8),
        justifyContent: "space-evenly"
    },
    modalMid: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    text: {
        padding: responsiveWidth(2)
    }
})