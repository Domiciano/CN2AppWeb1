import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { getPokemonList } from '../services/AuthServices';
import Typography from '@mui/material/Typography';


const FakeStoreScreen = ()=>{ 

    const [productList, setProductList] = useState([]);

    const handleGetPokemonList = async () => {
        let data = await getPokemonList();
        setProductList(() => data);
        console.log(data);
    }

    useEffect(()=>{
        handleGetPokemonList();
    }, []);

    return (
        <Stack spacing={2} direction="column">
            <Typography variant='h2'>Productos</Typography>
            {/**Lista de productos */}
            {productList.map(
                (value) => 
                    (
                        <>
                            <img src={value.image}></img>
                            <Typography key={value.id}>
                                {value.title}
                            </Typography>
                        </>
                    )
            )}
        </Stack>
    );
}
export default FakeStoreScreen;
