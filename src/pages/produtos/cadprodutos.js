import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
// import { Container } from './styles';
import firebase from '../../config/firebase';

class CadProdutos extends Component {
    constructor(){
        super();
        this.dbRef = firebase.firestore().collection('produtos');
        this.state = {
            nome: '',
            custo: '',
            ValorVenda: '',
            quantidade: '',
            comentarios: '',
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
        if(this.state.nome != '' && this.state.custo != '' && this.state.ValorVenda != '' && this.state.quantidade != ''){
            this.setState({isLoading: true});
        //  this.dbRef.doc().set({
            this.dbRef.doc(this.state.nome.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase()).set({
            //  nome: this.state.nome,
             nome: this.state.nome.toLowerCase().replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
             custo: this.state.custo,
             comentarios: this.state.comentarios,
             quantidade: this.state.quantidade,
             ValorVenda: this.state.ValorVenda,
         }).then((res) => {
             this.setState({
                 nome: '',
                 custo: '',
                 comentarios: '',
                 ValorVenda: '',
                 quantidade: '',
                 isLoading: false,
             });
         });
        }else{
            Alert.alert("Atenção", "Preencha todos os campos requeridos (*)", [{text: "Cancelar", onPress: () => console.log("Cancel Pressed"), style: "cancel"}, {text: "OK", onPress: () => console.log('OK Pressed')}]);
        }
    }



  render(){
    return(
        <ScrollView>
            <View style={{flex:1, paddingTop:20}}>
                <View style={styleCad.Input}>
                    <TextInput
                        value={this.state.nome}
                        onChangeText={(val) => this.inputValueUpdate(val, 'nome')}
                        style={styleCad.txtInput}
                        mode="outlined" 
                        autoCorrect={false}
                        // label="Nome" 
                        // placeholder="Digite aqui" />
                        placeholder="Nome*" 
                        />
                </View>
                <View style={styleCad.Input}>
                    <TextInput
                        value={this.state.custo}
                        onChangeText={(val) => this.inputValueUpdate(val, 'custo')}
                        style={styleCad.txtInput}
                        keyboardType="numeric" 
                        autoCorrect={false} 
                        mode='outlined' 
                        // label="Custo de Produção"
                        // placeholder="Digite aqui" />
                        placeholder="Custo de Produção*" />
                </View>
                <View style={styleCad.Input}>
                    <TextInput 
                        value={this.state.ValorVenda}
                        onChangeText={(val) => this.inputValueUpdate(val, 'ValorVenda')}
                        style={styleCad.txtInput}
                        keyboardType="numeric" 
                        autoCorrect={false} 
                        mode='outlined'
                        // label="Valor de Venda" 
                        // placeholder="Digite aqui" />
                        placeholder="Valor de Venda*" />
                </View>
                <View style={styleCad.Input}>
                    <TextInput 
                        value={this.state.quantidade}
                        onChangeText={(val) => this.inputValueUpdate(val, 'quantidade')}
                        style={styleCad.txtInput}
                        keyboardType="numeric" 
                        autoCorrect={false} 
                        mode='outlined'
                        // label="Valor de Venda" 
                        // placeholder="Digite aqui" />
                        placeholder="Quantidade*" />
                </View>
                <View style={styleCad.Input}>
                    <TextInput
                        value={this.state.comentarios}
                        onChangeText={(val) => this.inputValueUpdate(val, 'comentarios')}
                        style={styleCad.txtInput}
                        multiline={true} 
                        numberOfLines={5} 
                        autoCorrect={false} 
                        mode='outlined' 
                        // label="Comentários" 
                        // placeholder="Digite aqui" />
                        placeholder="Comentários" />
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

export default CadProdutos;