UPDATE student
SET full_name = $1, email = $2, program = $3, year_level = $4
WHERE id = $5
RETURNING *;