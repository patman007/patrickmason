--Project 1 Task 4 Part 1
-- List the full names and their department names of the all employees 
--in the "bootcamp" database. 
-- SELECT * 
-- FROM hr.departments;

-- SELECT * 
-- FROM hr.locations;

-- SELECT *
-- FROM hr.employees;

--List full names, department names,cities
SELECT d.department_name, e.first_name, e.last_name, l.city 
    FROM locations l 
    JOIN departments d 
        USING (location_id)
        JOIN employees e
        ON e.department_id = d.department_id
        ORDER BY l.city;

--Does NOT INCLUDE Null Values for department name
--22 rows
SELECT e.first_name || ' ' || e.last_name AS "Full Name",
        d.department_name AS "Department"              
FROM employees e
LEFT JOIN departments d
    ON e.department_id = d.department_id
WHERE d.department_id IS NOT NULL;


--Does INCLUDE Null Values for department name
--24 rows
SELECT e.first_name || ' ' || e.last_name AS "Full Name",
        d.department_name AS "Department"              
FROM employees e
LEFT JOIN departments d
    ON e.department_id = d.department_id;


--Project 1 Task 4 Part 2
--List the full names and their department names of the 
--all employees in the "bootcamp" database. 
--Do the same for the employees that work 
--for department "Sales". Order the results by hiring date 
--with the most recent hires at the top.

-- SELECT * 
-- FROM hr.departments;

-- SELECT *
-- FROM hr.employees;

--FINAL ANSWER JOIN
--Using LEFT JOIN lookup table with department_id using Sales in the query
SELECT e.first_name || ' ' || e.last_name AS "Full Name",         
        e.hire_date AS "Hire Date",
        d.department_name AS "Department"                       
FROM employees e
LEFT JOIN departments d
    ON e.department_id = d.department_id
WHERE d.department_name = 'Sales'
ORDER BY e.hire_date DESC;


--Alternative Way SUBQUERY
--Using Subqueries without Joins to display only department_id
SELECT first_name || ' ' || last_name AS "Full Name",
        hire_date AS "Hire Date",
        department_id AS "Department"                     
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

--Alternative Way Attempt 1 Not Right Answer
--Using Subqueries instead of Joins to display only department_id
SELECT e.first_name || ' ' || e.last_name AS "Full Name",
        e.hire_date AS "Hire Date",
        d.department_name AS "Department"                       
FROM employees e, departments d 
WHERE d.department_name = 'Sales'
ORDER BY e.hire_date DESC;



--Alternative Way Attempt 2 Not Rigt Answer
--Using Subqueries instead of Joins to display only department_id
SELECT first_name || ' ' || last_name AS "Full Name",
        department_id                     
FROM hr.employees
WHERE department_id IN
    (SELECT department_id
        FROM departments)
        ORDER BY hire_date DESC;

--Same thing as right above
SELECT first_name || ' ' || last_name AS "Full Name",
        department_id                     
FROM hr.employees
WHERE department_id IN
    (SELECT department_id
        FROM departments
        WHERE department_id IS NOT NULL)
ORDER BY hire_date DESC;
