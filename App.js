import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* inilne style */}
      <Text style={{margin:16, borderWidth: 2, borderColor: 'red'}}>
        Hello World!
      </Text>
      <StatusBar style="auto" />
      <View style={styles.container2}>
        <Text>It's me!</Text>
      </View>
      <Button title='Tabs me!!'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color : '#234343'
  },
  container2: {
    backgroundColor: '#eabbbb',
    alignItems: 'center',
    justifyContent: 'center',
    color : '#234343'
  },
});
