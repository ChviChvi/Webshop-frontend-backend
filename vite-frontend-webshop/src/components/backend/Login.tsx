import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
/** this is backend course! */

interface LoginFormProps {
    onSuccess: () => void;
}

const LoginForm = ({ onSuccess }: LoginFormProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const usernameExistsResponse = await fetch(`http://130.225.170.71:3000/checkUsername/${username}`);
            const { exists } = await usernameExistsResponse.json();

            if (!exists) {
                setError("Username does not exist");
                return;
            }

            const response = await fetch("http://130.225.170.71:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
                credentials: 'include', // include the credentials (cookies) in the request
            });

            if (response.ok) {
                onSuccess();
            } else {
                const data = await response.json();
                setError(data.message || "Login failed");
            }
        } catch (error) {
            setError("Login failed");
        }
    };





    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <button type="submit">Login</button>
            {error && <div>{error}</div>}
        </form>

        <Link to="/registration"> No account? registrate her!</Link>
        </div>
    );
};

export default LoginForm;
