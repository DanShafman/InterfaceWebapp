import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';


class VideoPlayer extends Component {
    render() {
        return (
            <video src={require("./data/" + this.props.children)} width={document.documentElement.clientWidth} controls></video>
        )
    }
}

// Material Card that contains data on sound option
class OptionCard extends Component {
    render() {
        return (
            <div>
                <Card
                // minWidth='100'
                >
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {this.props.children}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export class Interface1 extends Component {
    render() {
        document.getElementsByTagName("body")[0].setAttribute("bgcolor", "mintcream");
        return (
            <div>
                <VideoPlayer>1clip.mp4</VideoPlayer>
                <div style={{ marginTop: 50 }}>
                    <ReactSwipe
                        swipeOptions={{ continuous: true, speed: 300 }}
                    >
                        <div style={{ height: 200 }}>
                            <div style={{ marginLeft: '15%', width: '70%' }}>
                                <OptionCard title='Jackhammer'>
                                    A jackhammer is a pneumatic or electro-mechanical hammer and chisel tool
                                    that is typically used to break up rock, pavement, or concrete.
                                </OptionCard>
                            </div>
                        </div>
                        <div style={{ height: 200 }}>
                            <div style={{ marginLeft: '15%', width: '70%' }}>
                                <OptionCard title='Circular saw'>
                                    A circular saw is a power-saw using a toothed or abrasive disc or blade 
                                    to cut different materials using a rotary motion spinning around an arbor.
                                </OptionCard>
                            </div>
                        </div>
                        <div style={{ height: 200 }}>
                            <div style={{ marginLeft: '15%', width: '70%' }}>
                                <OptionCard title='Pile driver'>
                                    A pile driver is a device used to drive piles (poles) into soil to provide 
                                    foundation support for buildings or other structures.
                                </OptionCard>
                            </div>
                        </div>
                    </ReactSwipe>
                </div>
            </div>
        );
        // return(
        //     <div>
        //         <VideoPlayer>9clip.mp4</VideoPlayer>
        //     </div>
        // );
    }
}