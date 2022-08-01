SELECT department.department_name AS name, employee.first_name
FROM employee
LEFT JOIN department
ON employee.department_id = employee.id