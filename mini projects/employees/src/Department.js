import React, {useState} from 'react'
import { Button, Table } from 'react-bootstrap'
import AddDepartmentModal from './AddDepartmentModal';
import Snack from './Snack';


function Department() {

    const [departments, setDepartments] = useState([
        {
            departmentId: 1,
            departmentName: 'CSE'
        },
        {
            departmentId: 2,
            departmentName: 'ISE'
        },
        {
            departmentId: 3,
            departmentName: 'ECE'
        },
        {
            departmentId: 4,
            departmentName: 'ECE'
        },
        {
            departmentId: 5,
            departmentName: 'ME'
        },
        {
            departmentId: 6,
            departmentName: 'CV'
        },
        {
            departmentId: 7,
            departmentName: 'AI&ML'
        },
    ])
    
    const [isShown, setIsShown] = useState(false); 

    const onSubmit = (dName) => {
        
        let depts = departments;
        const lastDept = departments[departments.length-1];
        
        const data = {
                departmentName: dName,
                departmentId: parseInt(lastDept.departmentId) + 1
        }
            
        depts.push(data);

        setDepartments(depts)
        setIsShown(false)
        setOpen(true)        

    }

    const [open, setOpen] = React.useState(false);

    

    const handleSnackClose = (event, reason) => {
        if(reason === 'clickaway')
            return

        setOpen(false);
    };




    return (
        <>
            <Snack onClose={handleSnackClose} open={open}/>
            <AddDepartmentModal show={isShown} onHide = {() => setIsShown(false)} onSubmit={onSubmit}/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Department ID</th>
                        <th>Department Name</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((department, index)=> {
                        return (
                            <tr key={index}>
                                <td>{department.departmentId}</td>
                                <td>{department.departmentName}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Button variant="primary" onClick={() => setIsShown(true)} className="float-right">Add Department</Button>
        </>
    )
}

export default Department
