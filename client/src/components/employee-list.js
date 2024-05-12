import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EmployeeCard from './employee-card';
import { fullURL }  from '../util';

function ShowEmployeeList() {
  const [employees, setemployees] = useState([]);
  const [fetchingData, setFetchingData] = useState(true); // State to track if data is being fetched
  let employeeList

  useEffect(() => {
      axios
      .get(fullURL)
      .then((res) => {
        setemployees(res.data);
        setFetchingData(false); // Set fetchingData to false when data is received
      })
      .catch((err) => {
        console.log('Error Showing EmployeeList');
      });
  }, []);

  if(employees.length !== 0) {
   employeeList =
    employees.length === 0
      ? 'No employees Available'
      : employees.map((employee, k) => <EmployeeCard employee={employee} key={k} />);
  }

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
        {fetchingData && 
          <h3> 
            Fetching Data ... 
        </h3>
        }
        <div className='list'>{employeeList}</div>
      </div>
    </div>
  );
}

export default ShowEmployeeList;