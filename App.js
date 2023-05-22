import { View } from 'react-native';
import User_dashboard from './screens/user_dashboard';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Try from './components/try'
import Auth_Screen from "./screens/auth_screen"
import { NativeBaseProvider } from "native-base"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Auth'>
          <Stack.Screen name='Auth' component={Auth_Screen}/>
          <Stack.Screen name='User_dashboard' component={User_dashboard}/>
          <Stack.Screen name='Try' component={Try}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
