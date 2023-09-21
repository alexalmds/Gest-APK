import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    RefreshControl,
    StatusBar,
    Alert,

} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './style';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';
import Load from '../../components/Load';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function Home() {
    const navigation: any = useNavigation();
    const isFocused = useIsFocused();
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
        listarDados();
    }, []);

    useEffect(() => {
        listarDados();
    }, [isFocused]);

    async function listarDados() {
        try {

        } catch (exception) {
            console.log(exception)
        } finally {
            setIsLoading(false);
            setRefreshing(false);
        }
    }

    const onRefresh = () => {
        setRefreshing(true);
        listarDados();

    };
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.containerHeader}>
                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <MaterialIcons name="menu" size={35} color="black" />
                        </TouchableOpacity>

                        <Image style={styles.logo} source={require('../../assets/logo2.png')} />

                    </View>
                </View>

                {isLoading ?
                    <Load /> :

                    <ScrollView
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >

                        <View style={styles.circleProgressView}>
                            <View style={styles.textProgressContainer}>
                                <Text style={styles.textProgressTitle}>Pedidos</Text>
                                <Text style={styles.textProgress}>2 de 4 pendentes</Text>
                            </View>

                            <AnimatedCircularProgress
                                size={100}
                                width={10}
                                fill={50}
                                tintColor="red"
                                backgroundColor="#e0e0e0"
                                lineCap={"round"}
                            >
                                {
                                    (fill) => (
                                        <Text style={styles.numberInside}>2</Text>
                                    )
                                }
                            </AnimatedCircularProgress>
                        </View>

                        <View style={styles.containerBox}>
                            <TouchableOpacity onPress={() => navigation.navigate("Clientes")}>
                                <View>
                                    <View style={styles.box}>
                                        <MaterialIcons style={styles.iconRegistered} name="people-alt" size={70} color="#17a2b8" />
                                        <View style={styles.textos}>
                                            <Text style={styles.rText}>Clientes</Text>
                                            <Text style={styles.lenghtText}>3</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.textFooter}>Clientes cadastrados</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                }
            </View>
        </View>
    )
}
