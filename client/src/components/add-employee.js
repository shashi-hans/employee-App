import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddEmployee = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    full_name: '',
    gender: '',
    email: '',
    phone: '',
    pan: '',
    organization: '',
    designation: '',
    salary: '',
    address: '',
  });
  const [errors, setErrors] = useState({
    full_name: '',
    gender: '',
    email: '',
    phone: '',
    pan: '',
    organization: '',
    designation: '',
    salary: '',
    address: '',
  });
  const onChange = (e) => {
    const { name, value } = e.target;

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;
  const panRegex = /^[a-zA-Z]{3}[P|p][a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$/;
  const full_nameRegex =  /^[a-zA-Z ]+$/;
  const addressRegex = /[a-zA-Z0-9\s,./]+$/ ;
  const genderRegex = /^(male|female)$/i;

   // Validate inputs and set error messages
   switch (name) {
    case 'full_name':
      setErrors({ ...errors, full_name:full_nameRegex.test(value) ? '' : 'Full Name is required' });
      break;
    case 'gender':
      setErrors({ ...errors, gender: genderRegex.test(value) ? '' : 'Invalid gender (male or female only)'});
      break;
    case 'email':
      setErrors({...errors,email: emailRegex.test(value) ? '' : 'Invalid email address',});
      break;
    case 'phone':
      setErrors({...errors,phone: phoneRegex.test(value) ? '' : 'Invalid phone number',});
      break;
    case 'pan':
      setErrors({...errors,pan: panRegex.test(value) ? '' : 'Invalid PAN number',});
      break;
    case 'address':
      setErrors({...errors,address: addressRegex.test(value) ? '' : 'Invalid address',});
      break;
    default:
      break;
  }

  // Update employee state
  setEmployee({ ...employee, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let isLengthGreaterThanOne
    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        const value = errors[key];
        isLengthGreaterThanOne = value.length > 1;
    
        console.log(`${key}: ${isLengthGreaterThanOne ? 'Valid' : 'Invalid'}`);
      }
    }
    if(isLengthGreaterThanOne){
      console.log("Employee Profile not created. Please fill correct data and remove errors ")
      console.log(typeof errors)
      }else{
        const apiUrl = process.env.PORT || 4000;
        // Extract the base URL
        const baseURL = `${window.location.protocol}//${window.location.hostname}${(apiUrl ? `:${apiUrl}` : '')}`;

        const endpoint = '/api/employees';
        // Construct the full URL
        const fullURL = `${baseURL}${endpoint}`;

        axios
          .post(fullURL, employee)
          .then((res) => {
            setEmployee({
              full_name: '',
              gender: '',
              email: '',
              phone: '',
              pan: '',
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
    }

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
                  name='full_name'
                  className='form-control'
                  value={employee.full_name}
                  onChange={onChange}
                />
                <span className='error-message'>{errors.full_name}</span>
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
                <span className='error-message'>{errors.gender}</span>
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
                <span className='error-message'>{errors.email}</span>
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
                <span className='error-message'>{errors.phone}</span>
              </div>
              <div className='form-group'>
              <input
                  type='text'
                  placeholder='PAN number'
                  name='pan'
                  className='form-control'
                  value={employee.pan}
                  onChange={onChange}
                />
                <span className='error-message'>{errors.pan}</span>
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
                <span className='error-message'>{errors.address}</span>
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
