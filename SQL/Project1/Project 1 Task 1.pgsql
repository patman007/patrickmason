--Project 1 Task 1
-- Please find all employees that have a salary greater than 3000 and less than 4000
-- using AND operator
SELECT employee_id AS "Employee_ID", 
        last_name AS "Last Name", 
        first_name AS "First Name",
        job_id AS "Job_ID",
        salary AS "Salary" 
FROM employees
WHERE salary > 30000
AND salary < 40000
ORDER BY salary DESC;

--Project 1 Task 1
-- Please find all employees that have a salary greater than 3000 and less than 4000
-- using BETWEEN operator
SELECT employee_id AS "Employee_ID",
        last_name AS "Last Name", 
        first_name AS "First Name",
        job_id AS "Job_ID",
        salary AS "Salary"
FROM hr.employees
WHERE salary BETWEEN 30000 AND 40000
ORDER BY salary DESC;