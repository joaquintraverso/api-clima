import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';7
import Formulario from './components/Formulario';
import Clima from './components/Clima';

export default function App() {
  return (
    <>
      <TouchableNativeFeedback>
        <View style={styles.app .bgColorApp}>
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
  },
  contenido: {
    marginHorizontal: '2.5px'
  },
});
