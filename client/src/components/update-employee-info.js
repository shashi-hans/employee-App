import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { fullURL } from '../util';

function UpdateEmployeeInfo(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    full_name: '',
    gender: '',
    phone: '',
    email: '',
    pan: '',
    salary: '',
    designation: '',
    organization: '',
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

  // Change Employee data
  const onChange = (e) => {
    const { name, value } = e.target;
  
    switch (name) {
      case 'full_name':
        setErrors({ ...errors, full_name:/^[a-zA-Z ]+$/.test(value) ? '' : 'Full Name is required' });
        break;
      case 'gender':
        setErrors({ ...errors, gender: /^(male|female)$/.test(value) ? '' : 'Invalid gender (male or female only)'});
        break;
      case 'email':
        setErrors({...errors,email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address',});
        break;
      case 'phone':
        setErrors({...errors,phone: /^[6-9]\d{9}$/.test(value) ? '' : 'Invalid phone number',});
        break;
      case 'pan':
        setErrors({...errors,pan: /^[a-zA-Z]{3}[P|p][a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$/.test(value) ? '' : 'Invalid PAN number',});
        break;
      case 'address':
        setErrors({...errors,address: /[a-zA-Z0-9\s,./]+$/.test(value) ? '' : 'Invalid address',});
        break;
      default:
        break;
    }
  
    // Update employee state
    setEmployee({ ...employee, [name]: value });
    };
    
  // Fetch employee data on component mount
  useEffect(() => {
    axios
      .get(`${fullURL}/${id}`)
      .then((res) => {
        setEmployee({
          full_name: res.data.full_name,
          gender: res.data.gender,
          phone: res.data.phone,
          email: res.data.email,
          pan: res.data.pan,
          salary: res.data.salary,
          designation: res.data.designation,
          organization: res.data.organization,
          address:res.data.address,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateEmployeeInfo');
      });
  }, [id,fullURL]);

  const onSubmit = (e) => {
    e.preventDefault();
    let isLengthGreaterThanOne
    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        const value = errors[key];
        isLengthGreaterThanOne = value.length > 1;
        if (isLengthGreaterThanOne) break
      }
    }
    if(isLengthGreaterThanOne){
      alert("Employee Profile not updated. Please fill correct data and remove errors ")
      }else{
    const data = {
      full_name: employee.full_name,
      gender: employee.gender,
      phone: employee.phone,
      email: employee.email,
      pan: employee.pan,
      salary: employee.salary,
      designation: employee.designation,
      organization: employee.organization,
      address:employee.address,
    };

    axios
      .put(`${fullURL}/${id}`, data)
      .then((res) => {
        navigate(`/show-employee/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateEmployeeInfo!');
      });
    }
  };

  return (
    <div className='UpdateEmployeeInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show employee List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Employee</h1>
            <p className='lead text-center'>Update Employee's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='full_name'>Name</label>
              <input
                type='text'
                placeholder='full_name of the employee'
                name='full_name'
                className='form-control'
                value={employee.full_name}
                onChange={onChange}
              />
              <span className='error-message'>{errors.full_name}</span>
            </div>
            <div className='form-group'>
              <label htmlFor='gender'>Gender</label>
              <input
                type='text'
                placeholder='gender of the employee'
                name='gender'
                className='form-control'
                value={employee.gender}
                onChange={onChange}
              />
              <span className='error-message'>{errors.gender}</span>
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone</label>
              <input
                type='text'
                placeholder='phone'
                name='phone'
                className='form-control'
                value={employee.phone}
                onChange={onChange}
              />
              <span className='error-message'>{errors.phone}</span>
            </div>
            <div className='form-group'>
              <label htmlFor='pan'>PAN number</label>
              <input
              type='text'
              placeholder='Pan Number'
              name='pan'
              className='form-control'
              value={employee.pan}
              onChange={onChange}
              />
              <span className='error-message'>{errors.pan}</span>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                placeholder='email'
                name='email'
                className='form-control'
                value={employee.email}
                onChange={onChange}
              />
              <span className='error-message'>{errors.email}</span>
            </div>
            <div className='form-group'>
              <label htmlFor='salary'>Salary</label>
              <input
                type='text'
                placeholder='salary of the employee'
                name='salary'
                className='form-control'
                value={employee.salary}
                onChange={onChange}
              />
              <span className='error-message'>{errors.salary}</span>
            </div>
            <div className='form-group'>
              <label htmlFor='designation'>Designation</label>
              <input
                type='text'
                placeholder='designation'
                name='designation'
                className='form-control'
                value={employee.designation}
                onChange={onChange}
              />
              <span className='error-message'>{errors.designation}</span>
            </div>
            <div className='form-group'>
              <label htmlFor='organization'>Organization</label>
              <input
                type='text'
                placeholder='organization of the employee'
                name='organization'
                className='form-control'
                value={employee.organization}
                onChange={onChange}
              />
              <span className='error-message'>{errors.organization}</span>
            </div>
            <div className='form-group'>
              <label htmlFor='address'>Address</label>
              <input
                type='text'
                placeholder='Address of the employee'
                name='address'
                className='form-control'
                value={employee.address}
                onChange={onChange}
              />
              <span className='error-message'>{errors.address}</span>
            </div>
            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployeeInfo;