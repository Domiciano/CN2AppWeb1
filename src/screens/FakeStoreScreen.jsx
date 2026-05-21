import { useEffect, useState } from 'react';
import { getPokemonList } from '../services/AuthServices';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth } from '../hooks/useAuth';

const FakeStoreScreen = () => {

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {token} = useAuth();


    
    useEffect(() => {

        console.log("TOKEN EN CONTEXT >>>>>>");
        console.log(token);

        const handleGetProduct = async ()=>{
            let data = await getPokemonList();
            setProductList(data);
            setLoading(false);
        }    

        handleGetProduct();
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
                <CircularProgress size={60} />
            </Box>
        );
    }

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
                Productos
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                }}
            >
                {productList.map((product) => (
                    <Card
                        key={product.id}
                        sx={{
                            width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)', lg: 'calc(25% - 18px)' },
                            flexShrink: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: 3,
                            boxShadow: 3,
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: 6,
                            },
                        }}
                    >
                            <CardMedia
                                component="img"
                                image={product.image}
                                alt={product.title}
                                sx={{
                                    height: 200,
                                    objectFit: 'contain',
                                    p: 2,
                                    bgcolor: '#f9f9f9',
                                }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Chip
                                    label={product.category}
                                    size="small"
                                    color="primary"
                                    variant="outlined"
                                    sx={{ mb: 1, textTransform: 'capitalize' }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    fontWeight="medium"
                                    sx={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        mb: 1,
                                    }}
                                >
                                    {product.title}
                                </Typography>
                                <Box display="flex" alignItems="center" gap={1} mb={1}>
                                    <Rating
                                        value={product.rating?.rate ?? 0}
                                        precision={0.1}
                                        size="small"
                                        readOnly
                                    />
                                    <Typography variant="caption" color="text.secondary">
                                        ({product.rating?.count})
                                    </Typography>
                                </Box>
                                <Typography variant="h6" color="primary" fontWeight="bold">
                                    ${product.price}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ px: 2, pb: 2 }}>
                                <Button variant="contained" fullWidth size="small">
                                    Agregar al carrito
                                </Button>
                            </CardActions>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default FakeStoreScreen;
