import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput, Linking } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

const index = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.titulo}>Contactos</Text>
                <Image source={require('@/assets/images/banner03.png')} style={{ width: 350, height: 150, resizeMode: 'contain' }}></Image>
                <View style={styles.formulario}>
                    <TextInput placeholder='Escribe tu nombre' style={styles.input}></TextInput>

                    <TextInput placeholder='Escribe tu correo' style={styles.input}></TextInput>

                    <TouchableOpacity style={styles.boton}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>ENVIAR</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.redes}>
                    <FontAwesome style={styles.icono} name="facebook" size={24} color={'red'} onPress={()=>Linking.openURL('https://www.facebook.com')}></FontAwesome>
                    <FontAwesome style={styles.icono} name="youtube" size={24} color={'red'} onPress={()=>Linking.openURL('https://www.youtube.com')}></FontAwesome>
                    <FontAwesome style={styles.icono} name="instagram" size={24} color={'red'} onPress={()=>Linking.openURL('https://www.instagram.com')}></FontAwesome>
                </View>
            </View>

            <Text  style={styles.pie}>Derechos Reservados a Carlos Zevallos</Text>
        </ScrollView>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
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
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
    },
    formulario: {
        backgroundColor: 'orange',
        padding: 20,
        marginVertical: 20,
    },
    input: {
        backgroundColor: 'white',
        height: 35,
        marginVertical: 20,
    },
    redes: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical:20,
    },
    icono:{
        backgroundColor:'black',
        color:'white',
        margin:20,
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:50,
    },
    pie:{
        textAlign:'center',
        marginVertical:20,
    }
})