'use strict';
var connectDB = require('../config/db');

//Employee object create
var Employee = function(employee){
  this.name           = employee.name;
  this.email          = employee.email;
  this.phone          = employee.phone;
  this.organization   = employee.organization;
  this.designation    = employee.designation;
  this.salary         = employee.salary;
  this.address        = employee.address;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};
Employee.create = function (newEmp, result) {
connectDB.query("INSERT INTO employees set ?", newEmp, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Employee.findById = function (id, result) {
connectDB.query("Select * from employees where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Employee.findAll = function (result) {
connectDB.query("Select * from employees", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('employees : ', res);
  result(null, res);
}
});
};
Employee.update = function(id, employee, result){
connectDB.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employee.first_name,employee.last_name,employee.email,employee.phone,employee.organization,employee.designation,employee.salary, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Employee.delete = function(id, result){
connectDB.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Employee;