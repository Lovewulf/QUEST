import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GenericStyles.css'; // 


const FacultyLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // POST request to the login endpoint with username and password
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            // Check if the response is ok (status in the range 200-299)
            if (!response.ok) throw new Error(await response.text());

            // Extract user data from the response
            const userData = await response.json();

            // Navigate to the FacultyProfile component with user data
           
            navigate(`/faculty-profile/${userData.id}`, { state: userData });
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred during login: ' + error.message);
        }
    };

    return (


        <div className='faculty-login'>
        <header className='height-100'>
            
                <h1 className='text-center fw-semibold'>Faculty Login</h1>
            
        </header>

        <div className='container my-5'>  
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
        </div>

        </div>
    );
};

export default FacultyLogin;
