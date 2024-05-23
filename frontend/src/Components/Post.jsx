import React, { useState } from 'react';
import './Post.css';

function Post({ id, displayName, username, verified, text, image, avatar }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);
    const [editURL, setEditURL] = useState(image); // Assuming image URL is passed as image prop
    const [editHashtag, setEditHashtag] = useState(""); // Assuming hashtags are managed separately

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            const response = await fetch(`/api/editPost/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: username,
                    text: editText,
                    URL: editURL,
                    hashtag: editHashtag
                }),
            });

            if (response.ok) {
                const updatedPost = await response.json();
                setEditText(updatedPost.text);
                setEditURL(updatedPost.URL);
                setEditHashtag(updatedPost.hashtag);
                setIsEditing(false);
            } else {
                console.error('Error editing post');
            }
        } catch (error) {
            console.error('Error editing post:', error);
        }
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditText(text);
        setEditURL(image);
        setEditHashtag("");
    };

    const handleDeleteClick = async () => {
        try {
            const response = await fetch(`/api/deletePost/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Successfully deleted, you might want to update the state of the parent component to remove this post
                alert('Post deleted successfully');
            } else {
                console.error('Error deleting post');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div className="post">
            <div className="right-column">
                <div className="posts">
                    <div className="post-content">
                        <div className="post-header">
                            <div className="user-details">
                                <button><img src={avatar || "https://via.placeholder.com/30"} alt="User" /></button>
                                <span className="username">{displayName}</span>
                            </div>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={editHashtag}
                                    onChange={(e) => setEditHashtag(e.target.value)}
                                    placeholder="Edit hashtags"
                                />
                            ) : (
                                <span className="tags">{editHashtag}</span>
                            )}
                            <div className="edit-delete">
                                {isEditing ? (
                                    <>
                                        <button onClick={handleSaveClick}>💾</button>
                                        <button onClick={handleCancelClick}>✖️</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={handleEditClick}>✏️</button>
                                        <button onClick={handleDeleteClick}>🗑️</button>
                                    </>
                                )}
                            </div>
                        </div>
                        {isEditing ? (
                            <textarea
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                placeholder="Edit text"
                            ></textarea>
                        ) : (
                            <p>{editText}</p>
                        )}
                        {isEditing ? (
                            <input
                                type="text"
                                value={editURL}
                                onChange={(e) => setEditURL(e.target.value)}
                                placeholder="Edit image URL"
                            />
                        ) : (
                            image && <img src={editURL} alt="Imagen" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
