import { useDispatch } from "react-redux"
import { onGetPersonasFisicas } from "../features/personasFisicasSlice";
import { personasFisicasApi } from "../api/personasFisicasApi";


export const usePersonasFisicasStore = () => {

    const dispatch = useDispatch();

    const { getAllPersonasFisicasRequest } = personasFisicasApi();

    const getAllPersonasFisicas = async () => {
        const response = await getAllPersonasFisicasRequest();

        if (response && response.status !== 400) {
            console.log(`response.data = ${ response.data }`)
            dispatch(onGetPersonasFisicas(response.data));
        }
        return response;
    }

    return {
        getAllPersonasFisicas,
    }
}
