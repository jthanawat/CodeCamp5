SELECT DISTINCT S.sname 
FROM Sailors S, Reserves R
WHERE S.sid = R.sid;