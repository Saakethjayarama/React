import React, {Component} from 'react'
import '../css/DashboardMenu.css'
import { Link } from 'react-router-dom'

class DashboardMenu extends Component{
    br() {
        return <br />
    }
    render() {
        return <div className="menu">
                <button>
                    <Link to="/" className="link">
                        All Employees
                    </Link>
                </button>
                <button>
                    <Link to="/id" className="link">
                        Employee by ID
                    </Link>
                </button>
                <button>
                    <Link to="/gender" className="link">
                        Employee by Gender
                    </Link>
                </button>
                <button>
                    <Link to="/dept" className="link">
                        Employee by Department
                    </Link>
                </button>
                
        </div>
    }
}
export default DashboardMenu