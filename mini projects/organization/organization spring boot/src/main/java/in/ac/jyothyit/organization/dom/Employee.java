package in.ac.jyothyit.organization.dom;

import java.util.Date;

public class Employee
{
	private int employeeId;
	private String name;
	private String gender;
	private String dateOfBirth;
	 
	private String dateOfJoining;
	private int deptNo;
	private String designationId;
	private String managerId;
	private String emailId;
	
	public Employee(int employeeId, String name, String gender, String dateOfBirth, String dateOfJoining,
			int deptNo, String designationId, String managerId, String emailId) {
		super();
		this.employeeId = employeeId;
		this.name = name;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.dateOfJoining = dateOfJoining;
		this.deptNo = deptNo;
		this.designationId = designationId;
		this.managerId = managerId;
		this.emailId = emailId;
	}
	Date date=new Date();
	
	
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDateOfBirth() {
		
		return dateOfBirth;
	}
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getDateOfJoining() {
		return dateOfJoining;
	}
	public void setDateOfJoining(String dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}
	public int getDeptNo() {
		return deptNo;
	}
	public void setDeptNo(int deptNo) {
		this.deptNo = deptNo;
	}
	public String getDesignationId() {
		return designationId;
	}
	public void setDesignationId(String designationId) {
		this.designationId = designationId;
	}
	public String getManagerId() {
		return managerId;
	}
	public void setManagerId(String managerId) {
		this.managerId = managerId;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
}