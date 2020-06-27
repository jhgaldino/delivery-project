import React from 'react';
import {Text} from 'react-native';
import {Content,StatusChecked,StatusUnchecked,StatusName} from './styles';
import Icon form '@expo/vector-icons/MaterialIcons';
const OrderStatus = ({title,isChecked}) => {
return{
    <Content>
    isChecked ?
       { (<StatusChecked>
        <Icon name="done" size={30} color="#fff"/>
        </StatusChecked>
        )
        (StatusUnchecked />)
       }
        <StatusName>{title}</StatusName>
       
    </Content>
}
}
export default OrderStatus;