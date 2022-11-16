import { Button, StyleSheet } from 'react-native';
import Main from './pages/Main';
import Add from './pages/Add';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <>
      
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen name='Main' component={Main} options={({navigation})=> ({
            headerTitle: 'Deep',
            headerStyle: {
              backgroundColor: '#BEB4FF'       
            },
            headerTitleStyle:{
              fontFamily: 'Oswald_600SemiBold',
              fontSize: 20,
              color: 'white'
             },  
             headerRight: () => <Button onPress={() => navigation.navigate('Add')} title="Add" color="#fff"/>
          })}/> 
                     
        
        <Stack.Screen name='Add' component={Add} options={{ 
            title: 'Add' ,
            headerStyle: {
              backgroundColor: '#C8A2C8',
            },
            headerTitleStyle:{
              fontFamily: 'Oswald_600SemiBold',
              fontSize: 20,
              color: 'white'
             },
             headerTintColor: 'white'
        }}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    </>  
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8A2C8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 26 ,
    color: 'white',
  },
  
});
