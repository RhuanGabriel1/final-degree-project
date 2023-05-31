import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InputTextComponent } from '../InputTextComponent';
import { InputTextStyle } from '../styles/InputTextStyle';
import { Button } from 'react-native-elements';


const Carp = () => {

    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate("LogIn");
    };


    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={-300}>
            <ScrollView>

                <View style={styles.container}>
                    <TouchableOpacity onPress={handleBack}>
                        <Image style={styles.back} source={require('../../../assets/icons/icon-back.png')} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.headingAcess}>Estrutura e Custo Anual de Recuperação Do Patrimônio</Text>


            </ScrollView>
        </KeyboardAvoidingView >
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
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 25,
        marginLeft: 20,
    },

    textInputDescriptionIndicator: {
        fontSize: 16,
        marginLeft: 20,
        paddingBottom: 8,
    },

    dropdownButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,

    },

    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    dropdown: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
    },

    option: {
        padding: 10,
    },

    buttonSendValue: {
        marginLeft: 20,
        width: '90%',
        backgroundColor: '#D3D3D3',
    },
});

export default Carp;