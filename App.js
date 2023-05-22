import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';
import User_dashboard from './screens/user_dashboard';
import Try from './components/try'

export default function App() {
  return (
    <View>
        <User_dashboard />
    </View>
  );
}
