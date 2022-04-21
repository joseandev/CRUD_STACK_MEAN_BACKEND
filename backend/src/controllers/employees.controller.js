const employeesCtrl = { }
const Employee = require('../models/Employee')

employeesCtrl.getEmployees = async (req, res) => { 
    const employee = await Employee.find()
    res.json(employee)
}

employeesCtrl.createEmployee = async (req, res) => { 
    const newEmployee = new Employee(req.body)

    await newEmployee.save()
    
    res.send({status: 'Employee Created'})
}

employeesCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id)
    res.send(employee)
}

employeesCtrl.updateEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Employee Updated'})
 }

employeesCtrl.deleteEmployee = async (req, res) => { 
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Employee Deleted'})
}

module.exports = employeesCtrl;