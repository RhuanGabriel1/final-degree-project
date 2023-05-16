import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { InputTextStyle } from '../styles/InputTextStyle';
import { InputTextComponent } from '../InputTextComponent';
import { useNavigation } from '@react-navigation/native';
import ForgotPasswordFirebase from '../../Auth/ForgotPasswordFirebase';

const ForgotPassword = () => {

    const navigation = useNavigation();

    const [inputEmailValue, setInputEmailValue] = useState('');

    const handleBack = () => {
        navigation.navigate("Home");
    };

    const handleRecupera = () => {
        console.log("Valores = " + inputEmailValue);
        ForgotPasswordFirebase.resetPassword(inputEmailValue)
            .then((userCredential) => {
                console.log("E-mail de redefinição de senha enviado com sucesso! " + userCredential.user.email);
                // navigation.navigate("Home");
            }).catch((error) => {
                console.log("A ação falhou: " + error);
            });
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={-300}>
            <ScrollView>

                <View style={styles.container}>

                    <TouchableOpacity onPress={handleBack}>
                        <Image style={styles.back} source={require('../../../assets/icons/icon-back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.headingAcess}>Recupere sua senha</Text>
                    <Text style={styles.textInputEmailIndicator}>Digite seu e-mail</Text>
                    <InputTextComponent style={InputTextStyle.style} placeholder="E-mail" keyboardType="email-address" value={inputEmailValue} onChange={setInputEmailValue} />
                    <Button
                        containerStyle={styles.recoverPasswordButton}
                        title="Envie"
                        onPress={handleRecupera}
                    />

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

    headingAcess: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 25,
        marginLeft: 20,
    },

    textInputEmailIndicator: {
        fontSize: 12,
        marginLeft: 20,
        marginTop: 100,
        paddingBottom: 8,
    },

    recoverPasswordButton: {
        marginLeft: 20,
        width: '90%',
        backgroundColor: '#D3D3D3',
    },
});

export default ForgotPassword;