import axios from "axios";


export const personasFisicasApi = () => {

    const personasFisicasApiUrl: string = import.meta.env.VITE_API_PERSONAS_FISICAS_URL;

    const getAllPersonasFisicasRequest = async () => {
        try {
            const response = await axios.get(`${ personasFisicasApiUrl }/api/personas-fisicas`);

            console.log('Response:', response.data);
            return response;

        } catch (error) {
            console.error('Error during getAllPersonasFisicas:', error);
            return null
        }
    }

    return {
        getAllPersonasFisicasRequest
    }
}
