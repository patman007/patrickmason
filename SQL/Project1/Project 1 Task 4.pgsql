--Project 1 Task 4 Part 1
-- List the full names and their department names of the all employees 
--in the "bootcamp" database. 
--Does NOT INCLUDE Null Values for department name
SELECT e.first_name || ' ' || e.last_name AS "Full Name",
        d.department_name AS "Department"              
FROM employees e
LEFT JOIN departments d
    ON e.department_id = d.department_id
WHERE d.department_id IS NOT NULL;


--Does INCLUDE Null Values for department name
SELECT e.first_name || ' ' || e.last_name AS "Full Name",
        d.department_name AS "Department"              
FROM employees e
LEFT JOIN departments d
    ON e.department_id = d.department_id;


--Alternative Way
--Using Subqueries instead of Joins to display only department_id
SELECT first_name || ' ' || last_name AS "Full Name",
        department_id                     
FROM hr.employees
WHERE department_id IN
    (SELECT department_id
        FROM departments
        WHERE department_id IS NOT NULL);


--Project 1 Task 4 Part 2
--Do the same for the employees that work 
--for department "Sales". Order the results by hiring date 
--with the most recent hires at the top.
SELECT e.first_name || ' ' || e.last_name AS "Full Name",
        e.hire_date AS "Hire Date",
        d.department_name AS "Department"                       
FROM employees e, departments d 
WHERE d.department_name = 'Sales'
ORDER BY e.hire_date DESC;

--Alternative Way SUBQUERY
--Using Subqueries instead of Joins to display only department_id
SELECT first_name || ' ' || last_name AS "Full Name",
        department_id,
        hire_date                     
FROM hr.employees
WHERE department_id IN
    (SELECT department_id
        FROM departments
        WHERE department_id = 80)
        ORDER BY hire_date DESC;

-- Hint: you may NOT look up the department_id of "Sales", but use the 
--text "Sales" in the query. Do something like ... WHERE department_name = 'Sales'
-- What you would expect to see is somthing like this:

--          Full Name     |    Department    
--     -------------------+------------------
--      Lex De Haan       | Executive
--      Susan Mavris      | Human Resources
--      William Gietz     | Accounting
--      Hermann Baer      | Public Relations
--      Shelley Higgins   | Accounting
--      Daniel Faviet     | Finance


--Alternative Way JOIN
--Using LEFT JOIN lookup table with department_id using Sales in the query
--Not suggested way to do it
SELECT e.first_name || ' ' || e.last_name AS "Full Name",
        e.hire_date AS "Hire Date",
        d.department_name AS "Department"               
FROM employees e
LEFT JOIN departments d
    ON e.department_id = d.department_id
WHERE d.department_id IS NOT NULL
AND d.department_name = 'Sales'
ORDER BY e.hire_date DESC;
