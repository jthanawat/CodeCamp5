SELECT A.account_number
FROM account A, branch B
WHERE A.branch_name = B.branch_name AND B.branch_city = 'Riverside';

SELECT A.account_number
FROM account A LEFT JOIN branch B ON A.branch_name = B.branch_name
WHERE B.branch_city = 'Riverside';

SELECT A.account_number
FROM account A LEFT OUTER JOIN branch B ON A.branch_name = B.branch_name
WHERE B.branch_city = 'Riverside';

SELECT *
FROM account A INNER JOIN branch B ON A.branch_name = B.branch_name;

SELECT *
FROM account A NATURAL JOIN branch B;

SELECT A.account_number
FROM account A
WHERE A.branch_name = 'A' OR A.branch_name = 'B';

SELECT D.customer_name, SUM(A.balance)
FROM account A, depositor D
WHERE A.account_number = D.account_number
GROUP BY (D.customer_name);

SELECT D.customer_name, SUM(A.balance), COUNT(A.account_number)
FROM account A, depositor D
WHERE A.account_number = D.account_number
GROUP BY (D.customer_name)
HAVING COUNT(*) >= 2;

SELECT D.customer_name, SUM(A.balance) AS total_amount, COUNT(A.account_number)
FROM account A, depositor D
WHERE A.account_number = D.account_number
GROUP BY (D.customer_name)
HAVING COUNT(*) >= 2
ORDER BY total_amount DESC;