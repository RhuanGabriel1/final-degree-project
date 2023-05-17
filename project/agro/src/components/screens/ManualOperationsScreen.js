import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InputTextComponent } from '../InputTextComponent';
import { InputTextStyle } from '../styles/InputTextStyle';
import { Button } from 'react-native-elements';


const ManualOperations = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate("LogIn");
    };

    const [inputDescriptionValue, setInputDescriptionValue] = useState('');

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [amount, setAmount] = useState('');


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionPress = (value) => {
        setSelectedValue(value);
        setIsDropdownOpen(false);
    };

    const handleNumber1Change = (val) => {
        setVal1(val);
        manualOperationCalculator(val, val2);
    };

    const handleNumber2Change = (val) => {
        setVal2(val);
        manualOperationCalculator(val1, val);
    };

    const manualOperationCalculator = (val1, val2) => {
        const parsedNum1 = parseFloat(val1);
        const parsedNum2 = parseFloat(val2);

        if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
            const calculatedResult = parsedNum1 * parsedNum2;
            setAmount(calculatedResult.toString());
        } else {
            setAmount('');
        }
    }

    const sendValueToDB = () => {

    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={-300}>
            <ScrollView>

                <View style={styles.container}>
                    <TouchableOpacity onPress={handleBack}>
                        <Image style={styles.back} source={require('../../../assets/icons/icon-back.png')} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.headingAcess}>Operações Manuais</Text>

                <Text style={styles.textInputDescriptionIndicator}>Digite a operação:</Text>

                <InputTextComponent style={InputTextStyle.style} placeholder="Descrição" keyboardType="default" value={inputDescriptionValue} onChange={setInputDescriptionValue} />

                <Text style={styles.textInputDescriptionIndicator}>Selecione a unidade:</Text>

                <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
                    <Text>{selectedValue || 'Selecione uma opção'}</Text>
                </TouchableOpacity>
                <Modal visible={isDropdownOpen} transparent>
                    <TouchableOpacity
                        style={styles.overlay}
                        activeOpacity={1}
                        onPress={toggleDropdown}
                    >
                        <View style={styles.dropdown}>
                            <TouchableOpacity
                                style={styles.option}
                                onPress={() => handleOptionPress('HH (HOMEM/HORA)')}
                            >
                                <Text>HH (HOMEM/HORA)</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                </Modal>

                <Text style={styles.textInputDescriptionIndicator}>Digite o valor unitário:</Text>

                <InputTextComponent style={InputTextStyle.style} placeholder="Valor unitário" keyboardType="numeric" value={val1} onChange={handleNumber1Change} />

                <Text style={styles.textInputDescriptionIndicator}>Digite a quantidade:</Text>

                <InputTextComponent style={InputTextStyle.style} placeholder="Quantidade" keyboardType="numeric" value={val2} onChange={handleNumber2Change} />

                <Text style={styles.headingAcess}>Valor Total: {amount}</Text>

                <Button
                    containerStyle={styles.buttonSendValue}
                    title="Salvar"
                    onPress={sendValueToDB}
                />

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

export default ManualOperations;