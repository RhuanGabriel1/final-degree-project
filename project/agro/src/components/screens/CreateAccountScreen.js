import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import SignUp from '../../Auth/SignUpFirebase';
import { InputTextComponent } from '../InputTextComponent';
import { InputTextStyle } from '../styles/InputTextStyle';
import Comparator from '../../utils/Comparator'

const CreateAccount = () => {

  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [inputNamedValue, setInputNamedValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [inputRepeatPasswordValue, setInputRepeatPasswordValue] = useState('');

  const handleBack = () => {
    navigation.navigate("Home");
  };

  const handleCadastro = () => {
    if (Comparator.areEquals(inputPasswordValue, inputRepeatPasswordValue)) {
      SignUp.signUp(inputEmailValue, inputPasswordValue)
        .then((userCredential) => {
          console.log("Cadastro deu certo: " + userCredential.user.email);
          navigation.navigate("Home");
        })
        .catch((error) => {
          console.log("Cadastro deu errado: " + error);
        });
    }
    else {
      console.log("Senhas diferentes");
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={-300}>
      <ScrollView>

        <View style={styles.container}>

          <TouchableOpacity onPress={handleBack}>
            <Image style={styles.back} source={require('../../../assets/icons/icon-back.png')} />
          </TouchableOpacity>

          <Text style={styles.headingCreateAccount}>Crie uma conta</Text>

          <Text style={styles.textInputEmailIndicator}>Digite seu nome</Text>

          <InputTextComponent style={InputTextStyle.style} placeholder="Nome" value={inputNamedValue} onChange={setInputNamedValue} />

          <Text style={styles.textInputPasswordIndicator}>Digite seu e-mail</Text>

          <InputTextComponent style={InputTextStyle.style} placeholder="E-mail" keyboardType="email-address" value={inputEmailValue} onChange={setInputEmailValue} />

          <Text style={styles.textInputPasswordIndicator}>Digite sua senha </Text>

          <InputTextComponent style={InputTextStyle.style} placeholder="Senha" value={inputPasswordValue} onChange={setInputPasswordValue} />

          <Text style={styles.textInputPasswordIndicator}>Repita sua senha </Text>

          <InputTextComponent style={InputTextStyle.style} placeholder="Repita sua Senha" value={inputRepeatPasswordValue} onChange={setInputRepeatPasswordValue} />

          <Button containerStyle={styles.singUpButton} title="Cadastrar" onPress={handleCadastro} />

        </View>

      </ScrollView>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 500,
  },

  back: {
    marginTop: 70,
    marginLeft: 12,
  },

  headingCreateAccount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 20,
  },

  textInputEmailIndicator: {
    fontSize: 12,
    marginLeft: 20,
    marginTop: 45,
    paddingBottom: 8,
  },

  textInputPasswordIndicator: {
    fontSize: 12,
    marginLeft: 20,
    paddingBottom: 8,
  },

  input: {
    height: 48,
    width: '90%',
    backgroundColor: '#D3D3D3',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginLeft: 20,
  },

  iconEyeA: {
    position: 'absolute',
    right: 40,
    top: 516,
  },

  iconEyeB: {
    position: 'absolute',
    right: 40,
    top: 608,
  },

  singUpButton: {
    backgroundColor: '#D3D3D3',
    marginLeft: 20,
    width: '90%',
  },

});


export default CreateAccount;