
package in.ac.jyothyit.organization.dao;

import in.ac.jyothyit.organization.dom.Employee;
import in.ac.jyothyit.organization.exceptions.EmployeeNotFoundException;

import java.util.List;


public interface EmployeeDao
{
	public List<Employee> getAllEmployees();
	public Employee search(int id) throws EmployeeNotFoundException;
	public List<Employee> getEmployeeByGender(String gender);
	public List<Employee> getEmployeeByDeptNo(String[] deptNo);
	public List<Employee> getEmployeeLike(String name);
	public Employee insertEmployee(Employee employee);
	public void deleteEmployee(int eid) throws EmployeeNotFoundException;
	public void employeeUpdate(int eid,String email) throws EmployeeNotFoundException;
}