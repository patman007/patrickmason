--Project 1 TASK 7 PART 1
-- Find out how many employees were hired in each year.
SELECT * 
FROM employees
ORDER BY hire_date;

SELECT COUNT(DISTINCT employees), employee_id
FROM employees
GROUP BY employee_id;

--FINAL ANSWER TASK 7 PART 1
SELECT COUNT(employees), employee_id,        
        EXTRACT(YEAR from hire_date)
        AS year_of_hiring
FROM employees
GROUP BY employee_id
ORDER BY year_of_hiring;

-----------------------------------------------------------

--Project 1 TASK 7 PART 2
-- Find out how many employees were hired in each year.
--List years and counts of employees hired in those years. 
--See sample output below.
-- Hint: use grouping after extracting the year of hire.
-- Then leave out those who years where less than 2 employees 
--were hired, while ordering the results chronologically.

--FINAL ANSWER TASK 7 PART 2
SELECT EXTRACT(YEAR from hire_date)
        AS year_of_hiring,
        COUNT(employees)
FROM employees
GROUP BY year_of_hiring
HAVING COUNT(employees) > 1
ORDER BY year_of_hiring;


-- You should see something smiliar to this:

--    year_of_hiring | count 
--   ----------------+-------
--              1997 |     2
--              2004 |     2
--              2006 |     3
--              2007 |     3
--              2008 |     3
--              2009 |     2
--   (6 rows)

--ATTEMPT 1 Not the right answer
SELECT EXTRACT(YEAR from hire_date)
        AS year_of_hiring,
        COUNT(employees)
FROM employees
GROUP BY hire_date
HAVING COUNT(employees) > 1
ORDER BY year_of_hiring;