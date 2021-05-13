import React, {Component} from 'react'
import '../css/main.css'


class Text extends Component {
    constructor(props) {
        super(props)

        this.onchange = this.onchange.bind(this)
        this.onClick = this.onClick.bind(this)
        
        this.state = {
            name: "",
            val: ""
        }

    }

    onchange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onClick() {
        const {name} = this.state
        console.log(name)
        this.setState({
            val: name
        })
    }

    render() {
        const {val} = this.state
        return <div className="App">
            <h3>Text Field</h3>
            <div>
                <input type="text" name="name" onChange={this.onchange}/><br />
                <div>
                    <button onClick={this.onClick}>Submit</button>
                </div><br />
                {val === "" ? "" : "Name " + val}
            </div>  
        </div>
    }
}

export default Text