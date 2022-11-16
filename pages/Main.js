import { View, StyleSheet, SafeAreaView, ScrollView, Text, Pressable, RefreshControl, Button, } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useCallback } from "react";
import Entry from "./Entry";
import Cards from "../Components/Cards";
import sanityClient from '../sanity'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function Main(){
    const [cards , setCards] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    useEffect(()=>{
        sanityClient.fetch(`*[_type == 'resim'] | order(imagedate desc){
            ...,
          }`).then(data => setCards(data))
    },[])
    
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);


    return(
        <>
        <Entry/>
        <View  style={styles.container}>
        <StatusBar translucent={true}  style='dark'/>
        <View style={styles.Add}>
        </View>
             <ScrollView 
             refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> 
               }>
                {cards?.map(card =>{
                    return(
                    <Cards 
                        key={card._id}
                        id={card._id}
                        image={card.image}
                        description={card.description}
                        date={card.imagedate}
                         />
                    )
                })}       
                
             </ScrollView>
        
       </View>
       </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#F8F6FF"
    },
    Add:{
        position: 'absolute',
        bottom: 20,
        right: 10,
        zIndex: 20,
    }
})