import React, {Component} from 'react'
import '../css/main.css'

class Select extends Component {

    constructor(props) {
        super(props)

        this.state = {
            lang : '',
            value: 'C'
        }

        this.change = this.change.bind(this)
        this.click = this.click.bind(this)
    }

    change(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    click() {
        const {lang} = this.state
        this.setState({
            value: lang
        })
    }

    render() {
        const {value} = this.state
        return <div className="App">
            <b>Select</b><br />
            Languages: &nbsp;&nbsp;
            <select name="lang" onChange={this.change}>
                <option value="C"> C </option>
                <option value="C++">C++ </option>
                <option value="Java">Java</option>
            </select><br />
            <button onClick={this.click}>Submit</button><br />
            {value === "" ? "" : "Selected : " + value}

        </div>
    }
}

export default Select