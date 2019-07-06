import React, { Component } from 'react';

// Imports for accordion layout
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Imports for checkbox forms
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'

// Imports for confirm button
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { stylesheet } from './styles.js'

// Styles for confirm button
const styles = StyleSheet.create(stylesheet);

class VideoPlayer extends Component {
    render() {
        return (
            <video src={require("./data/" + this.props.children)} width={document.documentElement.clientWidth} controls></video>
        );
    }
}

// Material -> Accordion container class
class ClassOptionPanel extends Component {
    render() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>{this.props.name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {this.props.children}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

// Confirm button
class ConfirmAnnotationsButton extends Component {
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

// Checkbox in accordion dropdown
class OptionCheckbox extends Component {
    render() {
        return (
            <FormControlLabel
                control={<Checkbox />}
                label={this.props.children}
            />
        );
    }
}

export class Interface4 extends Component {
    render() {
        return (
            <div>
                <VideoPlayer>2clip.mp4</VideoPlayer>

                <View style={{marginBottom: 50}}>

                    {/* TODO: handle form submission */}
                    <ClassOptionPanel name='Engine sounds'>
                        <FormControl component="fieldset">
                            <FormGroup>
                                <OptionCheckbox>Small-sounding Engine</OptionCheckbox>
                                <OptionCheckbox>Medium-sounding Engine</OptionCheckbox>
                                <OptionCheckbox>Large-sounding Engine</OptionCheckbox>
                            </FormGroup>
                        </FormControl>
                    </ClassOptionPanel>

                    <ClassOptionPanel name='Impact sounds'>
                        <FormControl component="fieldset">
                            <FormGroup>
                                <OptionCheckbox>Rock drill</OptionCheckbox>
                                <OptionCheckbox>Jackhammer</OptionCheckbox>
                                <OptionCheckbox>Hoe ram</OptionCheckbox>
                                <OptionCheckbox>Pile driver</OptionCheckbox>
                            </FormGroup>
                        </FormControl>
                    </ClassOptionPanel>

                    <ClassOptionPanel name='Powered sawing tools'>
                        <FormControl component="fieldset">
                            <FormGroup>
                                <OptionCheckbox>Chainsaw</OptionCheckbox>
                                <OptionCheckbox>Small/medium rotating saw</OptionCheckbox>
                                <OptionCheckbox>Large rotating saw</OptionCheckbox>
                            </FormGroup>
                        </FormControl>
                    </ClassOptionPanel>

                    <ClassOptionPanel name='Alert signals'>
                        <FormControl component="fieldset">
                            <FormGroup>
                                <OptionCheckbox>Car horn</OptionCheckbox>
                                <OptionCheckbox>Car alarm</OptionCheckbox>
                                <OptionCheckbox>Siren</OptionCheckbox>
                                <OptionCheckbox>Reverse beeper</OptionCheckbox>
                            </FormGroup>
                        </FormControl>
                    </ClassOptionPanel>

                    <ClassOptionPanel name='Music'>
                        <FormControl component="fieldset">
                            <FormGroup>
                                <OptionCheckbox>Stationary music</OptionCheckbox>
                                <OptionCheckbox>Mobile music</OptionCheckbox>
                                <OptionCheckbox>Ice cream truck</OptionCheckbox>
                            </FormGroup>
                        </FormControl>
                    </ClassOptionPanel>

                    <ClassOptionPanel name='Human voices'>
                        <FormControl component="fieldset">
                            <FormGroup>
                                <OptionCheckbox>Person or small group talking</OptionCheckbox>
                                <OptionCheckbox>Person or small group shouting</OptionCheckbox>
                                <OptionCheckbox>Large crowd</OptionCheckbox>
                                <OptionCheckbox>Amplified speech</OptionCheckbox>
                            </FormGroup>
                        </FormControl>
                    </ClassOptionPanel>

                </View>

                <ConfirmAnnotationsButton />
            </div>
        );
    }
}