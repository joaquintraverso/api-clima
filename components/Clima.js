import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

export default function Clima() {
  return (
    <View style={styles.clima}>
      <Text style={[styles.texto, styles.acutal]}>
        {/* TODO: tmp acutal */}
        <Text style={styles.temperatura}> &#x2103; </Text>
        {/*<Image
          style={{width: 66, height: 58}}
          //source={{}}
        />*/}
      </Text>
      <View style={styles.temperaturas}>
        <Text style={styles.texto}> 
          Min {' '}
          <Text style={styles.temperatura}> &#x2103; </Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  clima: {
    marginBottom: 20,
  },
  texto: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    marginRight: 20,
  },
  actual: {
    fontSize: 80,
    marginRight: 0,
    fontWeight: 'bold',
  },
  temperatura: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  temperaturas: {
   flexDirection: 'row',
   justifyContent: 'center', 
  }
})