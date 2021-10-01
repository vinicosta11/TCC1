import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ActivityIndicator, Alert, useState } from 'react-native';
// import { Container } from './styles';
import firebase from '../../config/firebase';
// import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

class CadPedidos extends Component {
    constructor(){
        super();
        this.dbRef = firebase.firestore().collection('pedidos');
        this.state = {
            dataPedido: '',
            dataEntrega: '',
            nomeCliente: '',
            telCliente: '',
            endCliente: '',
            formPag: '',
            total: '',
            isLoading: false
        };
    }
    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    Cadastrar() {
        // if(this.state.nome.toLowerCase() == )
        // if(this.state.nome.normalize("NFD"))
        this.setState({isLoading: true});
         this.dbRef.doc().set({
            // this.dbRef.doc(this.state.nome.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase()).set({
            //  nome: this.state.nome,
            //  nome: this.state.nome.toLowerCase().replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
            //  dataPedido: this.state.dataPedido,
            //  dataPedido: moment(this.state.dataPedido).subtract(10, 'days').calendar(),
             
             // MM-DD-YYYY
             dataPedido: new Date(this.state.dataPedido),
             dataEntrega: this.state.dataEntrega,
             nomeCliente: this.state.nomeCliente,
             telCliente: this.state.telCliente,
             endCliente: this.state.endCliente,
             formPag: this.state.formPag,
             total: parseInt(this.state.total)
         }).then((res) => {
             this.setState({
                dataPedido: '',
                dataEntrega: '',
                nomeCliente: '',
                telCliente: '',
                telCliente: '',
                endCliente: '',
                formPag: '',
                total: '',
                isLoading: false,
             });
         });
    }

  render(){
    return(
        <ScrollView>
            <View style={{flex:1, paddingTop:20}}>
                <View style={styleCad.Input}>
                    <TextInput
                        value={this.state.dataPedido}
                        onChangeText={(val) => this.inputValueUpdate(val, 'dataPedido')}
                        style={styleCad.txtInput}
                        mode="outlined" 
                        autoCorrect={false}
                        // label="Nome" 
                        // placeholder="Digite aqui" />
                        placeholder="Data do Pedido"
                        />
                </View>
                <View style={styleCad.Input}>
                    <TextInput
                        value={this.state.dataEntrega}
                        onChangeText={(val) => this.inputValueUpdate(val, 'dataEntrega')}
                        style={styleCad.txtInput}
                        keyboardType="numeric" 
                        autoCorrect={false} 
                        mode='outlined' 
                        // label="Custo de Produção"
                        // placeholder="Digite aqui" />
                        placeholder="Data de Entrega" />
                </View>
                <View style={styleCad.Input}>
                    <TextInput 
                        value={this.state.nomeCliente}
                        onChangeText={(val) => this.inputValueUpdate(val, 'nomeCliente')}
                        style={styleCad.txtInput}
                        keyboardType="numeric" 
                        autoCorrect={false} 
                        mode='outlined'
                        // label="Valor de Venda" 
                        // placeholder="Digite aqui" />
                        placeholder="Nome do Cliente" />
                </View>
                <View style={styleCad.Input}>
                    <TextInput 
                        value={this.state.telCliente}
                        onChangeText={(val) => this.inputValueUpdate(val, 'telCliente')}
                        style={styleCad.txtInput}
                        keyboardType="numeric" 
                        autoCorrect={false} 
                        mode='outlined'
                        // label="Valor de Venda" 
                        // placeholder="Digite aqui" />
                        placeholder="Telefone do Cliente" />
                </View>
                <View style={styleCad.Input}>
                    <TextInput
                        value={this.state.endCliente}
                        onChangeText={(val) => this.inputValueUpdate(val, 'endCliente')}
                        style={styleCad.txtInput} 
                        autoCorrect={false} 
                        mode='outlined' 
                        // label="Comentários" 
                        // placeholder="Digite aqui" />
                        placeholder="Endereço do Cliente" />
                </View>
                <View style={styleCad.Input}>
                    <TextInput
                        value={this.state.formPag}
                        onChangeText={(val) => this.inputValueUpdate(val, 'formPag')}
                        style={styleCad.txtInput}
                        autoCorrect={false}
                        mode='outlined' 
                        // label="Comentários" 
                        // placeholder="Digite aqui" />
                        placeholder="Forma de Pagamento" />
                </View>
                <View style={styleCad.Input}>
                    <TextInput
                        value={this.state.total}
                        onChangeText={(val) => this.inputValueUpdate(val, 'total')}
                        style={styleCad.txtInput} 
                        autoCorrect={false} 
                        mode='outlined' 
                        // label="Comentários" 
                        // placeholder="Digite aqui" />
                        placeholder="Total" />
                </View>
                <View style={{padding:10}}>
                    <Button title="Salvar" 
                        color='#069'
                        onPress={() => this.Cadastrar()} />
                </View>
            </View>
      </ScrollView>
    )
  }
}

const styleCad = StyleSheet.create({
    txtInput:{
        borderColor:'black',
        borderWidth:1,
        paddingHorizontal:5,
    },
    Input:{
        paddingBottom:15,
        paddingHorizontal: 10,
    }
})

export default CadPedidos;