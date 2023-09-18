import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dots } from 'react-activity';
import { loginUser } from '../routes/Acount';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [token, setToken] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const getUser = () => {
        navigate({
            pathname: '/',
            search: `?username=${username}`,
        });
    };

    async function handleSubmit(event) {
        event.preventDefault();

        async function logUser() {
            try {
                const response = await loginUser(username, password);
                if (response.success) {
                    setToken(response.data.token);
                    localStorage.setItem(username, response.data.token);
                } else {
                    setMsg(response.error.message);
                }
            } catch (error) {
                setError(error);
                console.log(error);
            } finally {
                setLoaded(true);
            }
        }
        logUser();
    }

    return (
        <>
            {token && getUser()}
            <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit} style={{ marginTop: '1em' }}>
                    <input
                        type="text"
                        required
                        fullWidth
                        id="username"
                        placeholder="Username"
                        autoComplete="username"
                        onChange={(e) => setUsername(e.target.value)}
                        autoFocus
                    />
                    <input
                        type="password"
                        required
                        fullWidth
                        name="password"
                        placeholder="Password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <button type="submit" style={{ marginTop: '1em', marginBottom: '2em' }}>
                        Sign In
                    </button>
                    <div>
                        <Link to="/register">Don't have an account? Sign Up</Link>
                    </div>
                </form>
            </div>
            {msg && <div className="errorMsg">{msg}</div>}
            {!loaded && <Dots />}
        </>
    );
}