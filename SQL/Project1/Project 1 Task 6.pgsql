--To the above query from Task 5, 
--add the manager's first name to the column list.
SELECT * 
FROM hr.departments;

SELECT * 
FROM hr.locations;

SELECT *
FROM hr.employees;

SELECT e.first_name AS "FIRST", 
        e.last_name AS "LAST",
        e.email AS "EMAIL", 
        e.manager_id AS "MANAGER",
        d.department_name AS "DEPARTMENT",
        l.city AS "CITY",
        l.country_id AS "COUNTRY" 
    FROM locations l 
    JOIN departments d 
        USING (location_id)
    JOIN employees e
        ON e.department_id = d.department_id                
        ORDER BY l.city;

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