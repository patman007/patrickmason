--Project1 Task 2
--Attempt 1
-- List the employees whose last name is longer 
--than 6 characters.
SELECT *
FROM hr.employees
WHERE LENGTH(last_name) > 6
ORDER BY last_name ASC;

--Boolean Filter alternative
--Using CHAR_LENGTH
SELECT employee_id AS "Employee_ID",
        last_name AS "Last Name", 
        first_name AS "First Name",       
        CHAR_LENGTH(last_name) > 6 
        AS ">6 characters for Last Name" 
FROM hr.employees
WHERE CHAR_LENGTH(last_name) > 6
ORDER BY last_name ASC;


--FINAL ANSWER PROJECT 1 TASK 2
-- In this query, return the first 6 characters of 
--their last names, the jobs they perform and their 
--salary.
--Hint: find appropriate string functions that would 
--help you get this done.
SELECT employee_id AS "Employee_ID",
        last_name AS "Last Name", 
        first_name AS "First Name", 
        job_id AS "Job_ID",
        salary AS "Salary"
FROM hr.employees
WHERE LENGTH(last_name) > 6
ORDER BY last_name ASC;
