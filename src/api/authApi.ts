import axios from "axios";


export const authApi = () => {

    // const authBaseURl: string = import.meta.env.VITE_AUTH_URL;

    const loginRequest = async (email: string, password: string) => {
        try {
            const response = await axios.post('https://api.toka.com.mx/candidato/api/login/authenticate', {
                Username: `${ email }`,
                Password: `${ password }` 
            });

            console.log('Response:', response.data);
            return response;

        } catch (error) {
            console.error('Error during login:', error);
            return null
        }
    }

    return {
        loginRequest
    }
}
