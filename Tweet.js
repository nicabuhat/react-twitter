// Version 1
// [x] it must have an avatar
// [x] it must have a name and handle
// [x] it must have a date posted
// [x] it must have a message
// [x] it must have buttons for reply, retweet, like and more

import React from 'react';
import './Tweet.css';
import Avatar from './Avatar';
import Author from './Author';
import Button from './Button';
import Time from './Date';
import Message from './Message';

function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar image={tweet.image} />
            <div className="tweet__content">
                <div className="tweet__nameGroup">
                    <Author name={tweet.name} handle={tweet.handle} />
                    <Time date={tweet.date} />
                </div>
                <Message message={tweet.message} />
                <Button likes={tweet.likes} retweets={tweet.retweets} />
            </div>
        </div>
    );
}

export default Tweet;
