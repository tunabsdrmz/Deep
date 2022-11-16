import { StyleSheet, View, Text, Button, Image, TextInput, Pressable, Keyboard, TouchableWithoutFeedback} from "react-native"; 
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
export default function Add(){  
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
    };

    return(
      <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
      >
        <View style={styles.container}>
            <Text style={styles.photoImageText}>Photo</Text>
            <View style={styles.imageContainer}>
               {image && <Image source={{ uri: image }} style={styles.image} />} 
            </View>
            <View style={styles.buttons} >
               <Button title="Pick an image" onPress={pickImage} /> 
               <Button title="Remove" onPress={() => setImage(null)} color='red' /> 
            </View>     
            <Text style={styles.text}>Description</Text>
            <TextInput
            style={styles.input}
            onChangeText={setDescription}
            value={description}
            />
            <Text style={styles.text}>Date</Text>
            <TextInput
            style={styles.input}
            onChangeText={setDate}
            value={date}
            placeholder='28-09-2022'
            />
            <Pressable onPress={() => console.log('pressed')}   
            style={({ pressed }) => [
            {
             backgroundColor: pressed
              ? '#E1B0E1'
              : '#E8BDE8'
             },
             styles.addButton
             ]}>
                 <Text style={styles.addText}>Add</Text>
            </Pressable>

        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#F8F6FF",
        paddingTop: 20,
        
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        fontFamily: 'Oswald_400Regular',
      },
      text:{
        paddingLeft:12,
        fontSize:18,
        paddingVertical:5,
        fontFamily: 'Oswald_700Bold',
        color: '#546C9A'
      },
      photoImageText:{
        paddingLeft:12,
        fontSize:18,
        paddingVertical:15,
        fontFamily: 'Oswald_700Bold',
        color: '#546C9A'
      },
      imageContainer:{
        display: 'flex',
        alignSelf: 'center',
        width: 350,
        height: 250,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#F0F0F1'
      },
      image:{
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 248,
        width: 200,
      },
      buttons:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
      },
      addButton:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#EFAFEF'
      },
      addText:{
        paddingVertical:5,
        fontFamily: 'Oswald_600SemiBold',
        fontSize: 22,
        color: 'white'
      }
})