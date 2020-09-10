-- Breakout 1
-- 1)   Select all employees who make more than $5000.
SELECT *
FROM employees      
WHERE salary > 5000
ORDER BY salary DESC;


-- 2)   How would you list employees from dept 80?
SELECT department_id,
        last_name,
        first_name
FROM employees
WHERE department_id = 80;


-- 3)   How would you list employees that make more than 8000 in salary and have a manager whose id is NOT 124?
SELECT *
FROM employees      
WHERE salary > 8000
AND manager_id <> 124
ORDER BY last_name ASC;
 

-- 4)  How many people were hired before March 15, 2008?
SELECT job_id, 
        salary,       
        last_name,
        first_name,
        hire_date                
FROM employees
WHERE hire_date < '15-Mar-08'
ORDER BY salary DESC;


-- Research:
-- 5)   How would you list employees whose last name starts with the letter K?  (Hint: try the LIKE function and use % as a wildcard)
SELECT last_name,
        first_name,
        employee_id,
        job_id
FROM employees
WHERE last_name LIKE 'K%'
ORDER BY last_name, first_name DESC;


-- 6)  List employees whose last name starts with F or M.
-- Using the COUNT function:
SELECT COUNT(last_name)       
FROM employees
WHERE last_name LIKE 'F%'
OR last_name LIKE 'M%';


-- 7)   How many employees are there?
SELECT COUNT(*)
FROM employees;

SELECT *
FROM employees;


-- 8)   How many managers are there?
SELECT COUNT(DISTINCT manager_id)
FROM employees;


-- 9)   How many direct reports are there
SELECT last_name,
        first_name,
        manager_id
FROM employees
WHERE manager_id IS NOT NULL
ORDER BY last_name ASC, first_name DESC;

