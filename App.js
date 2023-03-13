import * as React from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import {useState, useEffect} from 'react';

export default function App() {

  const [text, setText]= useState('');

  useEffect(() => { async function listAllVoices () {
    let voices = await Speech.getAvailableVoicesAsync();
    console.log(voices);
  } listAllVoices();
}, []);

  const speak = () => {
    const thingToSay = text;
    options={
      voice: "en-US-SMTf00"
    };
    Speech.speak(thingToSay, options);
  };

  return (
    <View style={styles.container}>
      <TextInput style={{fontSize:18, width:200}} 
      placeholder='write some text'
      onChangeText={text => setText(text) } value={text} />
      <Button title="Press to hear text" onPress={speak} />
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
