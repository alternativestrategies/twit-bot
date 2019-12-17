console.log('The bot is starting');

var Twit = require('twit');

const tokens = require('./tokens')

var T  = new Twit(tokens)

let twentyfourhours = 1000 * 10;
setInterval(postTweet, twentyfourhours);

function postTweet() {
    let number = Math.floor(Math.random() * 100);
    T.post('statuses/update', {status: `${number}: I am a bot beep boop (pls don\'t unplug me)`}, function(err, data, res){
        if(err) {
            console.log('Something went wrong', err.message)
        } else {
            console.log('smooth sailing')
        }
    })
}