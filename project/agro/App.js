import {StatusBarIphone} from './components/statusBarIphone'
import { StyleSheet, Text, TextInput, Button,  View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Acesse</Text>
      <StatusBarIphone/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
