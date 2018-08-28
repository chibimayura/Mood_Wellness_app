
INSERT INTO users (username, password, email) VALUES ('user1', 'pass1', 'e@yahoo.com'), ('user2', 'pass2', 'm@yahoo.com'), ('user3', 'pass3', 'a@yahoo.com'), ('user4', 'pass4', 'i@yahoo.com'), ('user5', 'pass5', 'l@yahoo.com');

INSERT INTO diaries (user_id, text) VALUES (1, 'This will work.'), (2, 'Today will be great.'), (3, 'Fingers-Crossed.');

INSERT INTO histories (user_id, mood_id) VALUES (1, 3), (1, 1), (2, 3);

INSERT INTO moods (mood) VALUES ('happy'), ('sad'), ('angry'), ('neutral');

INSERT INTO quotes (quote, mood_id) VALUES ('“The Way Get Started Is To Quit Talking And Begin Doing.” – Walt Disney', 1), ('“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill', 2), ('“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers', 3), ('“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen', 3);

INSERT INTO favorites (user_id, ranking, mood_id, section) VALUES (1, 1, 3, 'Quotes'), (1, 2, 1, 'Food'), (2, 3, 1, 'Meditation'), (3, 4, 1, 'Food'), (3, 4, 2, 'Meditation');

INSERT INTO meditation (user_id, did_meditate, amount) VALUES (1, true, 1), (2, false, 0);