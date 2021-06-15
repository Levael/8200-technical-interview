const db = require('../database/db.js');

class LikesController {
    async putLike (req, res) {
        let time_stamp = new Date().toISOString(),
            tweet_id = req.params.id,
            username = req.body.username;

        console.log(time_stamp, username, tweet_id);

        let new_like = await db.query(`
            INSERT INTO likes (tweet_id, username, time_stamp) values ($1, $2, $3) RETURNING *`,
            [tweet_id, username, time_stamp]
        );

        res.json(new_like.rows[0]);
    }
}

module.exports = new LikesController();
