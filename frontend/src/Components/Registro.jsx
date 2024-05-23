import React, { useState } from 'react';
import './styles.css';

function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/addUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                // Usuario registrado exitosamente
                const data = await response.json();
                console.log('Usuario registrado exitosamente:', data);
            } else {
                // Error al registrar usuario
                console.error('Error al registrar usuario');
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };

    return (
        <>
            <div className="header">
                <img src="../assets/titulo.png" alt="Título" />
            </div>
            <div className="buttons">
                <button className="button">Iniciar Sesión</button>
                <button className="button">Registrarse</button>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor="username">Nombre de usuario</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={formData.username} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="container">
                        {/* Aquí puedes agregar más elementos según sea necesario */}
                    </div>
                    <button type="submit" className="bottom-button">Registrarse</button>
                </form>
            </div>
        </>
    );
}

export default LoginPage;
