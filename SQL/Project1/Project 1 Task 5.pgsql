--PROJECT 1 TASK 1 PART 1
--List first, last name, email, 
--department names, and city of all employees
-- and all cities
-- SELECT * 
-- FROM hr.departments;

-- SELECT * 
-- FROM hr.locations;

-- SELECT *
-- FROM hr.employees;

--FINAL ANSWER TASK 5 PART 1
--21 records
--JOIN table sequence 
--EMPLOYEES -> DEPARTMENTS -> LOCATION 
--List first, last name, email, 
--department names, and city of all employees
SELECT e.first_name AS "FIRST", 
        e.last_name AS "LAST",
        e.email AS "EMAIL", 
        d.department_name AS "DEPT",
        l.city AS "CITY",
        l.country_id AS "COUNTRY" 
    FROM employees e 
    JOIN departments d 
        ON e.department_id = d.department_id
        JOIN locations l
            ON d.location_id = l.location_id
        ORDER BY e.last_name ASC;


--Alternative FINAL ANSWER TASK 5 PART 1 
--24 records
--JOIN table sequence 
--EMPLOYEES -> DEPARTMENTS -> LOCATION
--List first, last name, email, 
--department names, and city of all employees
SELECT e.first_name AS "FIRST", 
        e.last_name AS "LAST",
        e.email AS "EMAIL", 
        d.department_name AS "DEPARTMENT",
        l.city AS "CITY",
        l.country_id AS "COUNTRY" 
    FROM employees e  
    LEFT JOIN departments d 
    --either matches or is null is a LEFT JOIN 
        ON e.department_id = d.department_id
            LEFT JOIN locations l
            --either matches or is null is a LEFT JOIN 
            ON d.location_id = l.location_id
        ORDER BY e.last_name;


---------------------------------------------------

--FULL JOIN ATTEMPT, 28 records
--JOIN table sequence backwards
--LOCATION -> DEPARTMENTS -> EMPLOYEES 
--Shows NULLS on department, city, country, 
--email, first name, and last name
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

--LEFT JOIN ATTEMPT, 25 records
--JOIN table sequence backwards
--LOCATION -> DEPARTMENTS -> EMPLOYEES 
--Shows NULLS on first name, last name, department, 
--and email
SELECT e.first_name AS "FIRST", 
        e.last_name AS "LAST",
        e.email AS "EMAIL", 
        d.department_name AS "DEPARTMENT",
        l.city AS "CITY",
        l.country_id AS "COUNTRY" 
    FROM locations l 
    LEFT JOIN departments d 
        USING (location_id)
        LEFT JOIN employees e
        ON e.department_id = d.department_id
        ORDER BY l.city;

--RIGHT JOIN ATTEMPT, 24 records
--JOIN table sequence backwards
--LOCATION -> DEPARTMENTS -> EMPLOYEES 
--Shows NULLS on department, city, country, and email
SELECT e.first_name AS "FIRST", 
        e.last_name AS "LAST",
        e.email AS "EMAIL", 
        d.department_name AS "DEPARTMENT",
        l.city AS "CITY",
        l.country_id AS "COUNTRY" 
    FROM locations l 
    RIGHT JOIN departments d 
        USING (location_id)
        RIGHT JOIN employees e
        ON e.department_id = d.department_id
        ORDER BY l.city;  

--INNER JOIN ATTEMPT, 21 records 
--JOIN table sequence backwards
--LOCATION -> DEPARTMENTS -> EMPLOYEES 
--NO NULLS from any columns show up     
SELECT e.first_name AS "FIRST", 
        e.last_name AS "LAST",
        e.email AS "EMAIL", 
        d.department_name AS "DEPARTMENT",
        l.city AS "CITY",
        l.country_id AS "COUNTRY" 
    FROM locations l 
    INNER JOIN departments d 
        USING (location_id)
        INNER JOIN employees e
        ON e.department_id = d.department_id
        ORDER BY e.last_name; 


--INNER JOIN ATTEMPT, 21 records 
--JOIN table sequence backwards
--LOCATION -> DEPARTMENTS -> EMPLOYEES 
--NO NULLS from any columns show up 
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

----------------------------------------------------

--PROJECT 1 TASK 5 PART 2
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

--FINAL ANSWER 3 records using JOIN
--List the first, last, email, department name and 
--city of all employees that are Execs.
--JOIN table sequence
--EMPLOYEES -> DEPARTMENTS -> LOCATION 
SELECT e.first_name AS "FIRST", 
        e.last_name AS "LAST",
        e.email AS "EMAIL", 
        d.department_name AS "DEPT",
        l.city AS "CITY",
        l.country_id AS "COUNTRY" 
    FROM employees e 
    JOIN departments d 
        ON e.department_id = d.department_id
        JOIN locations l
            ON d.location_id = l.location_id
            --AND d.department_name LIKE '%Exec%'
            AND d.department_name = 'Executive'
            --AND upper(l.city) LIKE upper('%seattle%')
        ORDER BY e.last_name ASC;


-- Alternative FINAL ANSWER 3 records using JOINS BACKWARDS
--JOIN table sequence
--LOCATION -> DEPARTMENTS -> EMPLOYEES 
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
        --AND d.department_name LIKE '%Exec%'
         AND d.department_name = 'Executive'
        --AND upper(l.city) LIKE upper('%seattle%')
        ORDER BY e.last_name ASC;



--ATTEMPT 1 Does not show city name
-- SELECT * 
-- FROM hr.departments;

-- SELECT * 
-- FROM hr.locations;

-- SELECT *
-- FROM hr.employees;
--List the first, last, email, department and 
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
--List the first, last, email, department and 
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
        ORDER BY e.last_name ASC; 
