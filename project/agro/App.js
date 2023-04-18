import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/components/HomeScreen';
import AppNavigator from './src/components/AppNavigator';

import { firebaseConfig } from './src/Auth/FirebaseConfig';
import * as firebase from 'firebase/app';
import { useEffect } from 'react';

export default function App() {
    useEffect(()=> {
      firebase.initializeApp(firebaseConfig);
    }, []);

  return (
    <AppNavigator>
      <View style={styles.container}>
        <StatusBar style={styles.statusbar} />
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

  statusbar:{
    backgroundColor:'#62E25F',
  },
});
