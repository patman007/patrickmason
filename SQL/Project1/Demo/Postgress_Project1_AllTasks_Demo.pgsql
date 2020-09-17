-- 1)
-- using AND
SELECT * FROM employees WHERE salary > 3000 AND salary < 4000;

-- using BETWEEN
SELECT * FROM employees WHERE salary BETWEEN 3000 AND 4000;




-- 2)
-- finds employees with last_name longer than six characters and then displays
-- query starting with ONLY the first 6 letters of last_name
SELECT
  LEFT(last_name, 6) AS "Last Name (first 6 letters)",
  job_id AS "Job Position",
  salary AS "Salary"
FROM employees
WHERE char_length(last_name) > 6;




-- 3)
-- employees hired after 1996 with salary greater than $8000
SELECT
  last_name,
  first_name,
  to_char(hire_date, 'DD-Mon-YYYY') AS "Hire Date",
  salary
FROM  employees
WHERE salary > 8000
  AND hire_date > '12/12/1996';

-- query for the lowest salary only
SELECT
  MIN(salary) AS "Lowest Salary"
FROM employees;

-- total compensation of employees making over $8000 AND hired after 1996 as a percent of min salary
SELECT
  last_name,
  first_name,
  to_char(hire_date, 'DD-Mon-YYYY') AS "Hire Date",
  salary,
-- forces commission_pct to 0 if null
  salary * coalesce(commission_pct, 0) AS "Total Commission",
-- adds result of salary * commission_pct to salary for a final total compensation
  salary + salary * coalesce(commission_pct, 0)  AS "Total Comp",
-- divides total compensation by the min salary of company displayed to 2 decimal precision
  ROUND((salary + salary * coalesce(commission_pct, 0))/
    (SELECT
      MIN(salary)
    FROM employees) * 100, 2) AS "% of Company Min Salary"
FROM employees
WHERE salary > 8000
  AND hire_date > '31-Dec-1996';




-- 4)
SELECT
  CONCAT(first_name, ' ', last_name) AS "Full Name", -- concatenates for full name
  department_name AS "Department",
  to_char(hire_date, 'MON-DD-YYYY') as "Hire Date"
-- sets employees table to alias e
FROM employees e
-- sets departments table to alias d and JOINS to employees table
JOIN departments d
--   uses ON to join employees table to departments table using department_id
ON e.department_id = d.department_id
-- orders the results by hire date
ORDER BY hire_date DESC;


SELECT
  CONCAT(first_name, ' ', last_name) AS "Full Name", -- concatenates for full name
  department_name AS "Department",
  to_char(hire_date, 'MON-DD-YYYY') as "Hire Date"
-- sets employees table to alias e
FROM employees e
-- sets departments table to alias d and JOINS to employees table
JOIN departments d
--   uses ON to join employees table to departments table using department_id
ON e.department_id = d.department_id
-- specifically calls for only the Sales department
WHERE department_name = 'Sales'
-- orders the results by hire date
ORDER BY hire_date DESC;




-- 5)
-- no matter from which tables, all SELECTS go here
SELECT
  first_name AS "FIRST",
  last_name AS "LAST",
  email AS "EMAIL",
  department_name AS "DEPT",
  city AS "CITY"
FROM employees e
-- joins employees table wth departments table using department id
JOIN departments d
  ON e.department_id = d.department_id
-- joins locations table with departments table using location id
JOIN locations l
  ON l.location_id = d.location_id
-- only returns data where dept name is Executive
WHERE department_name = 'Executive';




-- 6)
-- Shows ALL employees with their dept, city and manager
-- no matter from which tables, all SELECTS go here
SELECT
  emp.first_name AS "FIRST",
  emp.last_name AS "LAST",
  emp.email AS "EMAIL",
  mgr.first_name AS "MANAGER",
  department_name AS "DEPT",
  city AS "CITY"
FROM employees emp
-- left join needed to catch any unmatched rows
-- in this case King has mgr id of 146 - there is NO emp id 146 so no match
LEFT JOIN employees mgr
  ON (mgr.employee_id = emp.manager_id)
-- joins employees table wth departments table using department id
JOIN departments d
  ON (emp.department_id = d.department_id)
-- joins locations table with departments table using location id
JOIN locations l
  ON (l.location_id = d.location_id)
-- only displays executives
WHERE department_name = 'Executive';



-- Shows ALL employees with their dept, city and manager
-- no matter from which tables, all SELECTS go here
SELECT
  emp.first_name AS "FIRST",
  emp.last_name AS "LAST",
  emp.email AS "EMAIL",
  mgr.first_name AS "MANAGER",
  department_name AS "DEPT",
  city AS "CITY"
FROM employees emp
-- need left joins on all three joins due to null values
LEFT JOIN employees mgr
  ON (mgr.employee_id = emp.manager_id)
-- joins employees table wth departments table using department id
LEFT JOIN departments d
  ON (emp.department_id = d.department_id)
-- joins locations table with departments table using location id
LEFT JOIN locations l
  ON (l.location_id = d.location_id)
ORDER BY "DEPT" NULLS FIRST;




-- 7)
SELECT
-- extracts just the year from the hire date and assigns alias
  EXTRACT(year FROM hire_date) AS year_of_hiring,
-- counts the extracts of years from hire date
  COUNT(EXTRACT(year FROM hire_date))
FROM employees
-- groups by hire_date alias
GROUP BY year_of_hiring
-- instead of where clause, use having clause to set conditions
HAVING COUNT(EXTRACT(year FROM hire_date)) > 1
-- orders by hire_date alias
ORDER BY year_of_hiring;
