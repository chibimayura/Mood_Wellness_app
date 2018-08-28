
INSERT INTO users (username, password, email) VALUES ('user1', 'pass1', 'e@yahoo.com''', 1, true), ('user2', 'pass2', 'm@yahoo.com''', 1, true), ('user3', 'pass3', 'a@yahoo.com'), ('user4', 'pass4', 'i@yahoo.com'), ('user5', 'pass5', 'l@yahoo.com');

INSERT INTO diaries (user_id, text) VALUES (1, 'This will work.'), (2, 'Today will be great.'), (3, 'Fingers-Crossed.');

INSERT INTO histories (user_id, mood_id) VALUES (1, 3), (1, 1), (2, 3);

INSERT INTO mood (mood_type) VALUES ('happy'), ('sad'), ('neutral');

INSERT INTO quotes (quote, mood_id) VALUES ('“The Way Get Started Is To Quit Talking And Begin Doing.” – Walt Disney', 1), ('“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill', 2), ('“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers', 3), ('“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen', 3);

INSERT INTO favorites (user_id, ranking, mood_id, section) VALUES (1, 1, 3, 'Diary'), (1, 2, 1, 'Food'), (2, 3, 1, 'Meditation'), (3, 4, 1, 'Food'), (3, 4, 2, 'Meditation');

INSERT INTO meditation (user_id, did_meditate, amount) VALUES (1, true, '1:30'), (2, false, '2:00');

INSERT INTO foods (food_name, mood_id, description, works) VALUES
('Mackerel', 1, 'Contains Vitamin D which boosts Seratonin levels.', true),
('Sunflower Seeds', 1, 'Rich in Omega-3 Fatty Acids which help with sleep and wellness.', true),
('Vanilla Ice Cream', 1, 'Rich in phosphorous which reduces stress.', true),
('Bananas', 1, 'Contain tryptophan which helps with Seratonin production and replenishes Potassium, a nutrient we lose when stressed out.', true),
('Chicken Liver Pate', 1, 'Good source of iron which helps supply the brain with oxygen and helps with fatigue.', true),
('Dark Chocolate', 1, 'Contains polyphenols which release endorphins in the brain, and reduces cortisol, a stress hormone.', true),
('Pasta', 1, 'Contains carbohydrates that naturally boost Seratonin when eaten.', true),
('Venison', 1, 'Low in fat and high in Zinc, helping to maintain a healthy immune system and clear skin.', true),
('Cheese', 1, 'Contains tryptophan and calcium, which helps with restful sleep.', true),
('Green Veggies', 1, 'Contain folic acid, the lack of which contributes to Depression, and Magnesium, which helps reduce anxiety.', true),
('Pomegranates', 1, 'Regulates blood sugar particularly after a large meal, helping with fatigue.', true),
('Coffee', 1, "Manipulates the brain's pleasure centers and makes you feel more alert, which can contribute to satisfaction.", true),
('Wild Salmon', 1, 'Contains Vitamin B12 and helps with Seratonin production, known for helping reduce anxiety.', true),
('Chilli Peppers', 1, "Releases endorphins, a natural painkiller, as a reaction to the heat experienced when chillies are eaten.", true),
('Spinach', 1, 'Fights off cancer cells, lowers blood pressure and slows the age-related decline in brain function.', true),
('Red Wine', 1, 'In moderation, acts as a relaxant and lowers blood pressure.', true),
('Turkey', 1, 'Rich in tryptophan, which aids in the production of serotonin and melatonin, aiding restful sleep.', true),
('Pineapple', 1, 'Sugar content gives you a temporary boost while fiber content keeps you fuller and happier for longer periods of time.', true),
('Water', 1, 'Water prevents dehydration, which causes fatigue, headaches and even memory loss over time.', true),
('Blueberries', 1, 'Rich in antioxidants called flavanoids that provide energy, improve mood, and keep the brain from aging as quickly.', true),
('Nuts', 1, 'Rich in Omega-3 Fatty Acids, assisting with sleep and overall wellness.', true),
('Whole Grains', 1, 'Keeps blood sugar stable which helps with moods stability and overall wellness', true),
('Fermented Foods', 1, 'Contain healthy intestinal microbiota, which promotes mood stability and reduces stress.', true),
('Legumes', 1, 'High in fiber, keeping you satiated longer, and contain prebiotics that support gut health, which has been tied to mood.', true),
('Green Tea', 1, 'Contains L-theanine, an amino acid that helps fight anxiety, and a small caffeine—boost that can serve as a quick pick-me-up.', true),
('Oysters', 1, 'High in Zinc, which has been shown to reduce anxiety and help with sleep.', true),
('Mushrooms', 1, 'High in Selenium, which has been shown to fight depression.', true);
