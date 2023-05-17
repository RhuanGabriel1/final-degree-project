import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const LogIn = () => {

    const navigation = useNavigation();

    const handleMenu = () => {
    };

    const handleManualOperations = () => {
        navigation.navigate("ManualOperations");
    };

    const handleCommodities = () => {
        navigation.navigate("Commodities");
    };

    return (
        <View style={styles.container}>

            <View style={styles.viewRowA}>

                <TouchableOpacity onPress={handleMenu}>
                    <Image style={styles.menu} source={require('../../../assets/icons/icon-menu.png')} />
                </TouchableOpacity>

                <Text style={styles.textStart}>Início</Text>

                <TouchableOpacity onPress={null}>
                    <Image style={styles.settings} source={require('../../../assets/icons/icon-settings.png')} />
                </TouchableOpacity>

            </View>

            <View>

                <TouchableOpacity onPress={null}>
                    <Image style={styles.avatar} source={require('../../../assets/icons/icon-avatar.png')} />
                </TouchableOpacity>

                <Text style={styles.textAvatar}>Olá, Fulano!</Text>

                <View style={styles.viewRowA}>

                    <TouchableOpacity onPress={null}>
                        <Image style={styles.filledCircle} source={require('../../../assets/icons/icon-filled-circle.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={null}>
                        <Image style={styles.circle} source={require('../../../assets/icons/icon-not-filled-circle.png')} />
                    </TouchableOpacity>

                </View>

            </View>

            <View style={styles.line}></View>

            <View style={styles.viewRowB}>
                <TouchableOpacity onPress={handleManualOperations}>
                    <Image styles={styles.farmerIcon} source={require('../../../assets/icons/icon-farmer.png')} />
                </TouchableOpacity>


                <TouchableOpacity onPress={handleCommodities}>
                    <Image styles={styles.farmerIcon} source={require('../../../assets/icons/icon-seeds.png')} />
                </TouchableOpacity>


            </View>

            <View style={styles.viewRowC}>
                <Text> Operações Manuais</Text>
                <Text> Insumos</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: 500,
    },

    viewRowA: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },

    viewRowB: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 70,
        marginTop: 25,
    },

    viewRowC: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 45,
        marginRight: 40,
    },

    menu: {
        marginTop: 50,
        marginLeft: 20,
    },

    settings: {
        marginTop: 50,
    },

    avatar: {
        marginTop: 50,
        marginLeft: '42%',
    },

    textStart: {
        fontSize: 16,
        marginTop: 55,
        marginRight: 225
    },

    textAvatar: {
        fontSize: 16,
        marginTop: 5,
        marginLeft: '42%',
    },

    line: {
        height: 1,
        width: '90%',
        backgroundColor: 'black',
        marginTop: 15,
        marginLeft: 20,
    },

    circle: {
        marginRight: 155,
        marginTop: 10,
    },

    filledCircle: {
        marginTop: 10,
        marginLeft: 168,
    },

    farmerIcon: {

    },

    seedIcon: {

    },
});


export default LogIn;
