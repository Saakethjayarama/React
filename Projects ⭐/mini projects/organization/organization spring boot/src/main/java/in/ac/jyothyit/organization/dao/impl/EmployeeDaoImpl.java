package in.ac.jyothyit.organization.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import in.ac.jyothyit.organization.dao.EmployeeDao;

import in.ac.jyothyit.organization.dom.Employee;
import in.ac.jyothyit.organization.exceptions.EmployeeNotFoundException;
import in.ac.jyothyit.organization.utils.jdbcUtitilies;

public class EmployeeDaoImpl implements EmployeeDao
{

	@Override
	public List<Employee> getAllEmployees() {
		System.out.println("OranizationDaoImpl.getAllEmployee()....enterred");
		Connection connection=null;
		Statement statement=null;
		ResultSet resultSet=null;
		Employee employee=null;
		List<Employee> employeeList=new ArrayList<Employee>();
		String sql="select * from employees";
		try
		{
			connection=jdbcUtitilies.getConnection("organization");
			statement=connection.createStatement();
			resultSet=statement.executeQuery(sql);
			while(resultSet.next())
           {
	        
				employee=new Employee(resultSet.getInt("employee_id"),resultSet.getString("name"),resultSet.getString("gender"),resultSet.getString("date_of_birth"),resultSet.getString("date_of_joining"),resultSet.getInt("dept_no"),resultSet.getString("designation_id"),resultSet.getString("manager_id"),resultSet.getString("email_id"));
			employeeList.add(employee);
           }
		}
		catch(SQLException sqle)
		{
			System.out.println("organizationDaoImpl.getAllemployee() :" + sqle);
			
		}
		finally
		{
			jdbcUtitilies.closeStatement(statement);
			jdbcUtitilies.closeConnection(connection);
		}
		
		System.out.println("no of rows:" + employeeList.size());
		return employeeList;
	
	}

	@Override
	public Employee search(int id) throws EmployeeNotFoundException {
		System.out.println("organizationDaoImpl.search()....enterred");
		Connection connection=null;
		PreparedStatement preparedStatement=null;
		ResultSet resultSet=null;
		Employee employee=null;
		String sql="select * from employees where employee_id=?";
		try
		{
			connection=jdbcUtitilies.getConnection("Organization");
			preparedStatement=connection.prepareStatement(sql);
			preparedStatement.setInt(1,id);
			resultSet=preparedStatement.executeQuery();
			if(!resultSet.next())
				throw  new EmployeeNotFoundException();
			
			employee=new Employee(resultSet.getInt("employee_id"),
					resultSet.getString("name"),
					resultSet.getString("gender"),
					resultSet.getString("date_of_birth"),
					resultSet.getString("date_of_joining"),
					resultSet.getInt("dept_no"),
					resultSet.getString("designation_id"),
					resultSet.getString("manager_id"),
					resultSet.getString("email_id"));
		
		}
		catch(SQLException sqle)
		{
			System.out.println("organizationDaoImpl.search() :" + sqle);
			
		}
		finally
		{
			jdbcUtitilies.closeStatement(preparedStatement);
			jdbcUtitilies.closeConnection(connection);
		}
		System.out.println("name="+employee.getName());
		
		return employee;
		
	}

	@Override
	public List<Employee> getEmployeeByGender(String gender) {
		System.out.println("organizationDaoImpl.getEmployeeByGender()....enterred");
		System.out.println("----------gender = "+ gender);
		Connection connection=null;
		PreparedStatement preparedStatement=null;
		ResultSet resultSet=null;
		List<Employee> employeeList=new ArrayList<Employee>();
		Employee employee=null;		
		String sql="select * from employees where gender=?";
		try
		{
			connection=jdbcUtitilies.getConnection("organization");
			preparedStatement=connection.prepareStatement(sql);
			preparedStatement.setString(1,gender);
			resultSet=preparedStatement.executeQuery();
			
			while(resultSet.next())
			{
			employee=new Employee(resultSet.getInt("employee_id"),resultSet.getString("name"),resultSet.getString("gender"),resultSet.getString("date_of_birth"),resultSet.getString("date_of_joining"),resultSet.getInt("dept_no"),resultSet.getString("designation_id"),resultSet.getString("manager_id"),resultSet.getString("email_id"));
			employeeList.add(employee);
			}
		}
		catch(SQLException sqle)
		{
			System.out.println("organizationDaoImpl.search()      :" + sqle);
			
		}
		finally
		{
			jdbcUtitilies.closeStatement(preparedStatement);
			jdbcUtitilies.closeConnection(connection);
		}
		System.out.println("------hello------");
		System.out.println("organizationDaoImpl.getEmployeeByGender() size"+employeeList.size());
		return employeeList;
		
	}

	@Override
	public List<Employee> getEmployeeByDeptNo(String[] deptNo) {
System.out.println("organizationDaoImpl.getEmployeeByDeptNo()....enterred");
		
		Connection connection=null;
		Statement preparedStatement=null;
		ResultSet resultSet=null;
		List<Employee> employeeList=new ArrayList<Employee>();
		Employee employee=null;
		System.out.println(deptNo);
		int l=deptNo.length;
		String fixed="select * from employees where ";
		String variable="";
		for(int i=0;i<l;i++)
		{
			if(i==0)
			{
				variable=variable+"dept_no="+deptNo[i];
			}
			else
			{
				variable=variable+" or "+"dept_no="+deptNo[i];
			}
		}
		System.out.println(variable);
		fixed=fixed+variable;
		System.out.println(fixed);
		 
		
		try
		{
			connection=jdbcUtitilies.getConnection("organization");
			preparedStatement=connection.createStatement();
				
			resultSet=preparedStatement.executeQuery(fixed);
			while(resultSet.next())
			{
			employee=new Employee(resultSet.getInt("employee_id"),resultSet.getString("name"),resultSet.getString("gender"),resultSet.getString("date_of_birth"),resultSet.getString("date_of_joining"),resultSet.getInt("dept_no"),resultSet.getString("designation_id"),resultSet.getString("manager_id"),resultSet.getString("email_id"));
			employeeList.add(employee);
			}
		}
		catch(SQLException sqle)
		{
			System.out.println("organizationDaoImpl.employeeByDept() :" + sqle);
			
		}
		finally
		{
			jdbcUtitilies.closeStatement(preparedStatement);
			jdbcUtitilies.closeConnection(connection);
		}
		System.out.println(employeeList.size());
		return employeeList;
		
	}

	@Override
	public List<Employee> getEmployeeLike(String name) {
		System.out.println("employeeDaoImpl.getEmployeeLike().......entered");
		Connection connection=null;
		Statement statement=null;
		ResultSet resultSet=null;
		List<Employee> employeeList=new ArrayList<Employee>();
		Employee employee=null;	
		String sql="select * from employees where name like \'" +name+ "%\'";
		
		try
		{
			connection=jdbcUtitilies.getConnection("organization");
		    statement=connection.createStatement();
			
			resultSet=statement.executeQuery(sql);
			while(resultSet.next())
			{
			employee=new Employee(resultSet.getInt("employee_id"),
					resultSet.getString("name"),
					resultSet.getString("gender"),
					resultSet.getString("date_of_birth"),
					resultSet.getString("date_of_joining"),
					resultSet.getInt("dept_no"),
					resultSet.getString("designation_id"),
					resultSet.getString("manager_id"),
					resultSet.getString("email_id"));
			employeeList.add(employee);
			}
		}
		catch(SQLException sqle)
		{
			System.out.println("organizationDaoImpl.getEmployeeLikeByDept() :" + sqle);
			
		}
		finally
		{
			jdbcUtitilies.closeStatement(statement);
			jdbcUtitilies.closeConnection(connection);
		}
		System.out.println(sql);
		System.out.println("size of this is"+employeeList.size());
		return employeeList;
		
		
	}

	@Override
	public Employee insertEmployee(Employee employee) {
		System.out.println("organizationDaoImpl.InsertEmployee()....enterred");
		
		Connection connection=null;
		PreparedStatement preparedStatement=null;
	
		int eid=employee.getEmployeeId();
		String name=employee.getName();
		String dob=employee.getDateOfBirth();
		String gender=employee.getGender();
		String doj=employee.getDateOfJoining();
		int depno=employee.getDeptNo();
		String desid=employee.getDesignationId();
		String mid=employee.getManagerId();
		String email=employee.getEmailId();
		String sql="insert into employees values(?,?,?,?,?,?,?,?,?)";
		try
		{
			connection=jdbcUtitilies.getConnection("organization");
			preparedStatement=connection.prepareStatement(sql);
			preparedStatement.setInt(1,eid);
			preparedStatement.setString(2,name);
			preparedStatement.setString(3,gender);
			preparedStatement.setString(4,dob);
			preparedStatement.setString(5,doj);
			preparedStatement.setInt(6,depno);
			preparedStatement.setString(7,desid);
			preparedStatement.setString(8,mid);
			preparedStatement.setString(9,email);
			int rows=preparedStatement.executeUpdate();
			System.out.println(sql);
			if(rows==1)
			{
				System.out.println("inserted");
			}
			else
			{
				System.out.println("not inserted");
			}
				
				
			
			
		}
		catch(SQLException sqle)
		{
			System.out.println("organizationDaoImpl.EmployeeInsert()      :" + sqle);
			
		}
		finally
		{
			jdbcUtitilies.closeStatement(preparedStatement);
			jdbcUtitilies.closeConnection(connection);
		}
		return null;
	
		
		
		
	}

	@Override
	public void deleteEmployee(int eid) throws EmployeeNotFoundException
	{
		
		System.out.println("organizationDaoImpl.EmployeeDelete()....enterred");
		
		Connection connection=null;
		PreparedStatement preparedStatement=null;
		
			
		String sql="delete from employees where employee_id=?";
		try
		{
			connection=jdbcUtitilies.getConnection("organization");
			preparedStatement=connection.prepareStatement(sql);
			preparedStatement.setInt(1,eid);
			int n=preparedStatement.executeUpdate();
			
			if(n==1)
			{
				System.out.println("deletion sucessfull");
			}
			else
			{
				System.out.println("deletion unsucessfull");
			}
			throw new EmployeeNotFoundException();
		}
		catch(SQLException sqle)
		{
			System.out.println("organizationDaoImpl.search()      :" + sqle);
			
		}
		finally
		{
			jdbcUtitilies.closeStatement(preparedStatement);
			jdbcUtitilies.closeConnection(connection);
		}
		
	}

	@Override
	public void employeeUpdate(int eid,String email) throws EmployeeNotFoundException {
System.out.println("organizationDaoImpl.EmployeeUpdate()....enterred");
		
		Connection connection=null;
		PreparedStatement preparedStatement=null;
		
			
		String sql="update employees set email_id=? where employee_id=?";
		try
		{
			connection=jdbcUtitilies.getConnection("organization");
			preparedStatement=connection.prepareStatement(sql);
			preparedStatement.setString(1,email);
			preparedStatement.setInt(2,eid);
			int n=preparedStatement.executeUpdate();
			
			if(n==1)
			{
				System.out.println("update sucessfull");
			}
			else
			{
				System.out.println("update unsucessfull");
			}
			throw new EmployeeNotFoundException();
		}
		catch(SQLException sqle)
		{
			System.out.println("organizationDaoImpl.search()      :" + sqle);
			
		}
		finally
		{
			jdbcUtitilies.closeStatement(preparedStatement);
			jdbcUtitilies.closeConnection(connection);
		}
		
	}
	
}