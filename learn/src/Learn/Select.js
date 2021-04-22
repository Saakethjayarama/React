import React,  { Component } from 'react'

class Select extends Component {
    constructor(props) {
      super(props);
      this.state = {dept: 'ISE'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      console.log(event.target.name)
      console.log(event.target.value)
      this.setState({[event.target.name]: event.target.value});

      //Doubt :- Javascript threads
      console.log(this.state)
    }
  
    handleSubmit(event) {
      event.preventDefault()
      console.log(this.state.dept + ' selected')
    }
  
    render() {
      const {dept} = this.state
      return (
       <div>
          <form onSubmit={this.handleSubmit}>
          <label>
            Branch:&nbsp;
            <select name='dept' value={this.state.dept} onChange={this.handleChange}>
              <option value="CSE">CSE</option>
              <option value="ISE">ISE</option>
              <option value="ECE">ECE</option>
              <option value="CV">CV</option>
            </select>
          </label>&nbsp;
          <input type="submit" value="Submit" />
        </form>
        Selected: {dept}
       </div>

      );
    }
}

export default Select