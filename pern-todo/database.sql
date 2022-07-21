CREATE DATABASE pernstack;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

/* SERIAL increments primary key with each todo task */