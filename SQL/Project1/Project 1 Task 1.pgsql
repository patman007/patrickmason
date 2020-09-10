--Project 1 Task 1
-- Please find all employees that have a salary greater than 3000 and less than 4000
-- using AND operator
SELECT employee_id, 
        last_name, 
        first_name,
        job_id,
        salary 
FROM employees
WHERE salary > 30000
AND salary < 40000
ORDER BY salary DESC;

--Project 1 Task 1
-- Please find all employees that have a salary greater than 3000 and less than 4000
-- using BETWEEN operator
SELECT employee_id,
        last_name, 
        first_name,
        job_id,
        salary
FROM hr.employees
WHERE salary BETWEEN 30000 AND 40000
ORDER BY salary DESC;