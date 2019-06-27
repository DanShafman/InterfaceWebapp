import React from 'react';
import { Text, Switch, View, StyleSheet } from "react-native";
import { stylesheet } from './styles.js'

const styles = StyleSheet.create(stylesheet);



function App() {
  console.log(stylesheet);
  return (
    <div>
      <video src={require("./data/9clip.mp4")} width={document.documentElement.clientWidth} controls></video>
      <View style={styles.descriptionBox}>
        <Text>Suggested Sound-sources</Text>
      </View>
      <View style={styles.switchCase}>
        <Switch style={styles.switch}></Switch>
      </View>
      
    </div>
    // <View>
    //   <Text>henlo</Text>
    // </View>
  );
}

export default App;
