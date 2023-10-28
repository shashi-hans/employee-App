import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowEmployeeDetails(props) {
  const [employee, setemployee] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/employees/${id}`)
      .then((res) => {
        setemployee(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowEmployeeDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:4000/api/employees/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowEmployeeDetails_deleteClick');
      });
  };

  const employeeItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{employee.full_name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Gender</td>
            <td>{employee.gender}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Email</td>
            <td>{employee.email}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Phone</td>
            <td>{employee.phone}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>PAN</td>
            <td>{employee.pan}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Organization</td>
            <td>{employee.organization}</td>
          </tr>
          <tr>
            <th scope='row'>7</th>
            <td>Designation</td>
            <td>{employee.designation}</td>
          </tr>
          <tr>
            <th scope='row'>8</th>
            <td>Salary</td>
            <td>{employee.salary}</td>
          </tr>
          <tr>
            <th scope='row'>9</th>
            <td>Address</td>
            <td>{employee.address}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowEmployeeDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br/> <br/>
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Employee List
            </Link>
          {/* <div className='col-md-11'> */}
            <Link
              to='/create-employee'
              className='btn btn-outline-warning float-right'
            >
              + Add New employee
            </Link>
          {/* </div> */}
          <br/><br/>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Employee's Record</h1>
            <p className='lead text-center'>View Employee's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{employeeItem}</div>
          <div className='col-md-6 md5'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(employee._id);
              }}
            >
              Delete Employee
            </button>
          </div>
          <div className='col-md-6 md5'>
            <Link
              to={`/edit-employee/${employee._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Employee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowEmployeeDetails;