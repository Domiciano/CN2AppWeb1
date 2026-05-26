import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { login } from '../services/AuthServices';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';


const LoginScreen = ()=>{ 

    const navigate = useNavigate();
    const {setToken} = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async ()=>{
        //Guardar algo en el localstorage
        localStorage.setItem("VAR1","Variable almacenada asdkasd"); // numbers, strings, booleans
        let response = await login(username, password);
        console.log(response);
        setToken(response.token);
        navigate('/');
    }

    return (
        <Stack spacing={2} direction="column">
            <Typography variant='h2'>Inicio de sesión</Typography>
            <TextField 
                value={username} 
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField 
                value={password} 
                placeholder='Contraseña'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} variant="contained">Iniciar sesión</Button>
        </Stack>
    );
}
export default LoginScreen;
