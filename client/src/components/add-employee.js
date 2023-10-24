import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddEmployee = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [employee, setemployee] = useState({
    name: '',
    gender: '',
    email: '',
    phone: '',
    organization: '',
    designation: '',
    salary: '',
    address: '',
  });

  const onChange = (e) => {
    setemployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/api/employees', employee)
      .then((res) => {
        setemployee({
          name: '',
          gender: '',
          email: '',
          phone: '',
          organization: '',
          designation: '',
          salary: '',
          address: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in Adding Employee!');
      });
  };

  return (
    <div className='AddEmployee'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Employee List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Employee</h1>
            <p className='lead text-center'>Create new Employee Profile</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  className='form-control'
                  value={employee.name}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Gender'
                  name='gender'
                  className='form-control'
                  value={employee.gender}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Email'
                  name='email'
                  className='form-control'
                  value={employee.email}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Phone'
                  name='phone'
                  className='form-control'
                  value={employee.phone}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Organization Name'
                  name='organization'
                  className='form-control'
                  value={employee.organization}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Designation'
                  name='designation'
                  className='form-control'
                  value={employee.designation}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Salary'
                  name='salary'
                  className='form-control'
                  value={employee.salary}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Communication Address'
                  name='address'
                  className='form-control'
                  value={employee.address}
                  onChange={onChange}
                />
              </div>
              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
