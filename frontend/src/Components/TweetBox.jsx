import React, { useState } from 'react';
import './TweetBox.css';

function TweetBox() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                    <img src="../../assets/logo.png" alt="User Image" class="user-image"></img>            
                </div>
                <div className="new-post">
                    <textarea id="post-text" placeholder="Inserte TextBite" onInput={limitWords}></textarea>
                    <input type="text" placeholder="Inserte #" />
                    <input type="file" placeholder="Agregar Imagen" />
                    <button>CREAR TEXTBITE</button>
                </div>
            </div>
        </div>
    );
}

export default TweetBox;
