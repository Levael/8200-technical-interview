create TABLE tweets (
    id SERIAL PRIMARY KEY UNIQUE,
    username VARCHAR(255),
    content VARCHAR(255),
    time_stamp TIMESTAMP
);

create TABLE retweets (
    id SERIAL PRIMARY KEY,
    tweet_id INTEGER,
    retweet_username VARCHAR(255),
    time_stamp TIMESTAMP,

    FOREIGN KEY (tweet_id) REFERENCES tweets (id)
);

create TABLE likes (
    id SERIAL PRIMARY KEY,
    tweet_id INTEGER,
    username VARCHAR(255),
    time_stamp TIMESTAMP,

    FOREIGN KEY (tweet_id) REFERENCES tweets (id)
);
