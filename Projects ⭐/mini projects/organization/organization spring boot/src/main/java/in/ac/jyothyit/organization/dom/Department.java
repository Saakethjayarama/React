package in.ac.jyothyit.organization.dom;
public class Department
{
	private int dept_no;
	private String name;
	public int getDept_no() {
		return dept_no;
	}
	public void setDept_no(int dept_no) {
		this.dept_no = dept_no;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Department(int dept_no, String name) {
		super();
		this.dept_no = dept_no;
		this.name = name;
	}
}
