import React, { useState, useEffect } from 'react';
import './TweetBox.css';

function TweetBox() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [tweetText, setTweetText] = useState('');
    const [hashtag, setHashtag] = useState('');

    const limitWords = (e) => {
        const textarea = e.target;
        const maxWords = 300;
        const words = textarea.value.split(/\s+/);
        if (words.length > maxWords) {
            textarea.value = words.slice(0, maxWords).join(" ");
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleCreateTweet = async () => {
        try {
            const response = await fetch('/api/createPost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: 'user_id_here', // replace with actual user ID
                    text: tweetText,
                    URL: '',
                    hashtag: hashtag,
                }),
            });
            if (response.ok) {
                // Tweet created successfully
                console.log('Tweet created successfully');
                setTweetText('');
                setHashtag('');
            } else {
                // Error creating tweet
                console.error('Error creating tweet');
            }
        } catch (error) {
            console.error('Error creating tweet:', error);
        }
    }

    return (
        <div className={`container ${isMenuOpen ? 'active' : ''}`}>
            <button className="menu-button" onClick={toggleMenu}>☰ Menú</button>
            <div className="left-column" id="left-column">
                <div className="header">
                    <div className="user-details">
                        <button><img src="https://via.placeholder.com/30" alt="User" /></button>
                        <span className="username">USUARIO</span>
                    </div>
                    <button className="logout-button">Log Out</button>
                    <input type="text" placeholder="Buscar TextBite" />
                    <img src="../../assets/logo.png" alt="User Image" className="user-image"></img>            
                </div>
                <div className="new-post">
                    <textarea 
                        id="post-text" 
                        placeholder="Inserte TextBite" 
                        value={tweetText}
                        onChange={(e) => setTweetText(e.target.value)}
                        onInput={limitWords}
                    ></textarea>
                    <input 
                        type="text" 
                        placeholder="Inserte #" 
                        value={hashtag}
                        onChange={(e) => setHashtag(e.target.value)}
                    />
                    <input type="file" placeholder="Agregar Imagen" />
                    <button onClick={handleCreateTweet}>CREAR TEXTBITE</button>
                </div>
            </div>
        </div>
    );
}

export default TweetBox;
