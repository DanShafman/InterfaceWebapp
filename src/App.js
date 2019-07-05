import React, { Component } from 'react';
import { Text, Switch, View, StyleSheet, TouchableOpacity } from "react-native";
import { stylesheet } from './styles.js'

import { VideoPlayer, SwitchContainer, ConfirmAnnotationsButton } from './interfaces-2.js';

const styles = StyleSheet.create(stylesheet);

export default class App extends Component {
  render() {
    return (
      <div>
        <VideoPlayer>2clip.mp4</VideoPlayer>

        <View style={styles.descriptionBoxContainer}>
          <Text style={styles.titleBox}>Suggested Sound-sources</Text>
          <Text style={{ fontFamily: 'sans-serif-light', }}>Switch on confirms the sound-source is present.
Switch off if the sound is not present in the clip.
Click on the label for further details about the label.</Text>
        </View>

        <SwitchContainer>Jackhammer</SwitchContainer>
        <SwitchContainer>Rock Drill</SwitchContainer>
        <SwitchContainer>Saw</SwitchContainer>
        <SwitchContainer>Small Engine</SwitchContainer>
        <SwitchContainer>Large Engine</SwitchContainer>
        <SwitchContainer>Human Voice</SwitchContainer>
        <SwitchContainer>Dog Barking</SwitchContainer>
        <SwitchContainer>Sensor Malfunction</SwitchContainer>
        <SwitchContainer>Hammer</SwitchContainer>
        <SwitchContainer>Impact Machinery</SwitchContainer>
        <SwitchContainer>Car Horn</SwitchContainer>
        <SwitchContainer>Reverse Beep</SwitchContainer>
        <SwitchContainer>Brakes</SwitchContainer>

        <ConfirmAnnotationsButton />


      </div>
    );
  }
}
