SELECT * FROM todos.todos;

SELECT * FROM todos.users;

--Dont do this 
INSERT INTO todos.todos (
    description,
    iscomplete,
    user_id
) VALUES (
    'Call Jon Mikel',
    false,
    1
);
