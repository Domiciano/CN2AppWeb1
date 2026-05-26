import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Outlet, useNavigate } from 'react-router-dom';

const DRAWER_WIDTH = 220;

const navItems = [
    { label: 'Tienda', path: '/' },
    { label: 'Contactos', path: '/contacts' },
    { label: 'Configuración', path: '/settings' },
];

const MainLayout = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                sx={{ width: DRAWER_WIDTH, '& .MuiDrawer-paper': { width: DRAWER_WIDTH } }}
            >
                <Typography variant="h6" sx={{ p: 2 }}>Computación II</Typography>
                <Divider />
                <List>
                    {navItems.map((item) => (
                        <ListItemButton key={item.path} onClick={() => navigate(item.path)}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {/* Aqui va un componente importante */}
            </Box>
        </Box>
    );
};

export default MainLayout;
