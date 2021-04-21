module.exports = {
  getUsers: `
    SELECT * 
    FROM users`,

  getDetails: `
  SELECT 
  count(*) as count,
  (
    SELECT
    SUM(transactions.amount)
    FROM transactions
    WHERE transactions.type='debit'
    AND transactions.user_id=$1
  ) as expenses,
  (
    SELECT
    SUM(transactions.amount)
    FROM transactions
    WHERE transactions.type='credit'
    AND transactions.user_id=$1
  ) as income,
    users.created_at
  FROM transactions
  LEFT JOIN users
  ON users.id = transactions.user_id
  WHERE transactions.user_id = $1
  GROUP BY 
    users.created_at`,

  getUserExpensesPerMonth: `
    SELECT 
      user_id, 
      transactions.category, 
      DATE_TRUNC('month',transactions.date_time), 
      count(*) as count
    FROM transactions
    WHERE transactions.type = 'debit'
    AND transactions.user_id=$1
    GROUP BY 
      user_id, 
      transactions.category, 
      DATE_TRUNC('month',transactions.date_time)
    ORDER  BY 
      user_id, 
      DATE_TRUNC('month',transactions.date_time)`,

  getUserExpenseTopTrends: `WITH total as (
    SELECT
    DATE_TRUNC('month',transactions.date_time) as month, 
    count(transactions.category),
    transactions.category as category,
    transactions.icon_url as avatar
    FROM transactions
    WHERE transactions.type='debit'
    AND transactions.user_id = $1
    GROUP BY 1,3,4
    ORDER BY transactions.category ASC),
    counts as (
    SELECT count(total.category),
    total.category,
    total.avatar
    FROM total
    GROUP BY total.category,
    total.avatar
    HAVING count(total.category)>=7
    )
    SELECT
    *
    FROM counts
    ORDER BY count DESC
    LIMIT 5;`,

  getExpenseTrends: `
    SELECT
      count(transactions.category),
      transactions.user_id,
      transactions.category
    FROM transactions
    WHERE transactions.type = 'debit'
    AND transactions.user_id = $1
    GROUP BY 2,3
    HAVING count(transactions.category) >=7
    ORDER BY transactions.user_id ASC;
    `,

  getSimilarTrends: `
    SELECT
      count(transactions.category),
      transactions.user_id,
      transactions.category
    FROM transactions
    WHERE transactions.type = 'debit'
    AND transactions.user_id <> $1
    GROUP BY 2,3
    HAVING count(transactions.category) >=7
    ORDER BY transactions.user_id ASC;
    `,
};
