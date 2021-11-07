import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity , SafeAreaView } from 'react-native';
import { useWindowDimensions } from 'react-native';
import styled from 'styled-components';

// View -> UIView
const App = () => {
  console.log("started on device");
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <AppButton
        title="PING"
        onPress={() => Alert.alert('sent')}
      />
      <SafeAreaView></SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

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
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12

  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
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
