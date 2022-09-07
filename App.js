import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';7
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import React, { useState, useEffect } from 'react';

export default function App() {
  
  const [data, setData] = useState([])

    useEffect(() => {

      const getData = async () => {
        const key = '3430fc6741485ede286b1aa1a9bd4319'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${'Concepcion Del Uruguay'},${'AR'}&appid=${key}`;
        const res = await fetch(url);
        const newData = await res.json();
        setData(newData);
      }

      getData();
    
    }, []);



  return (
    <>
      <TouchableNativeFeedback>
        <View style={styles.app}>
          <View>
            <Clima />

            <Formulario />
          </View>
        </View>
      </TouchableNativeFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
  contenido: {
    marginHorizontal: '2.5%'
  },
});
