import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';
import User_dashboard from './screens/user_dashboard';

export default function App() {
  return (
    <SafeAreaView>
      <User_dashboard />
    </SafeAreaView>
  );
}
