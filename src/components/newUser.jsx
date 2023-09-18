import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { registerUser } from '../routes/Acount';

export default function RegisterForm() {
    const [msg, setMsg] = useState('');
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function resetForm() {
        setUsername('');
        setPassword('');
    }

    async function handleSubmit(event) {
        event.preventDefault();

        async function createUser() {
            try {
                const response = await registerUser(username, password);
                if (response.success) {
                    setMsg(response.data.message);
                    setToken(response.data.token);
                    localStorage.setItem(username, response.data.token);
                } else {
                    setMsg(response.error.message);
                }
                resetForm();
            } catch (error) {
                setError(error);
                console.log(error);
            }
        }
        createUser();
    }

    return (
        <>
            {error && <p>{error.message}</p>}
            {token && <Navigate to="/" replace={true} />}
            <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit} style={{ marginTop: '3px' }}>
                    <div>
                        <input
                            required
                            id="username"
                            placeholder="Username"
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <div className='errorMsg'>{msg}</div>
                    </div>
                    <div>
                        <input
                            required
                            name="password"
                            placeholder="Password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" style={{ marginTop: '1em', marginBottom: '2em', width: '100%' }}>
                        Sign Up
                    </button>
                    <div style={{ textAlign: 'right' }}>
                        <Link to="/account/login" variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}