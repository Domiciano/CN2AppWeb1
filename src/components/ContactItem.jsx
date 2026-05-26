import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ContactItem = ({ name, email }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 1, textAlign: 'left' }}>
            <Avatar>{name[0]}</Avatar>
            <Box>
                <Typography variant="subtitle1" fontWeight="bold">{name}</Typography>
                <Typography variant="body2" color="text.secondary">{email}</Typography>
            </Box>
        </Box>
    );
};

export default ContactItem;
