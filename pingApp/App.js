import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
//import profile from 'pingApp/backend.py';
import { 
  StyleSheet, 
  Text,
  TextInput,
  OnChangeText,
  View, 
  Button, 
  Alert, 
  useState,
  TouchableOpacity, 
  SafeAreaView, 
  useRef, 
  useCallback, 
  useMemo, 
  useWindowDimensions } from 'react-native';

//import BottomSheet from '@gorhom/bottom-sheet';
import { PanGestureHandler } from 'react-native-gesture-handler';

// View -> UIView
const App = () => {
  const [input, setInput] = React.useState();
  console.log("started on device");
  return (
    <>
      <View style={styles.container}>
          <AppButton
            title="ping"
            onPress={() => {Alert.alert("sent!")}}
          />
          <TextInput
            style = {styles.input}
            placeholder = "Enter Distress Description"
            onChangeText = {(input) => setInput(input)}
            onSubmitEditing={()=> {
              alert(`Message sent: ${input}`);
            }}
            defaultValue = {input}
          />
        <SafeAreaView></SafeAreaView>
        <StatusBar style="auto" />
      </View>
    </>
  );

}

//const insertData = () => {
 // fetch()
//}

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={requestPermissions} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const LOCATION_TASK_NAME = 'foreground-location';

const requestPermissions = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync()
  console.log('permissions')
  if (status === 'granted') {
    let location = await Location.getCurrentPositionAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.Balanced,
    });
    setLocation(location)
    console.log(JSON.stringify(location))
    
  }
};


const PermissionsButton = () => (
  <TouchableOpacity
        onPress={requestPermissions}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Location Permission</Text>
      </TouchableOpacity>
);

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  const [location, setLocation] = React.useState(null);
  if (error) {
    // Error occurred - check `error.message` for more details.
    return;
  }
  if (data) {
    console.log("received")
    const { location } = data;
    // do something with the locations captured in the background
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonContainer: {
    width: 280,
    height:280,
    elevation: 8,
    backgroundColor: '#23AFE7',
    borderRadius: 150,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 50,
    color: 'white',
    alignSelf: "center",
    paddingTop: 95,
  },
  input: {
    paddingTop: 50,
    width: 200,
    
  },
});

export default App;
