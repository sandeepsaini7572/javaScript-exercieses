let employees = [
  { empId: 1, empName: "Sathesh", empSalary: 65000 },
  { empId: 3, empName: "Anil", empSalary: 45000 },
  { empId: 2, empName: "Harish", empSalary: 45000 },
  { empId: 4, empName: "Krishna", empSalary: 55000 },
  { empId: 5, empName: "Mohan", empSalary: 85000 },
];

employees.sort(function (a, b) {
  if (a.empSalary === b.empSalary) {
    return a.empName.localeCompare(b.empName);
  }
  return a.empSalary - b.empSalary;
});

console.log(employees);
