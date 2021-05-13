import React, {Component} from 'react'
import '../css/main.css'

class Radio extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gender: '',
            value: ''
        }

        this.change = this.change.bind(this);
        this.click = this.click.bind(this);
    }

    change(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    click() {
        const {gender} = this.state

        this.setState({
            value: gender
        })
    }

    render() {
        const {value} = this.state
        return <div className="App">
            <b>Radio</b><br />
            Gender
            <p><input type="radio" name="gender" value="male" onChange={this.change}/>Male</p>
            <p><input type="radio" name="gender" value="female" onChange={this.change}/>Female</p>
            <button onClick={this.click} >Submit</button><br />
            {value === "" ? "" : "Gender: " + value}

        </div>
    }
}

export default Radio