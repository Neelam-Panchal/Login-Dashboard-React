import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Container,
    CssBaseline,
    TextField,
    Button,
    Typography,
    Card,
    CardContent,
} from '@mui/material';
import axios from 'axios';

const Login = (props) => {
    const Login_API = "http://localhost:5000/users/login";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (inputEmail) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(inputEmail);
    };

    const validatePassword = (inputPassword) => {
        return inputPassword.length >= 6;
    };

    const validateForm = () => {
        let isValid = true;

        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError('');
        }

        return isValid;
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!isSubmitting && validateForm()) {
            setIsSubmitting(true);

            try {
                const matchedUser = props.allUserData.data.find(user => user.email === email);

                if (matchedUser) {
                    localStorage.setItem('user', JSON.stringify(matchedUser));

                    const response = await axios.post(Login_API, {
                        email: email,
                        password: password
                    });

                    if (response.status === 200) {
                        alert('Logged in successfully!');
                        props.setIsLoggedIn(true);
                        navigate('/home');
                    } else {
                        alert('Login failed. Please check your credentials.');
                    }
                } else {
                    alert('User does not exist. Please check your credentials.');
                }
            } catch (error) {
                alert('An error occurred. Please try again.');
            }

            setIsSubmitting(false);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Card variant="outlined" style={{ borderRadius: '10px' }}>
                    <CardContent>
                        <Typography component="h1" variant="h5" style={{ textAlign: 'center' }}>
                            Sign in to Fwitter
                        </Typography>
                        <form onSubmit={handleLogin}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={!!emailError}
                                helperText={emailError}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={!!passwordError}
                                helperText={passwordError}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                            >
                                Log In
                            </Button>
                            <Typography component="p" variant="subtitle1" align="center">
                                Don't have an account? <Link to="/signUp">Sign Up</Link>
                            </Typography>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

export default Login;