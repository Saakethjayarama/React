package in.ac.jyothyit.organization.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import in.ac.jyothyit.organization.dao.EmployeeDao;
import in.ac.jyothyit.organization.dao.impl.EmployeeDaoImpl;
import in.ac.jyothyit.organization.dom.Employee;
import in.ac.jyothyit.organization.exceptions.EmployeeNotFoundException;

@RestController
@RequestMapping(value = "/employee")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @RequestMapping("/test")
    public String test() {
        return "It is working";
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Employee> getAllEmployees() {
        EmployeeDao ed = new EmployeeDaoImpl();
        return ed.getAllEmployees();
    }

    @RequestMapping(value = "/id/{id}", method = RequestMethod.GET)
    public Employee getEmployeeById(@PathVariable int id) {
        EmployeeDao ed = new EmployeeDaoImpl();
        try {
            return ed.search(id);
        } catch (EmployeeNotFoundException e) {
            System.out.println("EmployeeNotFound");
            return null;
        }
    }

    @RequestMapping(value = "/gender/{g}")
    public List<Employee> employeesByGender(@PathVariable("g")  String gender) {
        EmployeeDao ed = new EmployeeDaoImpl();
        return ed.getEmployeeByGender(gender);
    }

    @RequestMapping(value = "/name/like/{name}")
    public List<Employee> getEmployeesByNameLike(@PathVariable("name") String name) {
        EmployeeDao ed = new EmployeeDaoImpl();
        return ed.getEmployeeLike(name);
    }

    @RequestMapping(value = "/dept/{id}")
    public List<Employee> getEmployeesByDepartmentId(@PathVariable("id") String id) {
        EmployeeDao ed = new EmployeeDaoImpl();
        return ed.getEmployeeByDeptNo(new String[] {id});
    }
    
}