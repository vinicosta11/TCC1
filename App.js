import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import CadProdutos from './src/pages/produtos/cadprodutos';
import CadPedidos from './src/pages/pedidos/cadpedidos';

function PedidosScreen({ navigation }) {
  return (
    <View style={{flex: 1}}>
      {/* <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      /> */}
      <CadPedidos />
    </View>
  );
}

function CadProdutosScreen({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <CadProdutos />
    </View>
  );
}

function CadPedidosScreen({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <CadPedidos />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Pedidos" component={PedidosScreen} />
        <Drawer.Screen name="Cadastro de Produtos" component={CadProdutosScreen} />
        <Drawer.Screen name="Cadastro de Pedido" component={CadPedidosScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
  },
});