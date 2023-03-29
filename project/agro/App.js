import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import HomeScreen from './src/components/HomeScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
