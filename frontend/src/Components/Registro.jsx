import React from 'react';
import './styles.css';

function LoginPage() {
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
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className="container">
                    {/* Aquí puedes agregar más elementos según sea necesario */}
                </div>
                <button className="bottom-button">Registrarse</button>
            </div>
        </>
    );
}

export default LoginPage;
