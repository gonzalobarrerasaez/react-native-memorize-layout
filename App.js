import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

const Card = ({ item }) => {
  return (
    <Text style={styles.square}>{item}</Text>
  )

}
export default function App() {
  const totalItemsSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const totalItems = Array.from(totalItemsSet); // Evitamos duplicados
  let duplicated = totalItems.concat(totalItems); // Duplicamos
  // TODO, crear la estructura para que cada item
  // tenga el estado "oculto,visible y emparejado"  
  duplicated.sort(() => Math.random() - 0.5); // randomizamos

  return (
    <SafeAreaView style={styles.safe} >
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {(duplicated).map((item, index) => {
            return <Card item={item} key={index} />
          })}
        </View>
        <View style={styles.container}>
          <Text style={styles.exit}>SALIR</Text>
        </View>
      </View>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: '100%',
    backgroundColor: '#2C3E50',
    marginTop: 30
  },
  square: {
    backgroundColor: '#3498DB',
    marginTop: 40,
    margin: 15,
    padding: 28,
    fontSize: 16,
    textAlign: 'center',
    color: '#ECF0F1'
  },
  safe: {
    flex: 1
  },
  exit: {
    color: '#ECF0F1',
    textAlign: 'center',
    fontSize: 22
  }
});
