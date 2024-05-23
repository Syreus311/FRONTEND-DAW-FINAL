import React from 'react';
import './styles.css'; // Importa el archivo de estilos CSS

function Login() {
    return (
        <div>
            <div className="header">
                <img src="../assets/titulo.png" alt="Título" />
            </div>
            <div className="buttons">
                <button className="button">Iniciar Sesión</button>
                <button className="button">Registrarse</button>
            </div>
            <div className="form-container">
                <div>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className="container">
                    {/* Aquí puedes agregar más elementos dentro de la clase container si es necesario */}
                </div>
                <button className="bottom-button">Iniciar sesión</button>
            </div>
        </div>
    );
}

export default Login;
