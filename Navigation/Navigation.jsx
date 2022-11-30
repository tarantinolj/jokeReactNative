import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FullItem } from '../components/FullItem';
import { ListItems } from '../components/ListItems';


const Stack = createNativeStackNavigator();

export const Navigation = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = 'Home' component={ListItems} options ={{ title: 'Новости',headerShown: false}} />
                <Stack.Screen name = 'FullPost' component={FullItem} options ={{ title: 'Статья', headerShown: false}}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}