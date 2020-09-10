-- Please find all employees that have a salary greater than 8000, 
-- and those hired after 1996 (use implicit conversion of a date 
-- as a string to the DATE type).
SELECT *
FROM hr.employees
WHERE salary > 8000
AND hire_date > '31-Dec-1996'
ORDER BY hire_date ASC;


-- Create a separate query to find the lowest salary in the company 
-- (look for a SQL math function from references or Google search 
-- which allows you find the minimum in a set or a column).
SELECT MIN(salary) 
FROM hr.employees;


-- In the first query you wrote above, please also report the employee's 
-- total compensation (salary + commission, if any) as a percentage of 
-- the minimum salary in the company from the #2 above.
SELECT *
FROM hr.employees
WHERE salary > 
    (SELECT MIN(salary) 
    FROM hr.employees)
AND hire_date > '31-Dec-1996'
ORDER BY hire_date ASC;

