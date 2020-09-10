--List the first, last, email, department name and city of all employees 
--that are Execs.
SELECT e.first_name AS "FIRST", 
        e.last_name AS "LAST",
        e.email AS "EMAIL",
        d.department_name AS "DEPT"                                           
FROM employees e
    JOIN departments d
        ON e.department_id = d.department_id
    AND d.department_name = 'Executive'; 
        -- FROM departments d
        --     JOIN locations ls
        --         ON d.location_id = ls.location_id
        --     AND ls.city = 'Seattle';
        

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