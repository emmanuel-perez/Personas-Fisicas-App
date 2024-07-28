import axios from "axios";
import { IPostPersonaFisicaDto } from "../types/PersonaFisicaTypes";


export const personasFisicasApi = () => {

    const personasFisicasApiUrl: string = import.meta.env.VITE_API_PERSONAS_FISICAS_URL;

    const getAllPersonasFisicasRequest = async () => {
        try {
            const response = await axios.get(`${personasFisicasApiUrl}/api/personas-fisicas`);
            // console.log('Response:', response.data);
            return response;

        } catch (error) {
            console.error('Error during getAllPersonasFisicas:', error);
            return null
        }
    }

    const addPersonaFisicaRequest = async (newPersonaFisica: IPostPersonaFisicaDto) => {
        try {
            const response = await axios.post(`${personasFisicasApiUrl}/api/personas-fisicas`, newPersonaFisica);
            console.log('Response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error during addPersonaFisica:', error);
            return null;
        }
    }

    const deletePersonaFisicaRequest = async (idPersonaFisica: string) => {
        try {
            const response = await axios.delete(`${personasFisicasApiUrl}/api/personas-fisicas/${idPersonaFisica}`);
            console.log('Response:', response.data);
            return response;
        } catch (error) {
            console.error('Error during deletePersonaFisica:', error);
            return null;
        }
    }

    return {
        addPersonaFisicaRequest,
        deletePersonaFisicaRequest,
        getAllPersonasFisicasRequest,
    }
}
