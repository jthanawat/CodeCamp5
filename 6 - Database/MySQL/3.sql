SELECT DISTINCT R.sid, B.color 
FROM Reserves R, Boats B 
WHERE R.bid = B.bid AND B.color = 'red';