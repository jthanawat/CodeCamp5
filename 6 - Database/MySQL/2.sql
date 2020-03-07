SELECT S.sid, S.sname, R.bid, R.day 
FROM Sailors S, Reserves R 
WHERE S.sid = R.sid AND R.bid = 103;