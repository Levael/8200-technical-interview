const db = require('../database/db.js');

class RetweetsController {
    async getRetweets (req, res) {
        let retweets = await db.query(`SELECT * FROM retweets`);
        res.json(retweets.rows);
    }

    async createRetweet (req, res) {
        let time_stamp = new Date().toISOString(),
            tweet_id = req.params.id,
            retweet_username = req.body.username;


        // console.log(time_stamp, retweet_username, tweet_id);

        let new_retweet = await db.query(`
            INSERT INTO retweets (tweet_id, retweet_username, time_stamp) values ($1, $2, $3) RETURNING *`,
            [tweet_id, retweet_username, time_stamp]
        );

        res.json(new_retweet.rows[0]);

    }
}

module.exports = new RetweetsController();
