SELECT *
FROM teams;

SELECT *
FROM players;
   
/* 83 records */      
SELECT p.fname || ' ' || p.lname AS FULLNAME,   
    p.weight AS WEIGHT,
    t.name AS TEAM_NAME,
    t.city AS CITY,
    t.state AS STATE,
CASE
    WHEN p.weight > 200 THEN 'HEAVY'
    ELSE 'MEDIUM'
    END AS WEIGHT    
FROM players p
INNER JOIN teams t
ON t.id = p.team_id
ORDER BY p.weight DESC;


/* Rewritten Code for Exam to include null values
using the FULL OUTER JOIN instead of INNER JOIN */
/* 87 records */
SELECT p.fname || ' ' || p.lname AS FULLNAME,   
    p.weight AS WEIGHT,
    t.name AS TEAM_NAME,
    t.id AS TEAM_ID,
    t.city AS CITY,
    t.state AS STATE,
CASE
    WHEN p.weight > 200 THEN 'HEAVY'
    ELSE 'MEDIUM'
    END AS WEIGHT    
FROM players p
FULL OUTER JOIN teams t
ON t.id = p.team_id
ORDER BY p.weight DESC;


/* 87 records */
SELECT p.fname || ' ' || p.lname AS FULLNAME,   
    p.weight AS WEIGHT,
    t.name AS TEAM_NAME,
    t.id AS TEAM_ID,
    t.city AS CITY,
    t.state AS STATE,
CASE
    WHEN p.weight > 200 THEN 'HEAVY'
    ELSE 'MEDIUM'
    END AS WEIGHT    
FROM players p
FULL OUTER JOIN teams t
ON t.id = p.team_id
ORDER BY p.weight DESC;




