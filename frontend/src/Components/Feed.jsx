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
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            {posts.map((post, index) => (
                <Post
                    key={index}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    image={post.image}
                    avatar={post.avatar}
                />
            ))}
        </div>
    );
}

export default Feed;
