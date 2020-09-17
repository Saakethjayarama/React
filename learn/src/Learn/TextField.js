import React,  { Component } from "react"


class TextField extends Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            fullName: ''
        }

        //focus
        this.nameRef = React.createRef()
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const data = this.state
        console.log(data)

        //these also can be done using ref
        // console.log(this.nameRef.current.value) //gives val of ref
        // this.nameRef.current.value = ''
    }

    componentDidMount() {
        //Start focusing on mount
        this.nameRef.current.focus()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        const {fullName} = this.state
        return <div>
            <p>FullName: {fullName}</p>
            <form onSubmit={this.handleSubmit}>
                <p><input ref={this.nameRef} type='text' name='fullName' onChange={this.handleChange} value={fullName}/></p>
                <p><button>send</button></p>
            </form>
        </div>
    }
}

export default TextField