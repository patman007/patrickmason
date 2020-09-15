-- Please find all employees that have a salary greater than 8000, 
-- and those hired after 1996 (use implicit conversion of a date 
-- as a string to the DATE type).
SELECT *
FROM hr.employees
WHERE salary > 8000
--hired after 1996 (use implicit conversion of a date 
-- as a string to the DATE type)
AND hire_date > to_date('31-Dec-1996','DD-Mon-YYYY')
--ORDER BY default sort order is set to Ascending ASC
ORDER BY hire_date;


-- Create a separate query to find the lowest salary in the company 
-- (look for a SQL math function from references or Google search 
-- which allows you find the minimum in a set or a column).
SELECT MIN(salary) 
FROM hr.employees;


-- In the first query you wrote above, please also report the employee's 
-- total compensation (salary + commission, if any) as a percentage of 
-- the minimum salary in the company from the #2 above.
--Final Answer
SELECT employee_id AS "Employee_ID",
        first_name || ' ' || last_name 
        AS "Full Name",
        -- last_name AS "Last Name",
        -- first_name AS "First Name",
        hire_date AS "Hire Date",
        salary AS "Salary",
        commission_pct AS "Commission %",
        --total compensation as a percentage 
        --of minimum salary 10,0000 MIN(salary) 
        TRUNC((salary) + COALESCE(commission_pct, 0),2)/10000 
        AS total_salary    
FROM hr.employees
--hired after 1996 (use implicit 
--conversion of a date 
-- as a string to the DATE type)
WHERE hire_date > to_date('31-Dec-1996','DD-Mon-YYYY')
--ORDER BY default sort order is set to Ascending ASC
ORDER BY hire_date ASC;



--Attempt 1 that does not show total_salary table
SELECT employee_id AS "Employee_ID",
        first_name || ' ' || last_name AS "Full Name",
        -- last_name AS "Last Name",
        -- first_name AS "First Name",
        hire_date AS "Hire Date",
        salary AS "Salary",
        commission_pct AS "Commision %"       
FROM hr.employees
        --total compensation as a percentage 
        --of minimum salary 10,0000 MIN(salary)
WHERE TRUNC(salary + COALESCE(commission_pct, 0)/10000) >
    (SELECT MIN(salary) 
    FROM hr.employees)
--hired after 1996 (use implicit 
--conversion of a date 
-- as a string to the DATE type)    
AND hire_date > to_date('31-Dec-1996', 'DD-MON-YYYY')
ORDER BY hire_date ASC;