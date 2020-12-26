import React from 'react';

function Author({ name, handle }) {
    return (
        <span>
            <span className="tweet__nameGroup--name">
                <strong>{name}</strong>
            </span>
            <span className="tweet__nameGroup--handle">@{handle}</span>
        </span>
    );
}

export default Author;
