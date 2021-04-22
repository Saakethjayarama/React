import React, { Component } from 'react'

class OddEven extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oddeve : "",
            num: null
        }
        this.getOddEven = this.getOddEven.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    getOddEven() {
        const {num} = this.state
        console.log(num)
        if(num % 2 === 0) {
            this.setState({
                oddeve: "Even"
            });
        }
        else {
            this.setState({
                oddeve: "Odd"
            })
        }
    }

    handleChange(evt) {
        this.setState({
            num : evt.target.value
        })
    }
    
    render() {
        const {num} = this.state
        const {oddeve} = this.state
        return (
            <div>
                Number: <input 
                            type="text"
                            value={num}
                            onChange={this.handleChange}
                        ></input>
                <button onClick={this.getOddEven}>Get Odd Even</button>

                Odd or Even: {oddeve}
            </div>
        )
    }
}

export default OddEven
