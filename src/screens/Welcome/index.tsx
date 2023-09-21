import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
export default function Welcome() {
    const navigation : any = useNavigation();
    return (

        <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Animatable.Image
            animation="flipInY"
            source={require('../../assets/LOGO.png')}
            style={{width : '100%'}}
            resizeMode='center' />
        </View>
        <Animatable.View animation="fadeInUp" delay={600} style={styles.containerForm}>
            <Text style={styles.title}>
                Faça a gestão completa da sua empresa de onde estiver com Gest.
            </Text>
            <Text style={styles.text}>Faça login para começar</Text>

            <TouchableOpacity style={styles.button}
            onPress={ () => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </Animatable.View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#ffa400',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
        
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 28,
        color: '#fbfbfb'
    },
    text: {
        color: '#fbfbfb',
        fontSize: 18,
        alignSelf: 'center',
        top: 45
    },
    button: {
        position: 'absolute',
        backgroundColor: "#007aff",
        borderRadius: 50,
        alignItems : 'center',
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: "15%",
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
}) 