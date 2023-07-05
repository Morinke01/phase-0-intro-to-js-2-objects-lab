//Initializing employee object
let employee = {
    
    name: 'Sam',
    
}

 function updateEmployeeWithKeyAndValue(){
  

    const newSet = {...employee};
    newSet.streetAddress = '11 Broadway';
    return newSet;
 }
updateEmployeeWithKeyAndValue();


//Destructively update employee key
function destructivelyUpdateEmployeeWithKeyAndValue(employee){
    employee.streetAddress="12 Broadway";
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee);

//Non-destructive deleting key from a clone of employee
 employee = {
    
    name: 'Sam',
 }
function deleteFromEmployeeByKey(){
    const newEmployee = {...employee}
    delete newEmployee['name'];
    return newEmployee;
    return employee;
}
deleteFromEmployeeByKey();

//Mutating the original employee object
employee = {
    
    name: 'Sam',
 }
function destructivelyDeleteFromEmployeeByKey(){
    delete employee['name'];
    return employee;
}
destructivelyDeleteFromEmployeeByKey();