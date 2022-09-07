import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Alert, Animated, TextInput, Touchable, TouchableWithoutFeedback } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Formulario() {
  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput
            style={styles.input}
          />
        </View>

        <View>
          <Picker>
            <Picker.item label='seleccione una ciudad..' value=''/>
            <Picker.item label='Concepcion del Uruguay' value=''/>
            <Picker.item label='Villa Elisa' value=''/>
            <Picker.item label='Cordoba' value=''/>
            <Picker.item label='Bariloche' value=''/>
          </Picker>
        </View>
        <TouchableWithoutFeedback>
          <Animated.View>
            <Text style={styles.btnBuscar}>Buscar Clima</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  btnBuscar:{
    marginTop: 50,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center'
  },
  input: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
  },
  formulario: {
    marginBottom: 100,
    paddingHorizontal: 20,
  },
});