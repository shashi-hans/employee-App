import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateEmployeeInfo(props) {
  const [employee, setemployee] = useState({
    name: '',
    phone: '',
    email: '',
    salary: '',
    designation: '',
    organization: '',
    address: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/employees/${id}`)
      .then((res) => {
        setemployee({
          name: res.data.name,
          phone: res.data.phone,
          email: res.data.email,
          salary: res.data.salary,
          designation: res.data.designation,
          organization: res.data.organization,
          address:res.data.address,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateEmployeeInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setemployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: employee.name,
      phone: employee.phone,
      email: employee.email,
      salary: employee.salary,
      designation: employee.designation,
      organization: employee.organization,
      address:employee.address,
    };

    axios
      .put(`http://localhost:4000/api/employees/${id}`, data)
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
            <h1 className='display-4 text-center'>Edit employee</h1>
            <p className='lead text-center'>Update employee's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>name</label>
              <input
                type='text'
                placeholder='name of the employee'
                name='name'
                className='form-control'
                value={employee.name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='phone'>phone</label>
              <input
                type='text'
                placeholder='phone'
                name='phone'
                className='form-control'
                value={employee.phone}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='email'>email</label>
              <input
                type='text'
                placeholder='email'
                name='email'
                className='form-control'
                value={employee.email}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='salary'>salary</label>
              <textarea
                type='text'
                placeholder='salary of the employee'
                name='salary'
                className='form-control'
                value={employee.salary}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='designation'>designation</label>
              <input
                type='text'
                placeholder='designation'
                name='designation'
                className='form-control'
                value={employee.designation}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='organization'>organization</label>
              <input
                type='text'
                placeholder='organization of the employee'
                name='organization'
                className='form-control'
                value={employee.organization}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='address'>address</label>
              <input
                type='text'
                placeholder='address of the employee'
                name='address'
                className='form-control'
                value={employee.address}
                onChange={onChange}
              />
            </div>
            <br />

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