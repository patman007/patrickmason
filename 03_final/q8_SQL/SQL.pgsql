SELECT *
FROM teams;

SELECT *
FROM players;
   
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


