import React, { Component } from 'react';
import { Text, Switch, View, StyleSheet, TouchableOpacity } from "react-native";
import { stylesheet } from './styles.js'

const styles = StyleSheet.create(stylesheet);

class VideoPlayer extends Component {
  render() {
    return (
      <video src={require("./data/" + this.props.children)} width={document.documentElement.clientWidth} controls></video>
    )
  }
}

class SwitchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {switchValue: false};
    this.handleSwitchToggled = this.handleSwitchToggled.bind(this);
  }

  handleSwitchToggled() {
    this.setState({switchValue: !this.state.switchValue});
  }

  render() {
    return(
      <View style={styles.switchCase}>
        <Text style={styles.switchDescription}>{this.props.children}</Text>
        <Switch style={styles.switch} onValueChange={this.handleSwitchToggled} value={this.state.switchValue}></Switch>
      </View>
    )
  }
}

class ConfirmAnnotationsButton extends Component {
  handleConfirmAnnotationsAction() {
  }

  render() {
    return(
      <View style={{justifyContent: 'center'}}>
        <TouchableOpacity style={styles.confirmButton} title="Confirm" onClick={this.handleConfirmAnnotationsAction}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <VideoPlayer>2clip.mp4</VideoPlayer>

        <View style={styles.descriptionBoxContainer}>
          <Text style={styles.titleBox}>Suggested Sound-sources</Text>
          <Text style={{fontFamily: 'sans-serif-light',}}>Switch on confirms the sound-source is present. 
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

        <ConfirmAnnotationsButton/>

        
      </div>
    );
  }
}
