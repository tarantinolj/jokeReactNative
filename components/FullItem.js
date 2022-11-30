import React from 'react';
import axios from 'axios';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import animation from '../assets/animation.gif';


export const FullItem = ({route, navigation}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState();
  const { id, title } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
        title,
    })
    axios
      .get(`https://6383b32f6e6c83b7a999cec9.mockapi.io/data/text/content/${id}`)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статью');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
            <Image style={{height: "100%", width: "100%"}} source={animation} autoSize resizeMode="cover"  />
        </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: data.imageUrl }} />
      <PostText>{data.text}</PostText>
    </View>
  );
};

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;