import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

// View -> UIView
const App = () => {
  return (
    <View style={styles.container}>
      <Button
        title="PING"
        onPress={() => Alert.alert('sent')}
      />
      <TextInput
        style = {{height:40}}
        placeholder = "Enter Distress Description"
        onChangeText = {Text => setText(Text)}
        defaultValue = {Text}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const message = () =>{
  const [text, setText] = useState('');
  return(
    <View style = {{padding: 10}}>
      <TextInput
        style = {{height:40}}
        placeholder = "Enter Distress Description"
        onChangeText = {text => setText(text)}
        defaultValue = {text}
        />
      
    </View>
  )
}



export default App;
