import React, {Component} from 'react'

class CheckBox extends Component{
    constructor(props) {
        super(props)

        this.state = {
            lang: [],
            
        }

        this.checkChange = this.checkChange.bind(this)
    }


    checkChange(event) {
        
    }


    render() {
        return <div>
            <input type="checkbox" name='lang' value="C" checked={true} onChange={this.checkChange}/> C <br />
            <input type="checkbox" name='lang' value="Java" checked={false} onChange={this.checkChange}/>Java <br />
        </div>
    }
}

export default CheckBox