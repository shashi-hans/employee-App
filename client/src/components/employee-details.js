import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import { fullURL } from '../util';

function ShowEmployeeDetails() {
  const [employee, setEmployee] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showDeletedModal, setShowDeletedModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${fullURL}/${id}`)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch(() => {
        console.log('Error from ShowEmployeeDetails');
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${fullURL}/${id}`)
      .then(() => {
        setShowConfirmModal(false);
        setShowDeletedModal(true);
        setTimeout(() => navigate('/'), 5000);
      })
      .catch(() => {
        console.log('Error from ShowEmployeeDetails_deleteClick');
      });
  };

  return (
    <div className='ShowEmployeeDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Employee List
            </Link>
            <Link
              to='/create-employee'
              className='btn btn-outline-warning float-right'
            >
              + Add New employee
            </Link>
            <br /><br />
          </div>

          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Employee's Record</h1>
            <p className='lead text-center'>View Employee's Info</p>
            <hr /> <br />
          </div>

          <div className='col-md-10 m-auto'>
            <table className='table table-hover table-dark'>
              <tbody>
                <tr><th scope='row'>1</th><td>Name</td><td>{employee.full_name}</td></tr>
                <tr><th scope='row'>2</th><td>Gender</td><td>{employee.gender}</td></tr>
                <tr><th scope='row'>3</th><td>Email</td><td>{employee.email}</td></tr>
                <tr><th scope='row'>4</th><td>Phone</td><td>{employee.phone}</td></tr>
                <tr><th scope='row'>5</th><td>PAN</td><td>{employee.pan}</td></tr>
                <tr><th scope='row'>6</th><td>Organization</td><td>{employee.organization}</td></tr>
                <tr><th scope='row'>7</th><td>Designation</td><td>{employee.designation}</td></tr>
                <tr><th scope='row'>8</th><td>Salary</td><td>{employee.salary}</td></tr>
                <tr><th scope='row'>9</th><td>Address</td><td>{employee.address}</td></tr>
              </tbody>
            </table>
          </div>

          <div className='col-md-6 md5'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => setShowConfirmModal(true)}
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

      {/* Confirm Delete Modal */}
      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Are you sure you want to delete {employee.full_name}'s Profile?</h3>
            <div className="modal-buttons">
              <button className="btn btn-danger" onClick={handleDelete}>Yes, Delete</button>
              <button className="btn btn-secondary" onClick={() => setShowConfirmModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Deleted Modal */}
      {showDeletedModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Employee profile deleted successfully.</h4>
            <p>You will be redirected to the homepage in 5 seconds...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowEmployeeDetails;
