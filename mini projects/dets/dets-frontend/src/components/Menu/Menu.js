import React from "react";
import "./Menu.css";

// Material ui icons
import AddIcon from "@material-ui/icons/Add";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import TodayIcon from "@material-ui/icons/Today";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

// react router dom
import { useHistory } from "react-router-dom";

function Menu() {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  };

  const handleLogout = () => {
    console.log("logged out");
  };

  return (
    <div className="Menu">
      <nav>
        <ul>
          <li
            onClick={() => {
              handleClick("/add");
            }}
          >
            <div className="m-icon">
              <AddIcon />
            </div>
            Add Expenses
          </li>
          <li
            onClick={() => {
              handleClick("/manage");
            }}
          >
            <div className="m-icon">
              <DragHandleIcon />
            </div>
            Manage Expenses
          </li>
          <li
            onClick={() => {
              handleClick("/day");
            }}
          >
            <div className="m-icon">
              <TodayIcon />
            </div>
            Daywise Expenses
          </li>
          <li
            onClick={() => {
              handleClick("/month");
            }}
          >
            <div className="m-icon">
              <DateRangeIcon />
            </div>
            Monthwise Expenses
          </li>
          <li
            onClick={() => {
              handleClick("/year");
            }}
          >
            <div className="m-icon">
              <CalendarTodayIcon />
            </div>
            Yearwise Expenses
          </li>
          <li
            onClick={() => {
              handleClick("/profile");
            }}
          >
            <div className="m-icon">
              <PersonIcon />
            </div>
            Profile
          </li>
          <li
            onClick={() => {
              handleClick("/change");
            }}
          >
            <div className="m-icon">
              <VisibilityOffIcon />
            </div>
            Change Password
          </li>
          <li onClick={handleLogout}>
            <div className="m-icon">
              <LockIcon />
            </div>
            Logout
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;