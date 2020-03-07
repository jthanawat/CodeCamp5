SELECT S.sname, B.color 
FROM Sailors S, Reserves R, Boats B 
WHERE S.sid = R.sid AND R.bid = B.bid AND B.color = 'red';