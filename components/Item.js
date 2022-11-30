import { Text, View, StatusBar,Image } from 'react-native';
import styled from 'styled-components/native';

export const Item = ({id, text, title, imageUrl}) =>{
    return(
        <ItemContainer >
            <ImagePost source ={{uri: imageUrl}}/>
            <View style={{flex:1}}>
                <Text style={{padding: 5}}>{title}</Text>
                <Text>{text}</Text>
            </View>
            
        </ItemContainer>
    )
}
const ImagePost = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin-right: 5px;
`;
const ItemContainer = styled.View`
    flex-direction: row;
    padding: 10px;
    border-bottom-width: 3px;
    border-bottom-color: rgba(0, 0, 0, 0.8);
    border-bottom-style: solid;
`;