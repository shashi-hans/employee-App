import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import maleProfileImg from "../img/profile-male.jpg";
import femaleProfileImg from "../img/profile-female.jpg";

const EmployeeCard = (props) => {
    const  employee  = props.employee;
    let img;
   (employee.gender === 'male') ? (img = maleProfileImg) : (img = femaleProfileImg);

    return(
        <div className="card-container">
            <Link to={`/show-employee/${employee._id}`}>
            <div >
                    <img className="desc" src={img} alt="" />
            </div>
            <div >
                <h2>{ employee.full_name }</h2>
                <p>{employee.designation}</p>   
                <h3>{employee.phone}</h3>
            </div>
                </Link>    
        </div>
    )
};

export default EmployeeCard;
