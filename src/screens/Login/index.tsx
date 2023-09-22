import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import * as Animatable from 'react-native-animatable';
import {
    TouchableOpacity,
    View,
    Text,
    TextInput,
    Image,
    StatusBar,
    Alert,
    StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function Login() {
    const navigation : any = useNavigation()
    const [cpf_usuario, setCpfUsuario] = useState('');
    const [senha, setSenha] = useState('');
    async function login() {
       navigation.reset({
        index: 0,
        routes: [{ name: 'Home'}]
       }) 
    }

    return (
        <View style={styles.container} >
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>CPF ou Usuário</Text>
                <TextInput
                    placeholder="Digite o CPF ou Usuário"
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Digite a senha"
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={login}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.buttonPw} >
                    <Text style={styles.pwText}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <Text style={styles.version}>v 1.0.0 BETA build 220923</Text>

                <Image
                    source={require('../../assets/logo-empresa.png')}
                    style={{ width: '100%' }}
                    resizeMode='center' />





            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa900'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 18,
        fontSize: 16
    },
    button: {
        backgroundColor: '#009aff',
        width: '100%',
        borderRadius: 5,
        paddingVertical: 9,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1'
    },
    buttonPw: {
        marginTop: 14,
        alignSelf: 'center'
    },
    pwText: {
        color: "red"
    },
    version: {
        color: "#a1a1a1",
        top: '45%',
        alignSelf: 'center'
    }
})