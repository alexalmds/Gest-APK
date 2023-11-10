import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import AuthRoutes from './tab.routes';
import Clientes from '../screens/Clientes'
import NovoCliente from '../screens/NovoCliente'
import {StatusBar} from 'react-native';


const Stack = createNativeStackNavigator();

function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={AuthRoutes} />
            <Stack.Screen name="Clientes" component={Clientes} />
            <Stack.Screen name="NovoCliente" component={NovoCliente} />
        </Stack.Navigator>
        
    )
}

function AppRoutes(){
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={"#ffa500"} barStyle={"light-content"}/>
            <StackNavigator />
        </NavigationContainer>
    )
}

export default AppRoutes;