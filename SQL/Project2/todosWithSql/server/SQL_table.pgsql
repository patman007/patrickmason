SELECT * FROM Todos.todos;

SELECT * FROM Todos.users;

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
