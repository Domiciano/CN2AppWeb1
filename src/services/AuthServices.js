import axios from 'axios';

//Promise<Array>
const getPokemonList = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log(response);
    return response.data;
}

const login = async () => {
    let authRequest = {
        username: 'admin',
        password: '123456'
    };
    let response = await axios.post(
        'http://192.168.131.145:8081/api/v1/auth/login', 
        authRequest
    );
    console.log(response);
}
export {getPokemonList, login};