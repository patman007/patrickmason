--List full names of all employees, all department names,
-- and all cities
-- SELECT * 
-- FROM hr.departments;

-- SELECT * 
-- FROM hr.locations;

-- SELECT *
-- FROM hr.employees;
--List full names of all employees, all department names,
--and all cities
SELECT e.first_name AS "FIRST", 
        e.last_name AS "LAST",
        e.email AS "EMAIL", 
        d.department_name AS "DEPARTMENT",
        l.city AS "CITY",
        l.country_id AS "COUNTRY" 
    FROM locations l 
    JOIN departments d 
        USING (location_id)
        JOIN employees e
        ON e.department_id = d.department_id
        ORDER BY l.city;


--List the first, last, email, department name and 
--city of all employees that are Execs.
--Hint: Join between EMPLOYEES, DEPARTMENTS and LOCATIONS 
--using DEPARTMENT_NAME = 'appropriate department name'.

--What you would expect to see is something similar to this:

-- FIRST      LAST       EMAIL      DEPT       CITY
-- ---------- ---------- ---------- ---------- ------------
-- Steven     King       SKING      Executive  Seattle
-- Neena      Kochhar    NKOCHHAR   Executive  Seattle
-- Lex        De Haan    LDEHAAN    Executive  Seattle
-- Seely      Bruce      bman       Executive  Seattle
-- Stephen    Noyce      snoyce     Executive  Seattle

-- SELECT * 
-- FROM hr.departments;

-- SELECT * 
-- FROM hr.locations;

-- SELECT *
-- FROM hr.employees;
--FINAL ANSWER
--List the first, last, email, department name and 
--city of all employees that are Execs.
SELECT e.first_name AS "FIRST", 
        e.last_name AS "LAST",
        e.email AS "EMAIL", 
        d.department_name AS "DEPT",
        l.city AS "CITY",
        l.country_id AS "COUNTRY" 
    FROM locations l 
    JOIN departments d 
        USING (location_id)
        JOIN employees e
        ON e.department_id = d.department_id
        AND d.department_name LIKE '%Exec%'
        -- AND upper(l.city) LIKE upper('%seattle%')
        ORDER BY e.last_name ASC;


--ATTEMPT 1 Does not show city name
-- SELECT * 
-- FROM hr.departments;

-- SELECT * 
-- FROM hr.locations;

-- SELECT *
-- FROM hr.employees;
--List the first, last, email, department name and 
--city of all employees that are Execs.
SELECT e.first_name AS "FIRST", 
        e.last_name AS "LAST",
        e.email AS "EMAIL",
        d.department_name AS "DEPT"                                                   
FROM employees e
    INNER JOIN departments d
        ON e.department_id = d.department_id
    AND d.department_name LIKE '%Exec%'
    ORDER BY e.last_name ASC; 


--ATTEMPT 2 Does not show city name
-- SELECT * 
-- FROM hr.departments;

-- SELECT * 
-- FROM hr.locations;

-- SELECT *
-- FROM hr.employees;
--List the first, last, email, department name and 
--city of all employees that are Execs.
SELECT e.first_name AS "FIRST", 
        e.last_name AS "LAST",
        e.email AS "EMAIL",
        d.department_name AS "DEPT"                                                      
FROM employees e
    INNER JOIN departments d 
        ON e.department_id = d.department_id    
    INNER JOIN locations ls 
        ON d.location_id = ls.location_id
    WHERE d.department_name = 'Executive'
        AND ls.city = 'Seattle'
        ORDER BY e.last_name DESC; 
