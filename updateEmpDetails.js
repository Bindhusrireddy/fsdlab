function updateEmployeeDetails(employee, newRole) {
    return { ...employee, role: newRole };
}

const employee = { name: 'Gangareddy', role: 'farmer', age: 28, location: 'NZB' };
console.log(employee);
const updatedEmployee = updateEmployeeDetails(employee, 'Owner of land');

console.log(updatedEmployee);

