import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, safeAreaView} from 'react-native';
import HTMLView from 'react-native-htmlview'

const htmlContent = "<p>THIS IS HTML</p>";

// View -> UIView
const App = () => {
  console.log("started on device");
  return (
    <View style={styles.container}>
       <HTMLView value={htmlContent}/>
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
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
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
