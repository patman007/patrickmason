--Project1 Task 2
-- List the employees whose last name is longer 
--than 6 characters.
SELECT *
FROM hr.employees
WHERE LENGTH(last_name) > 6
ORDER BY last_name ASC;

--Boolean Filter alternative
SELECT  employee_id,
        last_name, 
        first_name,       
        CHAR_LENGTH(last_name) > 6 
        AS More_than_6_last_name_characters
FROM hr.employees
ORDER BY last_name ASC;

-- In this query, return the first 6 characters of 
--their last names, the jobs they perform and their 
--salary.
--Hint: find appropriate string functions that would 
--help you get this done.
SELECT employee_id,
        last_name, 
        first_name, 
        job_id,
        salary
FROM hr.employees
WHERE LENGTH(last_name) > 6
ORDER BY last_name ASC;
