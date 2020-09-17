--Lecture slides continued 
SELECT salenumber, saledate FROM sales;

----------------------------------------------------------
--DATE TIME STAMP
SELECT current_timestamp;

SELECT CURRENT_DATE + 7*30 
AS "Date ~ 7 Months Later";

--Defining 7 months later for sure and good 
--to do for a contract
SELECT CURRENT_DATE + INTERVAL '7' MONTH 
AS "Date 7 Months Later";

--Calculate how many days have you lived?
SELECT CURRENT_DATE - to_date('10/25/1987', 'mm/dd/yyyy')
AS num_days_lived;

--Calculate the total company
--Use for Task 3
SELECT first_name || ' ' || last_name, 
    TRUNC(salary + salary * COALESCE(commission_pct, 0), 2)
FROM employees;

--Calculate how many days have an employee worked?
--Current day is a built in function not in 
SELECT first_name, last_name, current_date - hire_date 
FROM employees;

--------------------------------------------------------------------

--use for Task 5
-- List full names of all employees who work in Seattle, Washington.
-- 	Hints: 
-- find all the departments in Seattle.
-- find all the employees in those departments.
-- use sub-queries
SELECT * 
FROM hr.departments;

SELECT * 
FROM hr.locations;

SELECT *
FROM hr.employees;

--Sub Query
Select first_name, last_name
FROM hr.employees
WHERE department_id IN (
    SELECT department_id 
    FROM hr.departments
    WHERE location_id IN (
        SELECT location_id
        FROM hr.locations
        WHERE upper(city) LIKE upper('%seattle%')));

--Joins Discussion
SELECT * FROM hr.products;

SELECT * from sales;

--Come back and fix SubQuery
SELECT products.productid, description, --Products table_schema
        salenumber, amount, sales.productid --sales table
FROM sales AS s JOIN products AS
ON sales.productid = hr.products.productid;        

--------------------------------------------------------------------

--3-WAY Joins Examples
-- List all employees (first last), their departments 
-- and cities, that work in the US.
SELECT * FROM locations;

SELECT * FROM employees;

SELECT * FROM hr.departments;

-- 3-WAY JOIN Example 1
SELECT d.* 
    FROM locations l 
    JOIN departments d 
        USING (location_id)
        JOIN employees e
        ON e.department_id = d.department_id;

--3-WAY JOIN Example 2
SELECT e.first_name || e.last_name,
    l.city,l.country_id, department_name
    FROM locations l
        JOIN departments d  
            ON l.location_id = d.location_id
        JOIN employees e
            ON e.department_id = d.department_id
        WHERE country_id = 'US';

--JOIN Example use full, right, and left join
SELECT    
   d.department_name,
    e.first_name
FROM      employees e 
JOIN departments d --ONLY MATCHING EMPS AND DEPTS
   ON e.department_id = d.department_id;


SELECT    
   d.department_name,
    e.first_name
FROM      employees e 
FULL JOIN departments d --ALL EMPS AND ALL DEPTS
   ON e.department_id = d.department_id;


SELECT    
   d.department_name,
    e.first_name
FROM      employees e 
LEFT JOIN departments d --ALL EMPS
   ON e.department_id = d.department_id;


SELECT    
   d.department_name,
    e.first_name
FROM      employees e 
RIGHT JOIN departments d --ALL DEPTS
   ON e.department_id = d.department_id;

------------------------------------------------------------------

--How would we check how many people work from the company
SELECT COUNT(*) FROM employees;

-----------------------------------------------------------------

SELECT *
FROM employees JOIN hr.departments
USING (department_id);


