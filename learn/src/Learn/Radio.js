import React,  { Component } from 'react'

class Radio extends Component{
    constructor(props) {
        super(props)
        this.state = {
            gender: ""
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onSubmit(event) {
        event.preventDefault()

        const {gender} = this.state
        alert(gender + ' selected')
    }

    onChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        })

    }
    render() {
        return <div>
            <input type="radio" value='male' name='gender' onChange={this.onChange}/> Male
            <input type="radio" value='female' name='gender' onChange={this.onChange}/> Female
            <button onClick={this.onSubmit}>Submit</button>
        </div>
    }
}

export default Radio