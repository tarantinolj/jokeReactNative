import React, {useEffect, useState} from 'react';
import { Text, View, StatusBar,FlatList, RefreshControl, Alert,ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import { Item } from './Item';
import animation from '../assets/animation.gif';

const ApiKey = 'ec9292ac311c25d19d8d010a2a6c7830';
const Hash = 'c27817daf053228f91602f84286a11ea';
const ts = '1';
const linkMarvel = `https://gateway.marvel.com/v1/public/comics?limit=10&ts=${ts}&apikey=${ApiKey}&hash=${Hash}`;

export const ListItems = ({navigation}) => {
    const [items, setItems] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchItems = () =>{
        setIsLoading(true);
        axios
            .get('https://6383b32f6e6c83b7a999cec9.mockapi.io/data/text/content')
            .then(({data}) => {
                setItems(data)
            })
            .catch(()=>{
                Alert.alert('Ну удалось получить данные');
            })
            .finally(()=> setIsLoading(false))
            
    }

    React.useEffect(fetchItems,[])

    if (isLoading){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <Image style={{height: "100%", width: "100%"}} source={animation} autoSize resizeMode="cover"  />
            </View>
        )
    } else{ 
        return(
            <Body>
                <FlatList
                 refreshControl={<RefreshControl onRefresh={fetchItems}/>}
                 data={items}
                 renderItem={({item})=>(
                   <TouchableOpacity 
                   onPress={() => navigation.navigate('FullPost', { id: item.id, title: item.title })} >
                     <Item text={item.text} id={item.id} title={item.title} imageUrl={item.imageUrl} />
                   </TouchableOpacity>
                 )}
                />
            </Body>
        )
     }


    

}




const Body = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: darkgrey;
`;