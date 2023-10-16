import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import img from "../img/profile-male.jpg"

const EmployeeCard = (props) => {
    const  employee  = props.employee;

    return(
        <div className="card-container">
            <div >
                <Link to={`/show-employee/${employee._id}`}>
                    <img className="desc" src={img} alt="" />
                </Link>    
            </div>
            <div >
                <h2>{ employee.name }</h2>
                <h3>{employee.phone}</h3>
                <p>{employee.designation}</p>   
            </div>
        </div>
    )
};

export default EmployeeCard;
