import axios from 'axios';
import { BASE_URL, PORT } from '../utils/Constants';

//Promise<Array>
const getPokemonList = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log(response);
    return response.data;
}

const login = async (username, password) => {
    let authRequest = {
        username: username,
        password: password
    };
    let response = await axios.post(
        `http://${BASE_URL}:${PORT}/api/v1/auth/login`, 
        authRequest
    );
    return response.data;
}
export {getPokemonList, login};