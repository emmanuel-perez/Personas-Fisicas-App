import { useDispatch } from "react-redux"
import { onGetPersonasFisicas } from "../features/personasFisicasSlice";
import { personasFisicasApi } from "../api/personasFisicasApi";
import { IPostPersonaFisicaDto } from "../types/PersonaFisicaTypes";


export const usePersonasFisicasStore = () => {

    const dispatch = useDispatch();

    const { getAllPersonasFisicasRequest, addPersonaFisicaRequest, deletePersonaFisicaRequest } = personasFisicasApi();

    const getAllPersonasFisicas = async () => {
        const response = await getAllPersonasFisicasRequest();

        if (response && response.status !== 400) {
            // console.log(`response.data = ${ response.data }`)
            dispatch(onGetPersonasFisicas(response.data));
        }
        return response;
    }

    const addPersonaFisica = async (newPersonaFisica: IPostPersonaFisicaDto) => {
        const response = await addPersonaFisicaRequest(newPersonaFisica);
        if (response && response.status !== 400) {
            //  reloads page
            window.location.reload();
        }
        return response;
    }

    const deletePersonaFisica = async (idPersonaFisica: string) => {
        const response = await deletePersonaFisicaRequest(idPersonaFisica);
        if (response && response.status !== 400) {
            // dispatch(onGetPersonasFisicas(await getAllPersonasFisicasRequest().data));
            window.location.reload();
        }
        return response;
    }

    return {
        addPersonaFisica,
        deletePersonaFisica,
        getAllPersonasFisicas,
    }
}
