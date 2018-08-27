DROP DATABASE wellness_db;

CREATE DATABASE wellness_db;

USE wellness_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE diaries (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    text VARCHAR(500) NOT NULL,
    PRIMARY KEY (id), FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE mood (
    id INT NOT NULL AUTO_INCREMENT,
    mood_type VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE histories (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    mood_id INT,
    PRIMARY KEY (id), FOREIGN KEY(user_id) REFERENCES users(id), FOREIGN KEY(mood_id) REFERENCES mood(id)
);

-- do we need user id in quotes?

CREATE TABLE quotes (
    id INT NOT NULL AUTO_INCREMENT,
    quote VARCHAR(500) NOT NULL,
    ranking INT,
    mood_id INT NOT NULL,
    PRIMARY KEY (id), FOREIGN KEY(mood_id) REFERENCES mood(id)
);

CREATE TABLE favorites (
    id INT NOT NULL AUTO_INCREMENT,
    quote VARCHAR(500) NOT NULL,
    ranking INT,
    user_id INT NOT NULL,
    mood_id INT NOT NULL,
    section VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id), FOREIGN KEY(user_id) REFERENCES users(id), FOREIGN KEY(mood_id) REFERENCES mood(id)
);

CREATE TABLE foods (
    id INT NOT NULL AUTO_INCREMENT,
    food_name VARCHAR(500) NOT NULL,
    mood_id INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    works BOOLEAN NOT NULL,
    PRIMARY KEY (id), FOREIGN KEY(mood_id) REFERENCES mood(id)
);

CREATE TABLE meditation (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    did_meditate BOOLEAN NOT NULL,
    amount TIME(6) NOT NULL,
    PRIMARY KEY (id), FOREIGN KEY(user_id) REFERENCES users(id)
);