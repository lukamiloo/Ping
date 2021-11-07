import { StatusBar } from 'expo-status-bar';
import React, { useEffect} from 'react';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
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
  const [input, setInput] = React.useState([]);
  
  useEffect(() => {
    fetch('localhost:5000/post', {
      method: 'POST'
    }).then(resp => resp.json()).then(input => {
      setInput(input)
    })
  }, []);

  console.log("started on device");
  return (
    <>
      <View style={styles.container}>
          <TextInput
            style = {styles.input}
            placeholder = "Enter Distress Description"
            onChangeText = {(input) => setInput(input)}
            onSubmitEditing={()=> {
              alert(`Message sent: ${input}`);
            }}
            defaultValue = {input}
          />
          <AppButton
            title="ping"
            onPress={() => {Alert.alert("sent!")}}
          />

        <SafeAreaView></SafeAreaView>
        <StatusBar style="auto" />
      </View>
    </>
  );

}
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={requestPermissions, onPress} style={styles.appButtonContainer}>
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
    paddingHorizontal: 12,
    marginBottom: 120
  },
  appButtonText: {
    fontSize: 40,
    color: 'white',
    alignSelf: "center",
    paddingTop: 95,
  },
  input: {
    marginBottom: 40,
    paddingLeft: 20,
    width: 200,
    
  },
});

export default App;
