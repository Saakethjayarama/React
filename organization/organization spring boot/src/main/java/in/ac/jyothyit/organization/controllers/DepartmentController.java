package in.ac.jyothyit.organization.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.ac.jyothyit.organization.dao.DepartmentDao;
import in.ac.jyothyit.organization.dao.impl.DepartmentDaoImpl;
import in.ac.jyothyit.organization.dom.Department;

@RestController
@RequestMapping("/dept")
@CrossOrigin(origins = "http://localhost:3000")
public class DepartmentController {
    @RequestMapping("/all")
    public List<Department> getAllDepartments() {
        DepartmentDao dd = new DepartmentDaoImpl();
        return dd.getAllDepartments();
    }
}