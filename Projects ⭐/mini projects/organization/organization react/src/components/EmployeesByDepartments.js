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
            depts_status: [],
            checked_depts: []
        }
        this.getDepartments  = this.getDepartments.bind(this)
        this.getEmployees = this.getEmployees.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    getDepartments() {
        Axios.get(host+'/dept/all')
        .then((res) => {
            let depts = {}
            res.data.forEach(ele => {
                depts[ele.dept_no] = false
            });

            this.setState({
                departments: res.data,
                depts_status: depts
            })
        })
    }

    getEmployees() {
        this.setState({
            employees: []
        })
        let dept_ids = []
        let {depts_status} = this.state

        for (const key in depts_status) {
            dept_ids.push(key)
        }
        let selected_depts = []

        dept_ids.forEach(ele => {
            if(depts_status[ele] === true){
                selected_depts.push(ele)
            }
        });
        selected_depts.forEach(deptId => {
            Axios.get(host+'/employee/dept/'+deptId)
            .then((res) => {
                let new_employees = []
                const {employees} = this.state
                employees.forEach(employee => {
                    new_employees.push(employee)
                });
                res.data.forEach(employee => {
                    new_employees.push(employee)
                });
                this.setState({
                    employees: new_employees
                })
            }) 
        });
    }
    depts(label, value, key) {
        let stat = this.state.depts_status[value]
        return <p key={key} ><input type="checkbox" value={value} name="dept" checked={stat} onChange={this.onChange}/> {label}</p>
    }
    componentDidMount() {
        this.getDepartments()
    }

    onChange(event) {
        const val = event.target.value
        const {depts_status} = this.state
        depts_status[val] = !depts_status[val]
        this.setState({
            depts_status: depts_status
        })
    }

    render() {
        const {departments} = this.state
        const {employees} = this.state
        return <div className="employeesByDepartment">
            Departments: 
                {departments.map((val, index)=>{
                    return this.depts(val.name, val.dept_no, index)
                })}
            &nbsp;&nbsp;
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