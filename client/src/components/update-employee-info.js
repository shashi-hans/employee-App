import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateEmployeeInfo(props) {
  const [employee, setemployee] = useState({
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

  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = process.env.PORT || 4000;
  // Extract the base URL
  const baseURL = `${window.location.protocol}//${window.location.hostname}${(apiUrl ? `:${apiUrl}` : '')}`;
  const endpoint = '/api/employees';
  // Construct the full URL
  const fullURL = `${baseURL}${endpoint}`;

  useEffect(() => {
    axios
      .get(`${fullURL}/${id}`)
      .then((res) => {
        setemployee({
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

  const onChange = (e) => {
    setemployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

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