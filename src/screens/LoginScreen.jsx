import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const LoginScreen = ()=>{ 
    return (
        <Stack spacing={2} direction="column">
            <Typography variant='h2'>Inicio de sesión</Typography>
            <TextField placeholder='Username'/>
            <TextField placeholder='Contraseña' type='password'/>
            <Button variant="contained">Iniciar sesión</Button>
        </Stack>
    );
}
export default LoginScreen;
