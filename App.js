import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text, View, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Navigation } from './Navigation/Navigation';


export default function App() {
  return ( 
    <>
    
       <Header>
          <View style={{padding:10}}>
              <Text>fuNNypeople AlwayS SmilE</Text>
          </View>
          <View style={{}}>
                <AntDesign  name='aliwangwang' style={{ fontSize: 50}}/>
          </View>
       </Header>

       <Navigation />

        <Footer>
              <View style={{}}>
                <AntDesign onPress={()=> console.log('Home')} name='home' style={{ fontSize: 50}}/>
              </View>
              <View style={{ }}>
                <AntDesign onPress={()=> console.log('Search')} name='search1' style={{ fontSize: 50}}/>
              </View>
              <View style={{ }}>
                <AntDesign onPress={()=> console.log('Heart')} name='heart' style={{ fontSize: 50}}/> 
              </View>
        </Footer>
        <StatusBar/>
    </>
  );
}

const Header = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 10%;
  background-color: gray;
`;


const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
  background-color: gray;
`;
const FooterImage = styled.View`
`;


