import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Modal, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InputTextComponent } from '../InputTextComponent';
import { InputTextStyle } from '../styles/InputTextStyle';
import { Button } from 'react-native-elements';
import { listenToData, stopListeningToData } from '../../Database/Database';
import { v4 as uuidv4 } from 'uuid';


const Database = () => {

    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate("LogIn");
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [data, setData] = useState([]);
    const [collectionName, setCollectionName] = useState('');


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionPress = (value) => {
        setSelectedValue(value);
        setIsDropdownOpen(false);

        switch (value) {
            case 'Operações Manuais':
                setCollectionName('ManualOperations');
                break;
            case 'Insumos':
                setCollectionName('Commodities');
                break;
            case 'Administração':
                setCollectionName('Administration');
                break;
            // case 'CARP':
            // setCollectionName('Carp');
            //     databaseResult(collectionName);
            //     break;
            // case 'Custo Anual':
            // setCollectionName('AnnualCost');
            //     databaseResult(collectionName);
            //     break;
            default:
                console.log('Erro, método não mapeado');
                break;
        }
    };

    useEffect(() => {
        if (collectionName) {
            databaseResult(collectionName); // Chama a função databaseResult() quando collectionName é atualizado
        }
    }, [collectionName]);


    const databaseResult = async (collectionName) => {
        try {
            const retrievedData = await listenToData(collectionName);
            const sortedData = retrievedData.sort((a, b) => a.id - b.id); 
            setData(sortedData);
            console.log('Dados da Coleção ' + collectionName + ': ', retrievedData);
        } catch (error) {
            console.error('Erro ao obter dados do banco de dados:', error);
        }
    }

    // const renderItem = ({ item }) => {
    //     return (
    //         <>
    //             {Object.entries(item).map(([key, value]) => (
    //                 <View key={key}>
    //                     <Text>{key}: {value}</Text>
    //                 </View>
    //             ))}
    //             <View style={styles.itemContainer}></View>
    //         </>
    //     );
    // };

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                {Object.entries(item).map(([key, value]) => (
                    <View key={key} style={styles.item}>
                        <Text>{key}: {value}</Text>
                    </View>
                ))}
            </View>
        );
    };

    const keyExtractor = (item) => {
        if (item && item.id) {
            return item.id.toString();
        }
        return uuidv4();
    };

    return (


        <View style={styles.container}>
            <TouchableOpacity onPress={handleBack}>
                <Image style={styles.back} source={require('../../../assets/icons/icon-back.png')} />
            </TouchableOpacity>

            <Text style={styles.headingAcess}>Dados</Text>


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
                            onPress={() => handleOptionPress('Operações Manuais')}
                        >
                            <Text>Operações Manuais</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.option}
                            onPress={() => handleOptionPress('Insumos')}
                        >
                            <Text>Insumos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.option}
                            onPress={() => handleOptionPress('Administração')}
                        >
                            <Text>Administração</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.option}
                            onPress={() => handleOptionPress('CARP')}
                        >
                            <Text>CARP</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.option}
                            onPress={() => handleOptionPress('Custo Anual')}
                        >
                            <Text>Custo Anual</Text>
                        </TouchableOpacity>

                    </View>
                </TouchableOpacity>
            </Modal>

            <SafeAreaView style={styles.scrollView}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    contentContainerStyle={styles.flatList}
                />
            </SafeAreaView>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: 500,
    },
    scrollView: {
        flex: 1,
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

    flatList: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingVertical: 10,
    },
});

export default Database;