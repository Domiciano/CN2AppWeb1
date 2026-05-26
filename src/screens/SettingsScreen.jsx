import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import ContactItem from '../components/ContactItem';

const SettingsScreen = () => {
    const navigate = useNavigate();
    const { setToken } = useAuth();

    const handleLogout = () => {
        setToken(null);
        navigate('/login');
    };

    return (
        <Stack spacing={2}>
            <Typography variant="h4">Mi perfil</Typography>

            <ContactItem name="Ana García" email="ana.garcia@icesi.edu.co" />

            <Button
                variant="contained"
                color="error"
                onClick={handleLogout}
                sx={{ alignSelf: 'flex-start' }}
            >
                Cerrar sesión
            </Button>
        </Stack>
    );
};

export default SettingsScreen;
