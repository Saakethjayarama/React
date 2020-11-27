import React, {Component} from 'react'
import '../css/EmployeesByDepartment.css'
import Axios from 'axios'
import host from './config'

class EmployeeByDepartment extends Component {


    constructor(props) {
        super(props)

        this.state = {
            departments: [],
            employees: [],
            deptId: '10',
        }
        this.getDepartments  = this.getDepartments.bind(this)
        this.getEmployees = this.getEmployees.bind(this)
        this.change = this.change.bind(this)
    }

    getDepartments() {
        Axios.get(host+'/dept/all')
        .then((res) => {
            this.setState({
                departments: res.data
            })
        })
    }

    getEmployees() {
        const{deptId} = this.state
        Axios.get(host+'/employee/dept/'+deptId)
        .then((res) => {
            this.setState({
                employees : res.data
            })
        })
    }
    depts(label, value) {
        return <option value={value}>{label}</option>
    }
    componentDidMount() {
        this.getDepartments()
    }

    change(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
       const {departments} = this.state
       const {employees} = this.state
        return <div className="employeesByDepartment">
            Department: <select name="deptId" onChange={this.change}>
                {departments.map((val, index)=>{
                    return this.depts(val.name, val.dept_no, index)
                })}
            </select>&nbsp;&nbsp;
            <button onClick={this.getEmployees}>Submit</button>
            {employees === [] ? '' : employees.map((emp, index) => {
                    return this.item(emp.employeeId, 
                                    emp.name,
                                    emp.designationId, 
                                    emp.emailId,
                                    index)
                })}
        </div>
    }

    item(emp_id, name, designation, email, index) {
        return <div className="employee" key={index}>
            <span className="items">{emp_id}</span>
            <span className="items">{name}</span>
            <span className="items">{designation}</span>
            <span className="items">{email}</span>
        </div>
    }
}
export default EmployeeByDepartment