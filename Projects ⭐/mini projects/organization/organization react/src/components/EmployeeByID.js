import React, {Component} from 'react'
import '../css/EmployeeById.css'
import host from './config'
import Axios from 'axios'

class EmployeeById extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)

        this.state ={
            id : '',
            employee: '',
        }
        
    }

    onChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onClick() {
        const {id} = this.state
        Axios.get(host+'/employee/id/' + id)
        .then((res)=> {
            console.log(res.data)
            this.setState({
                employee : res.data
            })
        })
    }

    render() {
        const {employee} = this.state
        return <div className="employeesById">
            EmployeeById:&nbsp;&nbsp; 
            <label for="id">
                <input type="number"
                    id="id"
                    name="id"
                    onChange={this.onChange}
                    value = {this.state.id}
                    required={true}
                />
            </label>&nbsp;
            <button
                onClick={this.onClick}
            >Submit</button>
            {employee === '' ? '' : <div>
                Employee ID: {employee.employeeID}<br />
                Name: {employee.name}<br />
                Gender: {employee.gender}<br />
                DateOfBirth: {employee.dateOfBirth}<br />
                DateOfJoining: {employee.dateOfJoining} <br />
                Email: {employee.emailId}<br />
                DesignationID: {employee.designationId}<br />
                </div>}
        </div>
    }

}


export default EmployeeById