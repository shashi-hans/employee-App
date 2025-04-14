import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EmployeeCard from './employee-card';
import { fullURL } from '../util';

function ShowEmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);
  const [error, setError] = useState(null); // ✅ Error state
  let employeeList;

  useEffect(() => {
    axios
      .get(fullURL)
      .then((res) => {
        // Sort employees by createdAt descending
        const sortedEmployees = res.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setEmployees(sortedEmployees);
        setFetchingData(false);
      })
      .catch((err) => {
        setError("Failed to fetch employee data. Please try again later."); // ✅ Set error
        setFetchingData(false);
      });
  }, []);

  if (employees.length !== 0) {
    employeeList =
      employees.length === 0
        ? 'No employees Available'
        : employees.map((employee, k) => (
            <EmployeeCard employee={employee} key={k} />
          ));
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

        {fetchingData && (
          <div className='loading-container'>
            Fetching Data
            <span className='dot dot1'>.</span>
            <span className='dot dot2'>.</span>
            <span className='dot dot3'>.</span>
          </div>
        )}

        {/* ✅ Error Modal */}
        {error && (
          <div className='error-modal'>
            <div className='error-content'>
              <h4>Error</h4>
              <p>{error}</p>
              <button className='btn btn-danger' onClick={() => setError(null)}>
                Close
              </button>
            </div>
          </div>
        )}

        <div className='list'>{employeeList}</div>
      </div>
    </div>
  );
}

export default ShowEmployeeList;
