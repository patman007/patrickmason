SELECT * FROM todos.todos;

DELETE FROM todos.todos WHERE id= 1138;

UPDATE todos.todos SET iscomplete = NOT iscomplete WHERE id = 1096;

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