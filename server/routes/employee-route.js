const express = require('express')
const router = express.Router()

const Employee = require('../models/employee-model');

// Employees list
router.get('/', (req, res) => {
    Employee.find()
    .then(employee => res.json(employee))
    .catch(err => res.status(404).json({ noemployeefound: 'No Employee Profile found' }));
});

// Create a new employee Profile
router.post('/', (req, res) => {
    Employee.create(req.body)
    .then(employee => res.json({ msg: 'Employee added successfully' }))
    .catch(err => res.status(404).json({ error: 'Unable to add this Employee' }));
});

// Retrieve a single employee with id
router.get('/:id',  (req, res) => {
    Employee.findById(req.params.id)
    .then(employee => res.json(employee))
    .catch(err => res.status(404).json({ msg: 'No Employee Profile found' }));
});

// Update a employee with id
router.put('/:id', (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, req.body)
      .then(employee => res.json({ msg: 'Profile Updated successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to update the Database' }));
});

// Delete a employee with id
router.delete('/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, req.body)
      .then(employee => res.json({ mgs: 'Employee Profile deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such Employee Profile' }));
  });

module.exports = router
