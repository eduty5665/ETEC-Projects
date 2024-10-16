import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet,Image, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
 const [number, setNumber] = useState(0);
 function increment() {
 return setNumber(number +1);
 }

 return (
<View style={styles.container}>
<Text style={styles.text}>Eduty's Soccer</Text>
<Text style={styles.text}>chuta ae</Text>
    <StatusBar style="white" />
    <TouchableOpacity onPress={increment} style={styles.button}>
    <Image
        source={require('./assets/image-removebg-preview.png')} // Caminho da imagem local
        style={styles.image}
      />
    </TouchableOpacity>
    <Text style={styles.text}>{number}</Text>
    
 </View>
 );
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: '#42f542',
 alignItems: 'center',
 justifyContent: 'space-evenly',
 },

 text: {color: "black", fontSize: 30, marginTop: 20},

 button: {
 
 },

 image: {
  width: 170,
  height: 200,
  resizeMode: 'contain',
  marginBottom: 20,
},
imageBackground: {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center",
  alignItems: "center",
  width: 500,
  
},
});