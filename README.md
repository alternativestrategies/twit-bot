# Twit Bot

This is a twitter bot I created to try out node bots. It will post a message to your twitter account every couple seconds as long as it is running

## Usage

In order to use this app you will have to install Node and sign up for a twitter developer account and get access to twitter's API 

Then you will have to create a ```token.js``` file in the root of this directory and you will have to put your tokens like so:

``` js
module.exports = {
    consumer_key: 'your consumer key',
    consumer_secret: 'your consumer secret',
    access_token: 'your access token',
    access_token_secret: 'your access token secret'
}
```

Once you have added this you can run this command in your terminal:

```sh
node app.js
```

You can change the message in app.js if you'd like