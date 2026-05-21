import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { login } from '../services/AuthServices';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


const LoginScreen = ()=>{ 

    const navigate = useNavigate();
    const {setToken} = useAuth();

    const handleLogin = async ()=>{
        //Guardar algo en el localstorage
        localStorage.setItem("VAR1","Variable almacenada asdkasd"); // numbers, strings, booleans
        let response = await login();
        console.log(response);
        setToken(response.token);
        navigate('/');
    }

    return (
        <Stack spacing={2} direction="column">
            <Typography variant='h2'>Inicio de sesión</Typography>
            <TextField placeholder='Username'/>
            <TextField placeholder='Contraseña' type='password'/>
            <Button onClick={handleLogin} variant="contained">Iniciar sesión</Button>
        </Stack>
    );
}
export default LoginScreen;
