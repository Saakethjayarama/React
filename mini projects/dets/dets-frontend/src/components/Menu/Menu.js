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

function Menu() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <div className="m-icon">
              <AddIcon />
            </div>
            Add Expenses
          </li>
          <li>
            <div className="m-icon">
              <DragHandleIcon />
            </div>
            Manage Expenses
          </li>
          <li>
            <div className="m-icon">
              <TodayIcon />
            </div>
            Daywise Expenses
          </li>
          <li>
            <div className="m-icon">
              <DateRangeIcon />
            </div>
            Monthwise Expenses
          </li>
          <li>
            <div className="m-icon">
              <CalendarTodayIcon />
            </div>
            Yearwise Expenses
          </li>
          <li>
            <div className="m-icon">
              <PersonIcon />
            </div>
            Profile
          </li>
          <li>
            <div className="m-icon">
              <VisibilityOffIcon />
            </div>
            Change Password
          </li>
          <li>
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
