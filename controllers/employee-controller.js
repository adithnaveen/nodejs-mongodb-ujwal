import mongoose from 'mongoose'; 

import {EmployeeSchema} from '../model/employee-model';



const Employee = mongoose.model('Employee', EmployeeSchema); 


export const addNewEmployee = (req, res) => {
    let newEmployee = new Employee(req.body); 
    newEmployee.save((err, employee) => {
        if(err) {
            res.send(err); 
        }
        res.json(employee); 
    })
}

export const getAllEmployees = (req, res) => {
    Employee.find({}, (err, employees) => {
        if(err) {
            res.send(err); 
        }
        res.json(employees); 
    })
}

export const getEmployeeById =(req, res) => {
    Employee.findById(req.params.employeeID, (err, employee) => {
        if(err) {
            res.send(err)
        }
        res.json(employee);
    })
}
