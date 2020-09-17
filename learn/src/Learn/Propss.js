import React, {Component} from 'react';


class Propss extends Component{

    constructor(props) {
        super(props)
        
        this.nameIsClicked = this.nameIsClicked.bind(this)
        //method is getting binded with the component
        
        //if the method is being called by render of this then it has
        //to be binded in constructor

        this.collegeIsClicked = this.collegeIsClicked.bind(this)

        //setting state

        this.state = {
            toggle: true
        }
        //since the method is being called in render function the 
        //method is binded with this here

        this.changeState = this.changeState.bind(this)
    }



    nameIsClicked(event) {
        // for events methods can have parameter as event to handle events
        //or it can be no parameterized method
        // to access the objects of the component event objects are passed in parameter
        // and to use it the particular method has to be binded to the constructor

        console.log(this.props)
        alert('clicked')
    }   
    
    collegeIsClicked() {
        const {student} = this.props
        const {eventHandler} = this.props
        eventHandler(student.college)
    }

    
    changeState() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        const {student} = this.props
        const {toggle} = this.state
        // const student = this.props.student //another way of writing
        return <div>
            {toggle === true?
                <div>
                    <h1 onClick={this.nameIsClicked}>
                    {student.name}
                    </h1>
                    <p>{student.usn}</p>
                    <p>{student.email}</p>
                    <p onClick={this.collegeIsClicked}>{student.college}</p>
                </div>
                :""
            }
            <button onClick={this.changeState}>Toggle</button>
        </div>
    }
}

export default Propss