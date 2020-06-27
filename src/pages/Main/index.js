import React, { useState,useEffect } from 'react';
import {Button} from 'react-native';
import {Container} from './styles';
import OrderStatus from '../../components/OrderStatus';
import socketio from 'socket.io-client';
import Constants from 'expo-constants';

const Main = () =>{
    const {OrderStatus, setOrderStatus} = useState(0);
    
    const {mainfest} = Constants;
    const uri = 'http://$(manifest.debuggerHost.split(':').shift()):3000';

    useEffect(
        ()=> socketio(uri)
        ,[]

    );

    const socket = useEffect(
        ()=>{
            socket.on('status',(status))=>{
                console.log('novo status',status);
                setOrderStatus(status);
            })
        }
        , [socket]

    );



    function buy(){
        console.log('pedido realizado');
        socket.emit('new-order');



    }
    return{
        <Container>
        <Button title ='Fazer Pedido' disabled={OrderStatus !=0} onPress=() =>buy/>
        <OrderStatus title="Pedido Recebido" isChecked={OrderStatus >=1}/>
        <OrderStatus title="Pedido sendo preparada" isChecked={OrderStatus >=2}/>
        <OrderStatus title="Pedido a caminho" isChecked={OrderStatus >=3}/>
        <OrderStatus title="Pedido Entregue" isChecked={OrderStatus >=4}/>
        </Container>
    };
}

export default main;