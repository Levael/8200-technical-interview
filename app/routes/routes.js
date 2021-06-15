const Router                = require('express');

const router                = new Router();

const tweets_controller     = require('../controllers/tweets.js');
const retweets_controller   = require('../controllers/retweets.js');
const likes_controller      = require('../controllers/likes.js');

router.get('/tweets', tweets_controller.getTweets);
router.post('/tweets', tweets_controller.createTweet);

router.get('/retweets', retweets_controller.getRetweets);
router.post('/tweets/:id/retweet', retweets_controller.createRetweet);

router.post('/tweets/:id/likes', likes_controller.putLike);

module.exports = router;
