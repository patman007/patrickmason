--DISTINCT Example
SELECT department_id
FROM employees;
SELECT DISTINCT department_id
FROM employees;
SELECT DISTINCT department_id, manager_id
FROM employees;

----------------------------------------------------------------------------------

--FILTERING Example
    SELECT employee_id, last_name, salary,
           commission_pct
    FROM   employees
    WHERE  commission_pct IS NOT NULL;

--BOOLEAN FILTERING Example
--Boolean Filtering allows you to retrieve some of the data. 
--For example, if you wished to retrieve commissioned employees 
--OR those with salaries greater than $10000 AND hired after 12/21/98,  
    SELECT employee_id, last_name, salary, hire_date,
           commission_pct
    FROM employees
    WHERE commission_pct IS NOT NULL
     OR (salary > 10000
     AND  hire_date > '31-Dec-98');    
     
--FILTERING Example
--Filtering allows you to retrieve some of the data. 
--For example, if you wished to retrieve only the direct 
--reports of Stephen King (emp id = 100), you may …
SELECT *
 FROM employees
WHERE manager_id = 100;

--------------------------------------------------------------------------------

--INCLASS EXERCISES
--How would you list employees from dept 80?
SELECT department_id,
        last_name,
        first_name
FROM employees
WHERE department_id = 80;

--How would you list employees that make more than 8000 in salary?
SELECT *
FROM employees      
WHERE salary > 8000
AND manager_id <> 124
ORDER BY last_name ASC;

--How would you list employees whole last name starts with the letter K?  
--(Hint: try the LIKE function and use % as a wildcard)
SELECT last_name,
        first_name,
        employee_id,
        job_id
FROM employees
WHERE last_name LIKE 'K%'
ORDER BY last_name, first_name DESC;

-- 1)   How many employees are there?
SELECT COUNT(*)
FROM employees;

SELECT *
FROM employees;

-- 2)   How many managers are there?
SELECT COUNT(DISTINCT manager_id)
FROM employees;


-- 3)   How many direct reports are there
SELECT last_name,
        first_name,
        manager_id
FROM employees
WHERE manager_id IS NOT NULL
ORDER BY last_name ASC, first_name DESC;

-----------------------------------------------

--INCLASS EXERCISES
--1. How many employees are there?
SELECT COUNT(employees)
FROM employees;

SELECT *
FROM employees;

--2. How many managers are there?
SELECT COUNT(DISTINCT manager_id)
FROM employees;
     

--3. How many direct reports are there?
SELECT COUNT(*)
FROM hr.employees
WHERE manager_id IS NOT NULL;

-----------------------------------------------------

--INCLASS EXERCISES
-- List full names, salaries, and commissions 
-- such that everyone gets at least 10% commission.  
-- Those that currently get commission, get an 
-- extra 10% boost
SELECT first_name,
        last_name,
        salary,
        commission_pct,
COALESCE(commission_pct, 0) + 0.10
FROM employees LIMIT 10;   

--Single Row Example
SELECT last_name,
EXTRACT(YEAR FROM hire_date) AS "Hire Year"
FROM employees WHERE job_id = 'MK_Rep';

-----------------------------------------------------

--INCLASS EXERCISES
--List the maximum salary paid by each JOB_ID:
SELECT job_id, MAX(salary) FROM employees
GROUP BY job_id;

--GROUP BY example 1
--Count how many employees are there in each department?
SELECT department_id,
COUNT(department_id)
FROM hr.employees
GROUP BY department_id;

--GROUP BY example 2
--Count how many employees are there in each job id?
SELECT
   job_id,
   COUNT(job_id)
FROM employees
GROUP BY
   job_id;

--------------------------------------------------------

--SORTING EXAMPLES
--User ORDER BY column1, column2 to sort the results. For example,
SELECT last_name, first_name, job_id, salary
FROM employees
ORDER BY last_name ASC, first_name DESC;


--SORTING Example 1
--Select locations ordering them by city?
SELECT city, state_province 
FROM locations
ORDER BY city;

--SORTING Example 2
--Selet locations, ordering them by postal_code
SELECT city, postal_code, state_province
FROM hr.locations
ORDER BY postal_code;

--------------------------------------------------------------

--CASE Examples Lecture 1
--Write a query that lists employees as “Full Name” 
--and shows their seniority as follows:
--hired before 2001, show "Senior employee"
--hired between 2001-2007, show "Mid employee"
--hired after 2007, show "Junior employee"
--hired after 2007, show "Junior employee"
--hire date is null, show "Unknown"
SELECT first_name || ' ' || last_name as "Full Name",
       hire_date,
   CASE
       WHEN EXTRACT(year FROM hire_date) < 2001 THEN 'Senior Employee'
       WHEN EXTRACT(year FROM hire_date) BETWEEN 2001 AND 2007 THEN 'Mid Employee'
       WHEN EXTRACT(year FROM hire_date) > 2007 THEN 'Junior Employee'
       ELSE 'Unknown'
   END as "Seniority"
FROM employees;


--ATTEMPT 1
--hired before 2001, show "Senior employee"
SELECT last_name, first_name, hire_date, job_id
FROM employees
WHERE hire_date < '01-Jan-2001'
AND job_id LIKE 'AD%';

--hired between 2001-2007, show "Mid employee"
SELECT last_name, first_name, hire_date, job_id
FROM employees
WHERE hire_date BETWEEN '01-Jan-2001'AND '31-Dec-2007'
AND job_id LIKE 'AD%';

--hired after 2007, show "Junior employee"
SELECT last_name, first_name, hire_date, job_id
FROM employees
WHERE hire_date > '31-Dec-2007';

--hire date is null, show "Unknown"
SELECT *
FROM employees
WHERE hire_date IS NULL;

-------------------------------------------------------------------

--RESTRICT Examples
--Example 1
--Select all rows for employees in department 110
SELECT *
FROM hr.employees
WHERE department_id = 110;

--Example 2
--Select all rows for employees with last name 'King'
SELECT *
FROM hr.employees
WHERE last_name = 'King';

--Example 3
--Select all rows for employees with last name starts with  'King'
SELECT *
FROM hr.employees
WHERE last_name LIKE 'King%';

--------------------------------------------------------------------

--PRESIDENT's PREFERENCE Examples
-- If there are folks who were hired in the company in the month of June in any year, 
--or have worked for at least 20 years, place them on top of the list.
-- Hence, please create another query where 
-- Filter those who have been with the company for more than 20 years, or
-- Filter those who have been hired in the month of June (hint: can you splice out 
--the month from hire_date?)
-- Create a list, such that it does not include Stephen
-- Also show hire date in a human friendly date format.
SELECT first_name || ' ' || last_name AS full_name,
       to_char(hire_date, 'Mon-DD-YYYY')
FROM employees
WHERE ((EXTRACT(year FROM CURRENT_DATE) -
   EXTRACT(year FROM hire_date) > 20)
   OR EXTRACT(month FROM hire_date) = 6)
   AND job_id <> 'AD_PRES';

--------------------------------------------------------------------------

 --SUBQUERIES Example 1
 --Find the employees that make greater than the average salary in the company.
SELECT employee_id, first_name
 FROM employees
WHERE salary >=
  (SELECT AVG(salary)
   FROM employees);


 --SUBQUERIES Example 2
 --Find the employees that make greater than the average salary in their departments.
--Attempt 1 
SELECT employee_id, 
      last_name, 
      first_name, 
      department_id
 FROM employees
WHERE salary >=
  (SELECT AVG(salary)
   FROM employees);
  
--Correct Way
SELECT first_name, last_name, salary, department_id
FROM employees e1
WHERE salary > (
     SELECT avg(salary) FROM employees e2
     WHERE e1.department_id = e2.department_id
     GROUP BY e2.department_id
);

--SUGQUERIES Example 3
-- List first names of all employees who work in Seattle, Washington.
-- 	Hints: 
-- find all the departments in Seattle.
-- find all the employees in those departments.
-- use sub-queries
SELECT first_name || ' ' || last_name AS emp_name, 
       department_id 
FROM hr.employees 
WHERE department_id IN 
     (SELECT department_id 
        FROM departments 
       WHERE location_id IN 
          (SELECT location_id 
             FROM locations 
            WHERE city = 'Seattle'));


--JOINS Example introduction
--Find all the departments that are located in the United Kingdom.
SELECT department_name
FROM departments
INNER JOIN locations 
ON departments.location_id = locations.location_id
WHERE country_id = 'UK';

------------------------------------------------------------------

--JOINS Examples
--LEFT JOIN Example
SELECT 
   e.first_name, 
   d.department_name
FROM      employees e 
LEFT JOIN departments d
   ON e.department_id = d.department_id;


--FULL JOIN Example
SELECT d.department_name   AS DEPT_NAME,
       e.first_name        AS F_NAME,
       e.job_id            AS JOB_ID
FROM      employees e 
FULL JOIN departments d
 ON       e.department_id = d.department_id;


--JOIN Example
--*** 22 rows because Stephen Davies has no dept_id ***
SELECT d.department_name   AS DEPT_NAME,
      e.first_name        AS F_NAME,
      e.last_name,
      e.job_id            AS JOB_ID,
      e.department_id
FROM   employees e
   JOIN departments d
       ON  e.department_id = d.department_id;


--LEFT JOIN Example
--*** LEFT JOIN returns 24 rows because it includes 
--unmatched rows of left table so NOW Stephen Davies 
--is included!!! ***
SELECT d.department_name   AS DEPT_NAME,
      e.first_name        AS F_NAME,
      e.last_name,
      e.job_id            AS JOB_ID
FROM   employees e
   LEFT JOIN departments d
       ON  e.department_id = d.department_id;


--RIGHT JOIN Example
--*** RIGHT JOIN returns 24 rows because there are 3 
--depts (210, 500, and 10) that do not have first names 
--and job ids attached ***
SELECT d.department_name   AS DEPT_NAME,
      e.first_name        AS F_NAME,
      e.job_id            AS JOB_ID,
      e.department_id
FROM   employees e
   RIGHT JOIN departments d
       ON  e.department_id = d.department_id;


--JOIN Example 6
--Provide sales data from PRODUCTS and SALES in the 
--following form
SELECT to_char(saledate, 'MM/DD/YYYY') AS SALE_DATE,
   description AS PRODUCT_NAME,
   amount AS SALE_AMOUNT
FROM sales s
   JOIN products p
       ON p.productid = s.productid;


--JOIN Example 7
--Provide players data in the form
--first,  last,  height,  weight,  team
--Alter above query to include players who have 
--not been drafted
SELECT
 p.fname AS first_name,
 p.lname AS last_name,
 p.height,
 p.weight,
 t.name
FROM
 players p
 LEFT JOIN teams t
   on t.id = p.team_id;


--CROSS JOIN Example
SELECT first_name, department_name
     FROM employees, departments;


--SELF JOIN Example 1
SELECT employee_id, first_name, last_name, manager_id
FROM employees
ORDER BY employee_id;     


--SELF JOIN Example 2 refer back here for code correction
--Please list all employees and their managers by their full names,
SELECT e.first_name || ' ' || e.last_name "Employee",
      m.first_name || ' ' || m.last_name "Manager"
FROM employees e JOIN employees m ON (e.manager_id = m.employee_id);


--SELF JOIN Example 3
--Please list all employees and their managers by their full names, 
--as follows. This includes employees who don't have an assigned 
--manager.
SELECT e.first_name || ' ' || e.last_name "Employee",
      m.first_name || ' ' || m.last_name "Manager"
FROM employees e JOIN employees m ON (e.manager_id = m.employee_id);

-----------------------------------------------------------------

--LECTURE 2 Start
-- List all countries that are within Europe, from our hr database.
-- Steps: Write a SELECT statement to list all regions from the db. 
--What query would you write to do it?
SELECT region_id, region_name
FROM regions;

--Write another SELECT statement to list ALL countries.
SELECT country_name, region_id
FROM countries;

-- Now write a SELECT statement, filtering by the region id for Europe.
-- SELECT * FROM countries WHERE region_id = ___;
SELECT region_id, country_name
FROM countries
WHERE region_id = 1;

--List all employees who earn more than $6000.  Display them sorted 
--by their pay.
-- Hints:
-- Write a SELECT statement to list all employees.  Review the columns and data. 
--This provides you with clues on how to write the final query.
SELECT *
FROM employees;

-- Now create a filter for the data where you only list those that make $6000 and higher. 
--Hint: The SQL operator to use is >=
SELECT last_name, first_name, salary
FROM employees
WHERE salary >= 6000;

-- Now create a list of employees sorted by their salary. Hint: use ORDER BY
SELECT last_name, first_name, salary
FROM employees
WHERE salary >= 6000
ORDER BY salary DESC;

------------------------------------------------------------------------------------

--WILDCARD Examples
-- List all employees who have a last name of "Fay".
SELECT * FROM employees WHERE last_name = 'Fay';

-- How can you make the search case insensitive?
-- Hint: What if your search criterion had a condition where both left 
--and right side values were converted to lowercase?  How would you accomplish that?
SELECT * FROM employees WHERE lower(last_name) = lower('Fay');

--Can you write a query that lists all employees who make more than $3500 and their 
--last name starts with the letter "H"
-- Hint: Find a way to use string wildcards in SQL. 
SELECT * FROM employees WHERE lower(last_name) like
'h%' AND salary >= 3500;

-----------------------------------------------------------------------------------

--REMOVE DUPLICATES and FILTER
-- List the jobs that people hold in this company.  Make sure that you don't list 
--a job twice.  Hint: use DISTINCT.
SELECT DISTINCT(job_id)
FROM employees;

-- List the percentage commission that sales people are given in this company.  
--List the commission percentages once only.
SELECT last_name, first_name, commission_pct, job_id
FROM hr.employees
WHERE commission_pct >= 0
AND job_id LIKE 'SA%';

-- List employees who are managers (look for "MAN" in their jobs) or work in IT 
--(look for "IT" in their jobs) and have a salary more than $5000.
SELECT first_name, job_id FROM employees
WHERE 1=1
AND
(JOB_ID LIKE '%MAN%' OR JOB_ID LIKE '%IT%')
AND salary >= 5000;

-- In the above query, exclude anyone who is in Administration department.
SELECT first_name, job_id FROM employees
WHERE 1=1
AND
(JOB_ID LIKE '%IT%')
AND salary >= 5000;

----------------------------------------------------------------------------------

--INSERT Example
-- Look up an example of an insert and add an employee with the following details
-- 	names: 		Use your names
-- 	email: 		Your email
-- 	phone: 		Make one up
-- 	hiredate: 	Today (look for a way to put server's time)
-- 	job: 			'IT_PROG'
-- 	salary:		Name your price
-- 	commission: Name your rate
-- 	manager: 	Stephen King (find his manager_id first)
-- 	department: 	Information Technology (find the department_id first)
INSERT INTO hr.employees(
   employee_id,
   first_name,
   last_name,
   email,
   phone_numeric,
   hire_date,
   job_id,
   salary,
   commission_pct,
   manager_id,
   department_id
) VALUES (
   280,
   'Patrick',
   'Mason',
   'PMASON',
   '555-1212',
   current_date,
   'IT_PROG',
   5000,
   NULL,
   100,
   60
);

--DELETE Example
DELETE FROM hr.employees WHERE last_name = 'Mason';

SELECT *
FROM employees;

---------------------------------------------------------------------------------

--NULLS Examples
-- List all employees who do not make a commission (use IS NULL).
SELECT last_name, first_name, commission_pct
FROM hr.employees
WHERE commission_pct IS NULL;

-- List all commissioned employees (use IS NOT NULL).
SELECT last_name, first_name, commission_pct
FROM hr.employees
WHERE commission_pct IS NOT NULL;

-- List any employees who has not been assigned a department.
SELECT last_name, first_name, department_id
FROM hr.employees
WHERE department_id IS NULL;

-- List any employees who do not have a manager.
SELECT last_name, first_name, manager_id
FROM hr.employees
WHERE manager_id IS NULL;

-----------------------------------------------------------------------------------

--LIMIT Example
-- Write a query that lists the 5 highest salaried employees in the company.
-- What if the requirement was …
SELECT last_name, first_name, salary, job_id
FROM hr.employees
ORDER BY salary DESC
LIMIT 5;

---------------------------------------------------------------------------------

--DATES and SORTING Examples
--Example 1
-- Write a query that lists all employees with the following columns
-- firstname lastname
-- how many days has the employee been employed 
-- (hint: use DATE_PART('dd', endDate-startDate) formula).
select first_name, last_name, 
(current_date - hire_date) days
FROM hr.employees
order by days desc
fetch first 5 rows only;

--SORTING AND DATES Example 2
-- Sort the results by days since hired.
-- Display the 5 employees with the highest seniority 
-- (hint: remember to select from a query with limit 5 as we did earlier)
Select *
from
  (select
     first_name, last_name,
     rank() over (order by hire_date desc) as seniority
  from
     employees) subquery
where seniority <= 5;

--SORTING and DATES Example 3
-- Write a query that lists all employees who joined the company 
-- between Aug 2007 and Aug 2009 (both included). 
-- (hint: use the between operator)
select first_name, last_name, hire_date
from hr.employees
-- here using implicit conversion
where hire_date between '8/1/2007' and '9/1/2009';

--------------------------------------------------------------------------------
