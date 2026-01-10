import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function Authentication() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate(); 
    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {
                await handleLogin(username, password);
                setError("");
                navigate("/home"); 
            } else if (formState === 1) {
                let result = await handleRegister(name, username, password);
                setMessage(result);
                setOpen(true);
                setError("");
                setFormState(0);
                setUsername(""); 
                setPassword("");
            }
        } catch (err) {
            console.log(err);
            let msg = err.response?.data?.message || "An error occurred";
            setError(msg);
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            
            <Grid container component="main" sx={{ 
                height: '100vh', 
                justifyContent: 'center', 
                alignItems: 'center',
                backgroundColor: '#f5f5f5' 
            }}>
                <CssBaseline />
                
               
                <Grid item xs={11} sm={6} md={4} component={Paper} elevation={6} square sx={{ borderRadius: '8px' }}>
                    <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>

                        <Box sx={{ mb: 2 }}>
                            <Button variant={formState === 0 ? "contained" : "text"} onClick={() => { setFormState(0); setError(""); }}>Sign In</Button>
                            <Button variant={formState === 1 ? "contained" : "text"} onClick={() => { setFormState(1); setError(""); }}>Sign Up</Button>
                        </Box>

                        <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
                            {formState === 1 && (
                                <TextField
                                    margin="normal" required fullWidth label="User Name"
                                    value={name} onChange={(e) => setName(e.target.value)}
                                />
                            )}

                            <TextField
                                margin="normal" required fullWidth label="Gmail"
                                value={username} onChange={(e) => setUsername(e.target.value)}
                            />
                            
                            <TextField
                                margin="normal" required fullWidth label="Password" type="password"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />

                            {error && <p style={{ color: "red", fontSize: "0.8rem" }}>{error}</p>}

                            <Button
                                type="button" fullWidth variant="contained"
                                sx={{ mt: 3, mb: 2 }} 
                                onClick={handleAuth}
                                disabled={!username || !password} 
                            >
                                {formState === 0 ? "Login" : "Register"}
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={4000} message={message} onClose={() => setOpen(false)} />
        </ThemeProvider>
    );
}