import firebase from 'firebase/app';
import 'firebase/auth';
// import * as Google from 'expo-google-app-auth';

const signInWithEmail = async (email, password) => {
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log("Login deu certo!");
    return response.user;
  } catch (error) {
    console.log("Login deu errado!" + error);
    return null;
  }
};


export default signInWithEmail;

