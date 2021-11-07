import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, safeAreaView} from 'react-native';
import HTMLView from 'react-native-webview';

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

let express = require('express');
let mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

db.connect(err =>{
    if(err){
        throw err;
    }
    console.log('MySQL Connected')
});

const app = express();

app.get('/createdb', (req, res) =>{
    let sql = 'CREATE DATABASE nodemysql'
    db.query(sql, err=>{
        if(err){
            throw err;
        }
        res.send('Database Created');
    });
});

export default App;
