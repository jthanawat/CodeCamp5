SELECT B.color, S.sname 
FROM Sailors S, Reserves R, Boats B 
WHERE S.sid = R.sid AND R.bid = B.bid AND S.sname = 'Lubber';