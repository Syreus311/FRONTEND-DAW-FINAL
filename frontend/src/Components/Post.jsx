import React from 'react';
import './Post.css';

function Post({ displayName, username, verified, text, image, avatar }) {
    return (
        <div className="post">
        
            <div className="right-column">
                <div className="posts">
                    <div className="post">
                        <div className="post-content">
                            <div className="post-header">
                                <div className="user-details">
                                    <button><img src="https://via.placeholder.com/30" alt="User" /></button>
                                    <span className="username">USUARIO</span>
                                </div>
                                <span className="tags">#lorem #ipsum #dolor</span>
                                <div className="edit-delete">
                                    <button>✏️</button>
                                    <button>🗑️</button>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod augue ac justo
                                vehicula, sed maximus tortor vestibulum.</p>
                        </div>
                    </div>
                    <div className="post">
                        <div className="post-content">
                            <div className="post-header">
                                <div className="user-details">
                                    <button><img src="https://via.placeholder.com/30" alt="User" /></button>
                                    <span className="username" style={{ color: 'red' }}>Other_User</span>
                                </div>
                                <span className="tags">#lorem #ipsum #dolor #lorem #ipsum #dolor #lorem #ipsum #dolor</span>
                                <div className="edit-delete">
                                    <button>✏️</button>
                                    <button>🗑️</button>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <img src="https://via.placeholder.com/100" alt="Imagen" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
