import { useEffect, useState } from "react";
import { StyleSheet, View, Modal } from "react-native";

export default function Waiting(){
    const[waitingEntry, setWaitingEntry ] = useState(true);
    useEffect( () => {
      setTimeout(()=> setWaitingEntry(false) , 3000)
  },[])
    return(
        <View>
            <Modal
            visible={waitingEntry}
            animationType='fade'
            >
            <View style={styles.container} >
       
            </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
    }
})