import React, { Component } from 'react'

class Time extends Component{

    constructor(props) {
        super(props);
        this.state = {
            min: 0,
            hour: 0,
            sec: 0
        }
        this.getTime = this.getTime.bind(this);
    }

    render() {
        const {min} = this.state
        const {hour} = this.state
        const {sec} = this.state
        return (
            <div>
                Time : {hour}:{min}:{sec}
                <button onClick={this.getTime}>Get Time</button>
            </div>
        )
    }

    getTime() {
        const date = new Date();

        const hour = date.getHours()
        const min = date.getMinutes()
        const sec = date.getSeconds()

        this.setState({
            min: min,
            hour: hour,
            sec: sec
        })
    }

}

export default Time
