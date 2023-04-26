import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckBox, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import SignIn from '../../Auth/SignInFirebase';
import { InputTextStyle } from '../styles/InputTextStyle';
import { InputTextComponent } from '../InputTextComponent';

const Home = () => {

  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [checked, setChecked] = useState(false);
  const handleCheckBox = () => {
    setChecked(!checked);
  };

  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');

  const handleCadastro = () => {
    navigation.navigate("CreateAccount");
  };

  const handleEsqueciSenha = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleAcessar = () => {
    {/*Criar uma classe util para validar se os valores estão nulos ou vazios*/ }
    console.log("Valores = " + inputEmailValue, inputPasswordValue);
    SignIn.signInEmail(inputEmailValue, inputPasswordValue)
      .then((userCredential) => {
        console.log("Login deu certo: " + userCredential.user.email);
        navigation.navigate("LogIn");
      })
      .catch((error) => {
        console.log("Process env" + process.env.API_KEY);
        console.log("Login deu errado: " + error);

      });
  };

  return (
    <View >
      <Text style={styles.headingAcess}>Acesse</Text>

      <Text style={styles.headingEmailAndPass}>Com o e-mail e senha para entrar</Text>

      <Text style={styles.textInputEmailIndicator}>Digite seu e-mail</Text>

      <InputTextComponent style={InputTextStyle.style} placeholder="E-mail" keyboardType="email-address" value={inputEmailValue} onChange={setInputEmailValue} />

      <Text style={styles.textInputPasswordIndicator}>Digite sua senha </Text>

      <InputTextComponent style={InputTextStyle.style} placeholder="Senha" value={inputPasswordValue} onChange={setInputPasswordValue} />

      <TouchableOpacity
        style={styles.iconEye}
        onPress={togglePasswordVisibility}>
        <MaterialIcons
          name={passwordVisible ? 'visibility-off' : 'visibility'}
          size={24}
          color="grey"
        />
      </TouchableOpacity>

      <View style={styles.viewRowA}>

        <CheckBox
          title="Lembrar minhas senha"
          checked={checked}
          onPress={handleCheckBox}
          containerStyle={styles.checkBoxContainer}
          checkedColor="green"
          uncheckedColor="gray"
          textStyle={styles.checkBoxText}
        />
        <TouchableOpacity onPress={handleEsqueciSenha}>
          <Text style={styles.textForgotPassword}>Esqueci meu acesso</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.viewRowB}>

        <Button
          containerStyle={styles.singUpButton}
          title="Cadastrar"
          onPress={handleCadastro}
        />

        <Button
          containerStyle={styles.logInButton}
          title="Acessar"
          onPress={handleAcessar}
        />

      </View>

      <View style={styles.viewRowB}>

        <View style={styles.line}></View>
        <Text style={styles.textGoogleAndFacebookAcess}>Ou acesse com</Text>
        <View style={styles.line}></View>

      </View>

      <View style={styles.viewRowB}>

        <TouchableOpacity style={styles.touchableOpacityGoogle} onPress={null}>
          <Image style={styles.iconGoogle} source={require('../../../assets/icons/icon-google.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={null}>
          <Image style={styles.iconFacebook} source={require('../../../assets/icons/icon-facebook.png')} />
        </TouchableOpacity>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  headingAcess: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 70,
    marginLeft: 20,
  },
  headingEmailAndPass: {
    fontSize: 16,
    marginLeft: 20,
    paddingTop: 25,
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
    height: 72,
    width: '90%',
    backgroundColor: '#D3D3D3',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginLeft: 20,
  },

  iconEye: {
    position: 'absolute',
    right: 40,
    top: 360,
  },

  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginRight: 75,
  },

  checkBoxText: {
    fontWeight: 'normal',
    fontSize: 12,
    color: 'black',
    marginLeft: 2,
  },

  viewRowA: {
    flexDirection: 'row',

  },

  viewRowB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
  },

  textForgotPassword: {
    fontSize: 12,
    marginTop: 20,
  },

  singUpButton: {
    backgroundColor: '#D3D3D3',
    marginLeft: 10,
    width: '45%',
  },

  logInButton: {
    width: '45%',
    backgroundColor: 'green',
    color: '#fff',
  },

  line: {
    height: 1,
    width: '33%',
    backgroundColor: 'black',
    marginHorizontal: 10,
    marginTop: 30,
  },

  textGoogleAndFacebookAcess: {
    fontSize: 12,
    fontWeight: 'regular',
    marginTop: 20,
  },

  touchableOpacityGoogle: {
    marginHorizontal: 10,
    marginLeft: '35%',
  },

  iconGoogle: {

    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#D3D3D3',

  },

  iconFacebook: {
    marginRight: '35%',
    borderWidth: 5,
    borderRadius: 4,
    backgroundColor: '#D3D3D3',
  },

});


export default Home;
