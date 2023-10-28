import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EmployeeCard from './employee-card';

function ShowEmployeeList() {
  const [employees, setemployees] = useState([]);

  const employeeList =
    employees.length === 0
      ? 'No employees Available'
      : employees.map((employee, k) => <EmployeeCard employee={employee} key={k} />);
      
  useEffect(() => {
    axios
      .get('http://localhost:4000/api/employees')
      .then((res) => {
        setemployees(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowEmployeeList');
      });
  }, []);

  return (
    <div className='ShowEmployeeList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Employee List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-employee'
              className='btn btn-outline-warning float-right'
            >
              + Add New employee
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{employeeList}</div>
      </div>
    </div>
  );
}

export default ShowEmployeeList;