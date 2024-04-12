import React from 'react';
import Constants from 'expo-constants'

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  TextInput
} from 'react-native';

const image = {uri: 'https://senasofiaplus.xyz/wp-content/uploads/2023/10/logo-del-sena-01.png'};
// Con separator crearemos una línea separadora en pantalla
const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.image} />
    </View>
    <View>
      <Text style={styles.title}>
        Estoy experimentando con React Native para la evidencia GA8-220501096-AA2-EV02
      </Text>
      <Button
        title="Bienvenido"
        color="#00AC00"
        onPress={() => Alert.alert('Hola, te saluda el instru Carlos Andrés Mora')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Dame mi nota, instructor
      </Text>
      <Button
        title="Conoce tu nota"
        color="#1860BB"
        onPress={() => Alert.alert('Tu nota es 100 (A)')}
      />
    </View>
    <Separator />
    <View>    
      <View>
        <Text style={styles.title}>
          Retroalimentación del instructor
        </Text>
        <TextInput style={styles.textInput} />
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <Button
          title="Mensaje 1"
          color="#00AC00"
          onPress={() => Alert.alert('No te rindas')}
        />
        <Button
          title="Mensaje 2"
          color="#1860BB"
          onPress={() => Alert.alert('Sigue aprendiendo')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    // justifyContent: 'center',
    marginHorizontal: 8,
  },
  image: {
    // flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
    height:150
  },
  imageContainer: {
    marginTop:50
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput:{
    borderColor: '#00AC00',
    borderWidth: 1,
    height:50
  }
});

export default App;






// import React from 'react'
// import { View, Text,  StyleSheet} from 'react-native'

// const estilos = StyleSheet.create({
//   container:{
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'blue',
//     height:200
//   },
//   titulo:{
//     fontSize:20,
//     color: 'red'
//   }


// })

// const App = () => {
//   return (
//     <View style={estilos.container}>
//       <Text style={estilos.titulo}>Hola mundo</Text>
//     </View>
//   )
// }

// export default App
