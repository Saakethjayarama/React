import React, { Component } from 'react'
import Students from './data/students.json'
import Propss from './Propss'


class Props extends Component {

    

    //since the eventHandler is not
    //not called by this.render it is not binded here

    eventHandler(college) {
        alert(college + 'ian')
    }

    render() {
        return (
            <div>
                <p>Hello Saaketh,</p>
                {Students.map((student, index) => {
                    return <Propss  
                    student={student} 
                    key={`post-list-key ${index}`}
                    eventHandler = {this.eventHandler}/>
                })}
            </div>
        )
    }
}



export default Props