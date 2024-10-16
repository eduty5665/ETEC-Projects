import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
 
export default function Missionarios() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Eduty's APP </Text>
      <Image
        source={require('./assets/Steve-Jobs.jpg')} // Caminho da imagem local
        style={styles.image}
      />
      <Text style={styles.text}>
       "Não deixe o ruído das opiniões{'\n'}
        dos outros abafar a sua{'\n'}
        própria voz interior"</Text>
      <Text style={styles.text}> - Steve Jobs</Text>
      <Image
        source={require('./assets/Steve-Jobs.jpg')}
        style={styles.image1}
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#999e9a',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  image1: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
