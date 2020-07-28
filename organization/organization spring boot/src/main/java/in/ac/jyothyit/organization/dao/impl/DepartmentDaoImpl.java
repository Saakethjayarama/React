package in.ac.jyothyit.organization.dao.impl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;


import in.ac.jyothyit.organization.dao.DepartmentDao;
import in.ac.jyothyit.organization.dom.Department;
import in.ac.jyothyit.organization.utils.jdbcUtitilies;

public class DepartmentDaoImpl implements DepartmentDao {

    @Override
    public List<Department> getAllDepartments() {
        Connection connection = null;
        Statement statement = null;
        ResultSet resultSet = null;

        String sql = "select * from departments";

        List<Department> departments = new ArrayList<>();
        Department department = null;

        try {
            connection = jdbcUtitilies.getConnection("organization");
            statement = connection.createStatement();
            resultSet = statement.executeQuery(sql);
            while(resultSet.next()) {
                department = new Department(resultSet.getInt("dept_no"), resultSet.getString("name"));
                departments.add(department);
            }
        }catch (SQLException sqle) {
            System.out.println(sqle);
        }

        return departments;
    }
    
}