const db = require('../database/db.js');

class TweetsController {
    async getTweets (req, res) {
        let tweets = await db.query(`SELECT * FROM tweets`);
        res.json(tweets.rows);
    }

    async createTweet (req, res) {
        let time_stamp  = new Date().toISOString(),
            {username, content} = req.body;

        // console.log(time_stamp, username, content);

        let new_tweet = await db.query(`
            INSERT INTO tweets (content, username, time_stamp) values ($1, $2, $3) RETURNING *`,
            [content, username, time_stamp]
        );

        res.json(new_tweet.rows[0]);
    }
}

module.exports = new TweetsController();
