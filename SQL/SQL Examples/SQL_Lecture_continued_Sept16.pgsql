SELECT first_name, last_name, department_name
FROM employees LEFT JOIN hr.departments
USING (department_id);

SELECT employee_id, first_name, last_name,
    department_id
FROM employees; 

-- UPDATE employees SET employeed_id = NULL
-- WHERE employee_id = 1;

-- Try the following requests for data:
-- Provide players data in the form
-- first,  last,  height,  weight,  team
-- Alter above query to include players 
--who have not been drafted
SELECT * FROM teams;
--JOIN EXAMPLE
SELECT 
    fname as first,
    lname as last,
    height,
    weight, 
    team_id,
    t.name as team
FROM players p JOIN teams t
ON t.id = p.team_id;

--LEFT JOIN EXAMPLE
SELECT 
    fname as first,
    lname as last,
    height,
    weight, 
    team_id,
    t.name as team
FROM players p LEFT JOIN teams t
ON t.id = p.team_id;

--FULL JOIN EXAMPLE
SELECT 
    fname as FIRST,
    lname as LAST,
    height,
    weight, 
    team_id,
    t.name as team
FROM players p FULL JOIN teams t
ON t.id = p.team_id
ORDER BY team NULLs FIRST;

-----------------------------------------------------
-----------------------------------------------------

--SELF JOIN Example 1
SELECT employee_id, first_name, last_name, manager_id
FROM employees
ORDER BY employee_id;


--SELF JOIN Example 2
--Correct to use for Task
SELECT emp.first_name, emp.last_name AS "Employee",
       mgr.first_name, mgr.last_name AS "Manager"
FROM employees emp 
LEFT JOIN employees mgr 
  ON (emp.manager_id = mgr.employee_id);


--SELF JOIN Merged columns 
SELECT emp.first_name||' '||emp.last_name AS "Employee",
       mgr.first_name||' '||mgr.last_name AS "Manager"
FROM employees emp 
LEFT JOIN employees mgr 
  ON (emp.manager_id = mgr.employee_id)
  ORDER BY 2 NULLS FIRST;


--Please list all employees and their cities 
--where they are located.
--FINAL ANSWER
--IN CLASS EXAMPLE
SELECT emp.first_name||' , '||emp.last_name 
    AS "Employee",
    dept.department_name, 
    --COALESCE will show null values 
    --with Location unknown
    COALESCE (loc.city, 'Location unknown') 
    AS "City"
FROM employees AS emp 
LEFT JOIN hr.departments dept
    ON emp.department_id = dept.department_id
LEFT JOIN hr.locations loc
--either matches or is null is what a LEFT JOIN 
    ON loc.location_id = dept.location_id 
ORDER BY emp.last_name;


--ATTEMPT 1 
--Please list all employees and their cities 
--where they are located.
SELECT e.first_name,
        e.last_name,
        d.department_name,
        l.city,
        l.country_id
FROM employees e
LEFT JOIN departments d 
    ON(e.manager_id = d.manager_id)
LEFT JOIN locations l
    ON(d.location_id = l.location_id)
    ORDER BY e.last_name; 

--ATTEMPT 2
--Please list all employees and their cities 
--where they are located.
--Please order by their last names.
SELECT e.first_name,
        e.last_name,
        d.department_name,
        l.city,
        l.country_id
FROM employees e
JOIN departments d 
    ON(e.manager_id = d.manager_id)
JOIN locations l
    ON(d.location_id = l.location_id)
    ORDER BY e.last_name; 
		

