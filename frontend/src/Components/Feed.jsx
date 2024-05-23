import React from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';

function Feed() {
    const posts = [
        {
            displayName: "John Doe",
            username: "johndoe",
            verified: true,
            text: "Hello world!",
            image: "path/to/image.jpg",
            avatar: "path/to/avatar.jpg"
        },
        // Add more posts here
    ];

    return (
        <body>
        <div className="feed">
            <TweetBox />
            {posts.map((post, index) => (
                <Post
                    
                />
            ))}
        </div>

        </body>
    );
}

export default Feed;
