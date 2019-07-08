import React, { Component } from 'react';

class VideoPlayer extends Component {
    render() {
        return (
            <video src={require("./data/" + this.props.children)} width={document.documentElement.clientWidth} controls></video>
        )
    }
}

export class Interface1 extends Component {
    render() {
        return(
            <div>
                <VideoPlayer>9clip.mp4</VideoPlayer>
            </div>
        );
    }
}