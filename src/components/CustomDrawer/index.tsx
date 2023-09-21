import React from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

import { styles } from './styles';
import { DrawerActions, useNavigation } from '@react-navigation/core';

const CustomDrawer: React.FC = () => {
    const navigation: any = useNavigation();
    
    async function logout() {
        Alert.alert('Sair', `Deseja finalizar sua sessão?`, [
            {
                text: 'Não',
                style: 'cancel',
            },

            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        await AsyncStorage.clear();
                        navigation.navigate('Login');
                    } catch (error) {
                        Alert.alert('Houve uma falha no sistema! Não foi possível sair.')
                    }
                }
            }
        ])
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Image style={styles.logo} source={require('../../assets/logo2.png')} />

            <View style={{ width: '90%', backgroundColor: '#c1c1c1', height: 0.5, alignSelf: 'center', marginBottom: 5, marginTop: 20 }}></View>

            <ScrollView
                style={styles.container}
            >
                <View>
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Clientes")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                    >
                        <MaterialIcons style={styles.iconRegistered} name="people-alt" size={30} color="gray" />

                        <Text style={styles.PagesText}>Clientes</Text>
                    </TouchableOpacity>

                   
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={() => logout()}
                    style={styles.Sair}
                >
                    <MaterialIcons name="subdirectory-arrow-left" size={25} color="gray" />
                    <Text style={styles.SairText}>Sair da conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CustomDrawer;