import axios from 'axios';

//Promise<Array>
const getPokemonList = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log(response);
    return response.data;
}

const login = async () => {
    
}

export {getPokemonList};