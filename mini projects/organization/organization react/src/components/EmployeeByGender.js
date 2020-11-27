import React, {Component} from 'react'
import '../css/EmployeesByGender.css'
import Axios from 'axios'
import host from './config'


class EmployeeByGender extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            gender: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    onChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    onClick() {
        const {gender} = this.state
        Axios.get(host + "/employee/gender/"+gender)
        .then((res) => {
            this.setState({
                employees: res.data
            })
        })
    }

    item(emp_id, name, designation, email, index) {
        return <div className="employee" key={index}>
            <span className="items">{emp_id}</span>
            <span className="items">{name}</span>
            <span className="items">{designation}</span>
            <span className="items">{email}</span>
        </div>
    }

    render() {
        const {employees} = this.state
        return<div className="employeesByGender">
            <h3>EmployeesByGender</h3>
            <input type="radio" name="gender" value="M" onChange={this.onChange}></input>&nbsp;Male<br />
            <input type="radio" name="gender" value="F" onChange={this.onChange}></input>&nbsp;Female<br />
            <button
                onClick={this.onClick}
            >Submit</button>
            {employees === [] ? '' : employees.map((emp, index) => {
                    return this.item(emp.employeeId, 
                                    emp.name,
                                    emp.gender, 
                                    emp.emailId,
                                    index)
                })}
        </div>
    }
}
export default EmployeeByGender