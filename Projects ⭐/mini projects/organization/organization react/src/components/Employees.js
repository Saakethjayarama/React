import React, {Component} from 'react'
import '../css/Employees.css'
import host from './config'
import Axios from 'axios'

class Employees extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees : []
        }

        this.getEmployees = this.getEmployees.bind(this)
    }

    getEmployees() {    
        Axios.get(host + "/employee/all")
        .then((res) => {
            this.setState({
                employees: res.data
            })
        })
    }

    componentDidMount() {
        this.getEmployees()
    }

    item(emp_id, name, designation, email, index) {
        return <div className="employee" key={index}>
            <span className="items">{emp_id}</span>
            <span className="items">{name}</span>
            <span className="items">{designation}</span>
            <span className="items">{email}</span>
        </div>
    }

    render () {
        const {employees} = this.state
        return <div className="employees">
            <h3>Employees:</h3>
            {
                employees.map((emp, index) => {
                    return this.item(emp.employeeId, 
                                    emp.name,
                                    emp.designationId, 
                                    emp.emailId,
                                    index)
                })
            }
        </div>
    }
}

export default Employees