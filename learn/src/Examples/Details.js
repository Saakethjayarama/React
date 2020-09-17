import React, { Component } from 'react'
import StudentData from '../Learn/data/students.json'

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usn: "",
            name: "",
            email: "",
            college: ""
        }

        this.clicked = this.clicked.bind(this)
        this.onchange = this.onchange.bind(this)
    }
    clicked(event) {
        event.preventDefault()
        const {usn} = this.state
        console.log(usn)
        
        StudentData.forEach(element => {
            console.log(element)
            if(element.usn === usn) {
                this.setState({
                    usn: element.usn,
                    name: element.name,
                    email: element.email,
                    college: element.college
                })
                return
            }
        });
    }


    onchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        const {usn} = this.state
        const {name} = this.state
        const {email} = this.state
        const {college} = this.state

        return (
            <div>
                <input type="text" name="usn" onChange={this.onchange} /> <br/>
                
                    USN: {usn} <br />
                    NAME: {name} <br />
                    EMAIL: {email} <br />
                    COLLEGE: {college} <br />
                
                <button onClick={this.clicked}>Submit</button>
                
            </div>
        )
    }
}

export default Details
