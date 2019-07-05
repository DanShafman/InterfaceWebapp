import React, { Component } from 'react';
import { Text, Switch, View, StyleSheet, TouchableOpacity } from "react-native";
import { stylesheet } from './styles.js'

const styles = StyleSheet.create(stylesheet);

export class VideoPlayer extends Component {
    render() {
        return (
            <video src={require("./data/" + this.props.children)} width={document.documentElement.clientWidth} controls></video>
        )
    }
}

export class SwitchContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { switchValue: false };
        this.handleSwitchToggled = this.handleSwitchToggled.bind(this);
    }

    handleSwitchToggled() {
        this.setState({ switchValue: !this.state.switchValue });
    }

    render() {
        return (
            <View style={styles.switchCase}>
                <Text style={styles.switchDescription}>{this.props.children}</Text>
                <Switch style={styles.switch} onValueChange={this.handleSwitchToggled} value={this.state.switchValue}></Switch>
            </View>
        )
    }
}

export class ConfirmAnnotationsButton extends Component {
    handleConfirmAnnotationsAction() {
    }

    render() {
        return (
            <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity style={styles.confirmButton} title="Confirm" onClick={this.handleConfirmAnnotationsAction}>
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        )
    }
}