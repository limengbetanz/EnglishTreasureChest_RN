
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import RootView from './app/root/RootView';

export default function App() {
  return (
    <SafeAreaView>
      <RootView/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
