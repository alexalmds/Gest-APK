import { useNavigation } from "@react-navigation/core";
import axios, { AxiosResponse } from "axios";
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
import { Splash } from "../../lotties/Splash";
import api from "../../services/api";

type ApiResponse = {
    auth: string;
    success: boolean;
    message?: string;
    info?: any;
}

export default function Login() {

    // 0 - Carregando, 1 - Logado, 2 - Deslogado
    const [logged, setLogged] = useState(0)
    const navigation: any = useNavigation()
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    async function resetPw() {
        Alert.alert('Indisponível', 'No momento está função está em desenvolvimento. Tente novamente na próxima atualização.')
    }

    async function register() {
        Alert.alert('Não Autorizado', 'Você não tem autorização para abrir a página de registro. Motivo: Desenvolvimento BETA fechado para cadastros.')
    }
    async function login() {
        const obj = { usuario, senha };

        if (!usuario || usuario === '') {
            return Alert.alert('Info', 'Preencha o campo com seu Usuário ou CPF');
        }

        if (!senha || senha === '') {
            return Alert.alert('Info', 'Preencha o campo da senha.');
        }

        try {
            const res: AxiosResponse<ApiResponse> = await api.post('usuarios/login/authV1', obj);

            if (res.status === 200) {
                console.log(res.data.auth)
                console.log(res.data.message)
                if (res.data.auth === 'Unauthorized') {
                    // Tratar erro de status 200 (OK) com sucesso, mas success: false
                    Alert.alert('Info', res.data.message);
                } else {
                    setLogged(1);
                    console.log('Logado no sistema');
                    await AsyncStorage.setItem('@user', JSON.stringify(res.data.info[0].id_usuario))
                    console.log(res.data.info[0].id_usuario)
                    console.log(res.data.info[0].nome)
                    console.log(res.data.info[0].empresa)
                    console.log(res.data.info[0].acesso)
                    console.log(res.data.info[0].senha)
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    });
                }
            }
        } catch (ex) {
            console.log(ex);
            Alert.alert('Erro', 'Houve um erro do aplicativo ao receber resposta da API.');
        }
    }

    //Verifica se há sessão ativa
    const checkLogin = async  () => {
        const user = await AsyncStorage.getItem('@user')
        if (user){
            setLogged(1);
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });  
        } else {
            setLogged(2)
        }
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
                    value={usuario}
                    onChangeText={(text) => setUsuario(text)}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Digite a senha"
                    style={styles.input}
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                />

                <TouchableOpacity style={styles.button} onPress={login}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={register}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.buttonPw} onPress={resetPw} >
                    <Text style={styles.pwText}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <Text style={styles.version}>v 1.0.1 BETA build 13112023</Text>

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