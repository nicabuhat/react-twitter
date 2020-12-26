import React from 'react';

function Button({ retweets, likes }) {
    return (
        <div className="tweet__buttonGroup">
            <span>
                <i class="fas fa-reply tweet__button"></i>
            </span>
            <span>
                <i class="fas fa-retweet tweet__button"></i>
                {retweets > 0 && <span> {retweets}</span>}
            </span>
            <span>
                <i class="far fa-heart tweet__button"></i> {likes}
            </span>
            <span>
                <i class="fas fa-ellipsis-h tweet__button"></i>
            </span>
        </div>
    );
}

export default Button;
