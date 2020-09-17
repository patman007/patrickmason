--PROJECT 1 TASK 3 PART 1
-- Please find all employees that have a salary greater than 8000, 
-- and those hired after 1996 (use implicit conversion of a date 
-- as a string to the DATE type).
--FINAL ANSWER 1 PART 1
SELECT first_name,
        last_name,
        to_char(hire_date, 'DD-Mon-YYYY') 
        AS "Hire Date"
FROM hr.employees
WHERE salary > 8000
--hired after 1996 (use implicit conversion of a date 
-- as a string to the DATE type)
AND hire_date >'12/12/1996'
--ORDER BY default sort order is set to Ascending ASC
ORDER BY hire_date;



-- FINAL ANSWER TASK 3 Alternate Way 2
-- With CASE AND EXTRACT YEAR
-- Please find all employees that have a salary greater than 8000, 
-- and those hired after 1996 (use implicit conversion of a date 
-- as a string to the DATE type).
SELECT first_name,
        last_name, 
        salary,
CASE    
        WHEN EXTRACT(YEAR FROM hire_date) > 1997 
        THEN 'Hired AFTER 1997' 
                ELSE 'Hired BEFORE 1997'
END AS "HIRED"
FROM hr.employees
WHERE salary > 8000
AND hire_date >'31-Dec-1996'
ORDER BY hire_date;



--FINAL ANSWER TASK 3 Alternate Way 3
--With to_date() NOT THE Best one to use
--Attempt 2 with to_date conversion
-- Please find all employees that have a salary greater than 8000, 
-- and those hired after 1996 (use implicit conversion of a date 
-- as a string to the DATE type).
SELECT first_name,
        last_name,
        salary,
        hire_date
FROM hr.employees
WHERE salary > 8000
--hired after 1996 (use implicit conversion of a date 
-- as a string to the DATE type)
AND to_date('01/01/1997', 'DD/MM/YYYY') < hire_date
--ORDER BY default sort order is set to Ascending ASC
ORDER BY hire_date;



--FINAL ANSWER TASK 4 Alternate Way 4
-- with EXTRACT YEAR and to_date
-- Please find all employees that have a salary greater than 8000, 
-- and those hired after 1996 (use implicit conversion of a date 
-- as a string to the DATE type).
SELECT first_name,
        last_name,
        salary,
        EXTRACT(YEAR FROM hire_date) 
        AS "Hire Year"         
FROM hr.employees
WHERE salary > 8000
--hired after 1996 (use implicit conversion of a date 
-- as a string to the DATE type)
AND to_date('01/01/1997', 'mm/dd/yyyy') < hire_date
--ORDER BY default sort order is set to Ascending ASC
ORDER BY hire_date;


---------------------------------------------------------------------

--PROJECT 1 TASK 3 PART 2
-- Create a separate query to find the lowest salary in the company 
-- (look for a SQL math function from references or Google search 
-- which allows you find the minimum in a set or a column).
SELECT MIN(salary) 
FROM hr.employees;


-----------------------------------------------------------------------

--FINAL ANSWER
--PROJECT 1 TASK PART 3
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
        100 * ROUND((salary) + COALESCE(commission_pct, 0),2)/10000 
        AS total_salary    
FROM hr.employees
--hired after 1996 (use implicit 
--conversion of a date 
-- as a string to the DATE type)
WHERE hire_date > to_date('31-Dec-1996','DD-Mon-YYYY')
--ORDER BY default sort order is set to Ascending ASC
ORDER BY hire_date ASC;

---------------------------------------------------------------------


--Attempt 1 Not the right answer
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