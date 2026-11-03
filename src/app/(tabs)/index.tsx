import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import {router} from 'expo-router'
import React from 'react'

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Viajeros del mundo</Text>
      <Text style={styles.parrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam porro officia! Doloribus quidem possimus dolor odit accusantium est doloremque, ab inventore perspiciatis maxime voluptates beatae. Suscipit consequatur animi odit?
      Impedit inventore accusamus officia qui error commodi saepe quaerat, eaque reprehenderit autem dolore, mollitia velit ab, culpa aut labore quia consequatur voluptatum illo. Debitis reiciendis, mollitia hic consequuntur rerum laudantium.</Text>
      <Text style={{textAlign: 'center'}}>
      <Image source={require('@/assets/images/logo.png')} style={{width: 300, height: 250}}></Image>
      <TouchableOpacity style={styles.boton} onPress={()=>router.push('/(tabs)/contactos')}>
        <Text style={{textAlign: 'center', color: 'white'}}>Click aqui</Text>
      </TouchableOpacity>
      </Text>
      <Text  style={styles.pie}>Derechos Reservados a Carlos Zevallos</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
  },
  titulo: {
  textAlign: 'center',
  fontSize: 18,
  marginBottom: 10,
  },
  parrafo: {
    fontSize: 14,
    lineHeight: 30,
  },
  boton: {
    backgroundColor:'blue',
    padding: 10,
    borderRadius: 10,
  },
  pie:{
        textAlign:'center',
        marginVertical:20,
  }
})