import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'
const Cards = ({id, image, description, date}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.dateContainer}>
           <Text style={styles.date}>{date}</Text> 
        </View>
        <View>
            <Image 
            source={{
                uri: urlFor(image).url()
            }}
            style={styles.image}
            />
        </View>
        <View style={styles.description}>
            <Text style={styles.text}>{description}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#D8DEFF',
        borderColor: '#F8F6FF',
        borderBottomWidth: 1,
     
    },
    dateContainer:{
        flex: 1,
        alignItems: 'flex-end',
        paddingVertical: 10,
        paddingRight: 5,
    },
    date:{
        fontSize: 10,
        fontFamily: 'Oswald_700Bold',
        color: '#546C9A',
    },
    text:{
        fontSize: 14,
        color: '#546C9A',
        fontFamily: 'Oswald_300Light',
    },
    image:{
        width: '100%',
        height: 520
    },
    description:{
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 5,
    }
})


export default Cards