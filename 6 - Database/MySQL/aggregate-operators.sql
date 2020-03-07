SELECT count(DISTINCT S.sname) as Counter
FROM sailors S;

SELECT SUM(S.age)
FROM sailors S
WHERE S.rating = 10;

SELECT AVG(S.age)
FROM sailors S
WHERE S.rating = 10;

SELECT S.sname 
FROM sailors S
WHERE S.age = ( SELECT MAX(S.age) FROM sailors S);

SELECT S.sname
FROM sailors S
WHERE S.age BETWEEN 25 and 35;

SELECT S.sid, S.sname
FROM sailors S
WHERE S.age = 25.5;

SELECT count(*)
FROM sailors s
WHERE s.age = 25.5;

SELECT *
FROM sailors S
WHERE S.sname BETWEEN 'Hansen' and 'Pettersen';

SELECT *
FROM sailors S
WHERE S.sname LIKE 'A_%';

SELECT SUM(s.age)
FROM sailors S
WHERE S.age > 20;

SELECT MIN(s.age)
FROM sailors S
WHERE S.age > 20;