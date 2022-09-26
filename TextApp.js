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
      
      <View style={{
        padding : 50, 
        flexDirection : 'row', /*row는 left-to-right, column은 top-to-bottom*/
        width : '80%', height : 400, 
        justifyContent:'center', /* align content : main axis top to bottom */
        alignItems:'stretch' /* align content : cross axis left to right */
      }}>
        {/* Flexbox */}
        <View style ={{backgroundColor:'red', flex: 1, justifyContent:'flex-end', alignItems:'center'}}>
          <Text>Hahaha</Text>
        </View>
        <View style ={{backgroundColor:'blue', flex: 2, justifyContent:'space-between', alignItems:'stretch'}}>
          <Text>Lalala</Text>
        </View>
        <View style ={{backgroundColor:'green', flex: 3, justifyContent:'center', alignItems:'flex-start'}}>
          <Text>Yayaya</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', /* 세로축을 기준으로 상하에 대한 정렬 */
    justifyContent: 'center', /* 가로축을 기준으로 좌우에 대한 정렬 */
    color : '#234343'
  },
  container2: {
    backgroundColor: '#eabbbb',
    alignItems: 'center',
    justifyContent: 'center',
    color : '#234343'
  },
});
