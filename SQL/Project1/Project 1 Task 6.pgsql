--To the above query from Task 5, 
--add the manager's first name to the column list.
-- SELECT * 
-- FROM hr.departments;

-- SELECT * 
-- FROM hr.locations;

-- SELECT *
-- FROM hr.employees;

--FINAL ANSWER PROJECT 1 TASK 6 
--24 records
--JOIN table sequence 
--EMPLOYEES (Self Join) -> DEPARTMENTS -> LOCATION 
--List first, last name, email, 
--department names, manager first name, and city of all employees
SELECT e.first_name AS "FIRST", 
        e.last_name AS "LAST",
        e.email AS "EMAIL", 
        mgr.first_name AS "MANAGER",
        d.department_name AS "DEPT",
        l.city AS "CITY",
        l.country_id AS "COUNTRY" 
    FROM employees e
    --SELF JOIN to Manager and 
    --Employee in Employee table
    LEFT JOIN employees mgr
        ON e.manager_id = mgr.employee_id
    --LEFT JOINS (outer Joins) to Department 
    --and Locations Tables want the nulls 
    LEFT JOIN departments d 
        ON e.department_id = d.department_id
        LEFT JOIN locations l
            ON d.location_id = l.location_id
        ORDER BY mgr.first_name DESC;  

-- Hint: add a self join to the EMPLOYEES table all 
--over again giving it a different alias.

-- Make changes so that all 22 employees are listed 
--(for this requirement, think about using outer joins. 
--You may wait till we have covered outer joins in class.)


-- What you would expect to see is something similar to this:

-- FIRST      LAST       EMAIL      MANAGER    DEPT       CITY
-- ---------- ---------- ---------- ---------- ---------- ----------
-- Neena      Kochhar    nkocchar   Steven     Executive  Seattle
-- Lex        De Haan    ldehaan    Steven     Executive  Seattle
-- Seely      Bruce      bman       Steven     Executive  Seattle
-- Stephen    Noyce      snoyce     Steven     Executive  Seattle


--Alternative ANSWER PROJECT 1 TASK 6
--21 records
--JOIN table sequence 
--EMPLOYEES (Self Join) -> DEPARTMENTS -> LOCATION 
--List first, last name, email, 
--department names, and city of all employees
SELECT emp.first_name|| ' '||emp.last_name 
        AS "FULL NAME",
        emp.email AS "EMAIL", 
        mgr.first_name|| ' '||mgr.last_name 
        AS "MANAGER FULL NAME",
        d.department_name AS "DEPT",
        l.city AS "CITY"       
    FROM employees emp
    --SELF JOIN to Manager and 
    --Employee in Employee table
    LEFT JOIN employees mgr
        ON emp.manager_id = mgr.employee_id
    --JOINS (outer Joins) to Department 
    --and Locations Tables    
    JOIN departments d 
        ON emp.department_id = d.department_id
        JOIN locations l
            ON d.location_id = l.location_id
        ORDER BY mgr.last_name;              

--------------------------------------------------------------------

--ATTEMPT 1 DO NOT USE
-- SELECT * 
-- FROM hr.departments;

-- SELECT * 
-- FROM hr.locations;

-- SELECT *
-- FROM hr.employees;

--FULL OUTER JOIN 
--28 records
SELECT e.first_name AS "FIRST", 
        e.last_name AS "LAST",
        e.email AS "EMAIL", 
        d.department_name AS "DEPARTMENT",
        l.city AS "CITY",
        l.country_id AS "COUNTRY" 
    FROM locations l 
    FULL OUTER JOIN departments d 
        USING (location_id)
        FULL OUTER JOIN employees e
        ON e.department_id = d.department_id
        ORDER BY l.city;