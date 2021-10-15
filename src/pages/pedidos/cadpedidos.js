import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert, useState } from 'react-native';
// import { Container } from './styles';
import firebase from '../../config/firebase';
import { TextInputMask } from 'react-native-masked-text';

class CadPedidos extends Component {
    constructor(){
        super();
        this.dbRef = firebase.firestore().collection('pedidos');
        this.dbRefItem = firebase.firestore().collection('itens');
        this.state = {
            dataPedido: '',
            dataEntrega: '',
            nomeCliente: '',
            telCliente: '',
            endCliente: '',
            formPag: '',
            total: '',
            produto: '',
            qtd: '',
            FKitens: '',
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
             dataPedido: this.state.dataPedido,
            //  dataPedido: this.state.dataPedido,
             dataEntrega: this.state.dataEntrega,
             nomeCliente: this.state.nomeCliente,
             telCliente: this.state.telCliente,
             endCliente: this.state.endCliente,
             formPag: this.state.formPag,
             total: parseInt(this.state.total),
             itens: ['produto: ' + this.state.produto + '\n' + 'qtd:' + this.state.qtd]
            //  produto: this.state.produto
         }).then((res) => {
            // alert(this.state.dataPedido); 
            this.setState({
                dataPedido: '',
                dataEntrega: '',
                nomeCliente: '',
                telCliente: '',
                telCliente: '',
                endCliente: '',
                formPag: '',
                total: '',
                produto: '',
                qtd:'',
                isLoading: false,
             });
         });
        //  
        // 
        // 
        // 
        // 
        // 
        // this.dbRefItem.doc().set({
        //      produto: this.state.produto,
        //      qtd: parseInt(this.state.qtd)
        //  }).then((res) => {
        //     // alert(this.state.dataPedido); 
        //     this.setState({
        //         produto: '',
        //         qtd: '',
        //         isLoading: false,
        //      });
        //  });
    }
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 

  render(){
    // const [inputs, setInputs] = useState([{key: '', value: ''}]);

    // const addHandler = ()=>{
    //   const _inputs = [...inputs];
    //   _inputs.push({key: '', value: ''});
    //   setInputs(_inputs);
    // }
    
    // const deleteHandler = (key)=>{
    //   const _inputs = inputs.filter((input,index) => index != key);
    //   setInputs(_inputs);
    // }
  
    // const inputHandler = (text, key)=>{
    //   const _inputs = [...inputs];
    //   _inputs[key].value = text;
    //   _inputs[key].key   = key;
    //   setInputs(_inputs);
      
    // }

    return(
        <ScrollView>
            <View style={{flex:1, paddingTop:20}}>
                <View style={styleCad.Input}>
                    <TextInputMask
                        refInput={(ref) => this.myDateText = ref}
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YY'
                        }}
                        value={this.state.dataPedido}
                        onChangeText={(val) => this.inputValueUpdate(val, 'dataPedido')}
                        style={styleCad.txtInput}
                        mode="outlined" 
                        autoCorrect={false}
                        // label="Nome" 
                        // placeholder="Digite aqui" />
                        placeholder="Data do Pedido"
                        keyboardType="numeric"
                        returnKeyType="next"
                        />
                </View>
                <View style={styleCad.Input}>
                    <TextInputMask
                        refInput={(ref) => this.myDateText = ref}
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YY'
                        }}
                        value={this.state.dataEntrega}
                        onChangeText={(val) => this.inputValueUpdate(val, 'dataEntrega')}
                        style={styleCad.txtInput}
                        keyboardType="numeric" 
                        autoCorrect={false} 
                        mode='outlined' 
                        // label="Custo de Produção"
                        // placeholder="Digite aqui" />
                        placeholder="Data de Entrega" 
                        keyboardType="numeric"
                        />
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
                        placeholder="Nome do Cliente" 
                        maxLength={50}/>
                </View>
                <View style={styleCad.Input}>
                    <TextInputMask 
                        refInput={(ref) => this.myTelText = ref}
                        type={'cel-phone'}
                        options={{
                            maskType:'BRL',
                            withDDD: true,
                            dddMask:'(99)'
                        }}
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
                {/*  */}
                {/* <View style={styleCad.InputItem}>
                    {inputs.map((input,key) => (
                        <View>
                            <View style={{flex:1}}>
                            <TextInput
                                // value={this.state.produto}
                                // onChangeText={(val) => this.inputValueUpdate(val, 'produto')}
                                value={input.value}
                                onChangeText={(text) => inputHandler(text, key)}
                                style={styleCad.txtInput} 
                                autoCorrect={false} 
                                mode='outlined' 
                                // label="Comentários" 
                                // placeholder="Digite aqui" />
                                placeholder="Produto" />
                        </View>
                        <View style={{flex:1,}}>
                            <TextInput
                                value={this.state.qtd}
                                onChangeText={(val) => this.inputValueUpdate(val, 'qtd')}
                                style={styleCad.txtInput} 
                                autoCorrect={false} 
                                mode='outlined' 
                                // label="Comentários" 
                                // placeholder="Digite aqui" />
                                placeholder="Quantidade" />
                        </View>
                    </View>
                    ))}
                    <View style={{width:45, height:10, paddingLeft:10,}}>
                        <Button title="+" 
                            color='#069'
                            onPress={addHandler}
                             />
                    </View>
                </View> */}
                {/*  */}
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
    },
    InputItem:{
        paddingBottom:15,
        paddingHorizontal: 10,
        flexDirection:'row',
    },
    InputItemNome:{
        // paddingRight: 100
    },
    InputItemQtd:{
        
    }
})

export default CadPedidos;