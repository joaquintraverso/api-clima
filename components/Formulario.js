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
            <Picker.Item label='seleccione una ciudad..' value=''/>
            <Picker.Item label='Concepcion del Uruguay' value=''/>
            <Picker.Item label='Villa Elisa' value=''/>
            <Picker.Item label='Cordoba' value=''/>
            <Picker.Item label='Bariloche' value=''/>
          </Picker>
        </View>
        
        <TouchableWithoutFeedback>
          <Animated.View style={styles.btnBuscar}>
            <Text style={styles.txtBuscar}>Buscar Clima</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
  },
  txtBuscar: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAling: 'center',
    fontSize: 18,
  },
  formulario: {
    marginBottom: 100,
    paddingHorizontal: 20,
  },
});