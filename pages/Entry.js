import { StyleSheet, Text, View, Modal } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { 
    useFonts,
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold 
  } from '@expo-google-fonts/oswald';
  import Waiting from "./Waiting";


export default function Entry(){
  const [isVisible, setIsVisible] = useState(true)
    useEffect( () => {
        setTimeout(()=> setIsVisible(false) , 10000)
    },[])

    let [fontsLoaded] = useFonts({
         Oswald_200ExtraLight,
         Oswald_300Light,
         Oswald_400Regular,
         Oswald_500Medium,
         Oswald_600SemiBold,
         Oswald_700Bold 
    })
    if (!fontsLoaded) {
      return null;
    }
    
    
    return(
        <View>
          {!fontsLoaded ? <Waiting/> :
        <Modal 
        visible={isVisible}
        animationType='slide'
        >
        <View style={styles.container} >
            <Text style={styles.text}>Mrs. Derin Oktar</Text>
            <Text style={styles.sideText}> Let's go girl </Text>
        </View>
        </Modal>
        }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C8A2C8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontFamily: 'Oswald_700Bold',
      fontSize: 36 ,
      color: 'white',
      marginBottom: 10,
    },
    sideText:{
      fontFamily: 'Oswald_300Light',
      fontSize: 24,
      color: 'white',
    },
    
  });
  