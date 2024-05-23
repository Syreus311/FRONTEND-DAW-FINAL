import React, { useState, useEffect } from 'react';
import './styles.css';

function MiniPost() {
    const [posts, setPosts] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchHashtag, setSearchHashtag] = useState('');

    const fetchPosts = async () => {
        try {
            const response = await fetch('/api/fetchPostsByDate');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const searchPosts = async () => {
        try {
            const response = await fetch(`/api/searchPost?text=${searchText}&hashtag=${searchHashtag}`);
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error searching posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="container">
            <button className="menu-button" onClick={toggleMenu}>☰ Menú</button>
            <div className="left-column" id="left-column">
                <div className="header">
                    <div className="user-details">
                        <button><img src="https://via.placeholder.com/30" alt="User" /></button>
                        <span className="username">USUARIO</span>
                    </div>
                    <button className="logout-button">Log Out</button>
                    <input type="text" placeholder="Buscar TextBite" />
                    <img src="../assets/logo.png" alt="User Image" className="user-image" />
                </div>
                <div className="new-post">
                    <textarea id="post-text" placeholder="Inserte TextBite" onInput={(e) => limitWords(e.target, 300)}></textarea>
                    <input type="text" placeholder="Inserte #" />
                    <input type="file" placeholder="Agregar Imagen" />
                    <button>CREAR TEXTBITE</button>
                </div>
            </div>
            
            <div className="right-column">
                <div className="top-search">
                    <input 
                        type="text" 
                        placeholder="Buscar TextBite" 
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)} 
                    />
                    <button onClick={searchPosts}>Buscar</button>
                </div>
                <div className="top-buttons">
                    <button>Para ti</button>
                    <button>Amigos</button>
                    <button>Tendencia</button>
                    <button>Nuevo</button>
                </div>
                <div className="posts-list">
                    {posts.length > 0 ? (
                        posts.map(post => (
                            <div key={post._id} className="post">
                                <div className="user-details">
                                    <img src={post.avatar || "https://via.placeholder.com/30"} alt="User" />
                                    <span className="username">{post.username}</span>
                                </div>
                                <p>{post.text}</p>
                                {post.image && <img src={post.image} alt="Imagen" />}
                                <span className="tags">{post.hashtag}</span>
                            </div>
                        ))
                    ) : (
                        <p>No posts found</p>
                    )}
                </div>
                <div className="bottom-buttons">
                    <button> 
                        <img src="/assets/pagina-de-inicio.png" alt="Home" />
                    </button>
                    <button>
                        <img src="/assets/usuario.png" alt="User" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function limitWords(textarea, maxWords) {
    const words = textarea.value.split(/\s+/);
    if (words.length > maxWords) {
        textarea.value = words.slice(0, maxWords).join(" ");
    }
}

function toggleMenu() {
    const leftColumn = document.getElementById('left-column');
    leftColumn.classList.toggle('active');
}

export default MiniPost;
