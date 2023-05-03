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
            const usernameExistsResponse = await fetch(`/checkUsername/${username}`);
            const { exists } = await usernameExistsResponse.json();

            if (!exists) {
                setError("Username does not exist");
                return;
            }

            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                // Save the session token or cookie returned by the server
                //document.cookie = `token=${data.token}`;
                onSuccess();
            } else {
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
