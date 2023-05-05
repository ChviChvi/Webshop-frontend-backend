import React, { useState } from "react";

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch("http://130.225.170.71:3000/password-reset", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage("Password reset email sent");
            } else {
                const error = await response.json();
                setError(error.message);
            }
        } catch (error) {
            setError("Something went wrong. Please try again later.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            {error && <p>{error}</p>}
            {message && <p>{message}</p>}
            <button type="submit">Send Reset Link</button>
        </form>
    );
};

export default ForgotPassword;
