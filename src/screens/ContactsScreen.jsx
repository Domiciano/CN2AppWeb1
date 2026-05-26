import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ContactItem from '../components/ContactItem';

const contacts = [
    { name: 'Carlos Ramírez', email: 'c.ramirez@icesi.edu.co' },
    { name: 'Sofía Mora', email: 's.mora@icesi.edu.co' },
    { name: 'Luis Torres', email: 'l.torres@icesi.edu.co' },
    { name: 'Valentina Cruz', email: 'v.cruz@icesi.edu.co' },
];

const ContactsScreen = () => {
    return (
        <>
            <Typography variant="h4" gutterBottom>Contactos</Typography>
            <Stack divider={<Divider />}>
                {contacts.map((contact) => (
                    <ContactItem key={contact.email} name={contact.name} email={contact.email} />
                ))}
            </Stack>
        </>
    );
};

export default ContactsScreen;
