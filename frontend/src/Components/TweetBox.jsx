import React from 'react';
import avatar from '../assets/2.png';
import './TweetBox.css';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <img src={avatar} alt="Avatar" className="tweetBox__avatar" />
                    <input
                        placeholder="What's happening?"
                        type="text"
                        className="tweetBox__inputField"
                    />
                </div>
                <input
                    placeholder="Hashtags"
                    type="text"
                    className="tweetBox__imageInput"
                />
                <button
                    type="submit"
                    className="tweetBox__button"
                >
                    Tweet
                </button>
            </form>
        </div>
    );
}

export default TweetBox;
