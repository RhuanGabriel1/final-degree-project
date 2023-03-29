import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/components/HomeScreen';
import AppNavigator from './src/components/AppNavigator';


export default function App() {
  return (
    <AppNavigator>
      <View style={styles.container}>
        <StatusBar />
        <Home />
      </View>
    </AppNavigator>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 500,
  },
});
