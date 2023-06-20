import React, { useState } from "react";
import {Text, View, ScrollView, FlatList, Button} from "react-native"
import try_data from "../data/try_data";

function Try(){
    const [app, setApp] = useState([])
    const getData = async() => {
        const resp = await fetch("https://224a-115-187-43-100.ngrok-free.app/transactions");
        const data = await resp.json();
        setApp(data);
    }
    return(
        <View>
            <Button title="Click Me!" onPress={getData}/>
            <FlatList 
                data={app}
                renderItem={({item}) => 
                    <Text>{item.amout}</Text>
                }
            />
        </View>
        
    )
}

export default Try;