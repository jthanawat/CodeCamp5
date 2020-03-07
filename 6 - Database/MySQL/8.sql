SELECT S.sid 
FROM sailors S
WHERE S.sname IN ( SELECT S.sname
				   FROM salors S, reserves R, boats B
                   WHERE S.sid = R.sid AND R.bid = B.bid AND B.color = 'red')
				   AND S.sid NOT IN ( SELECT S.sname
									  FROM sailors S, reserves R, boats B
									  WHERE S.sid = R.sid AND R.bid = B.bid AND B.color = 'green');