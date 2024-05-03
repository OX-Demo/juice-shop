import Twitter from 'twitter-api-sdk';

// Create a new Twitter object
const twitter = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

// Search for tweets containing the word 'javascript'
twitter.get('search/tweets', {q: 'javascript'}, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  } else {
    console.error(error);
  }
});