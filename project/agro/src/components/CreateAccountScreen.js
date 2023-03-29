import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const CreateAccount = () => {

  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleBack = () => {
    navigation.navigate("Home");
  };

  const handleCadastro = () => {
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={handleBack}>
        <Image style={styles.back} source={require('../../assets/icons/icon-back.png')} />
      </TouchableOpacity>

      <Text style={styles.headingCreateAccount}>Crie uma conta</Text>

      <Text style={styles.textInputEmailIndicator}>Digite seu nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.textInputPasswordIndicator}>Digite seu e-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.textInputPasswordIndicator}>Digite seu CPF</Text>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.textInputPasswordIndicator}>Digite sua senha </Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.iconEyeA}
        onPress={togglePasswordVisibility}>
        <MaterialIcons
          name={passwordVisible ? 'visibility-off' : 'visibility'}
          size={24}
          color="grey"
        />
      </TouchableOpacity>
      {/* Melhoria: Isolar essa parte da senha em um único component e ajeitar o "CSS"*/}
      <Text style={styles.textInputPasswordIndicator}>Repita sua senha </Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.iconEyeB}
        onPress={togglePasswordVisibility}>
        <MaterialIcons
          name={passwordVisible ? 'visibility-off' : 'visibility'}
          size={24}
          color="grey"
        />
      </TouchableOpacity>

      <Button
        containerStyle={styles.singUpButton}
        title="Cadastrar"
        onPress={handleCadastro}
      />
    </View>

  )
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