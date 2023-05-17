import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { InputTextComponent } from '../InputTextComponent';
import { InputTextStyle } from '../styles/InputTextStyle';


const Commodities = () => {
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
                
                <Text style={styles.headingAcess}>Insumos</Text>

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
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 25,
        marginLeft: 20,
    },
});

export default Commodities