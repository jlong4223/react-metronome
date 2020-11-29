import React, {Component}from 'react'
import './Metronome.css'
import click1 from './click1.wav'
import click2 from './click2.wav'

class Metronome extends Component{
    constructor(props){
        super(props)

        this.state={
            playing: false,
            count: 0,
            bpm: 100,
            beatsPerMeasure: 4
        }
        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);
    }

    handleBpmChange = event =>{
        const bpm = event.target.value
        this.setState({bpm})
    }

    startStop = ()=>{
        if (this.state.playing){
            //stop the timer
            clearInterval(this.timer)
            this.setState({
                playing:false
            })
        } else {
            //start timer with the current BPM
            this.timer = setInterval(
                this.playClick,
                (60/this.state.bpm)*1000
            );
            this.setState(
            {
                count: 0,
                playing: true
            }, 
            this.playClick
        )
    }
}

    render(){
        const {playing, bpm} = this.state;

        return (
        <div className='metronome'>
            <div className="bpm-slider">
            <div>{bpm} BPM </div>
            <input type='range' min='60' max='240' value={bpm} onChange={this.handleBpmChange} />
        </div>
    <button onClick={this.startStop}>{playing ? 'Stop' : 'Start'}</button>
        </div>)
    }
}

// const Metronome = (props)=>{
//     let bpm = 100;
//     let playing = false;
//     return( 
//     <div className="metronome">
//         <div className="bpm-slider">
//             <div>{bpm} BPM </div>
//             <input type='range' min='60' max='240' value={bpm} />
//         </div>
//     <button>{playing ? 'Stop' : 'Start'}</button>
//         </div>
//     )
// }

export default Metronome