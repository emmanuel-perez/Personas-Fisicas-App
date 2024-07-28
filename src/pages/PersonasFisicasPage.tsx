import { PersonasFisicasList } from "../components/PersonasFisicasList"
import '../styles/PagesStyles/PersonasFisicasPage.styles.scss';

export const PersonasFisicasPage = () => {
    return (
        <div className="personas-fisicas-container">
            <h1 className="header">Personas Físicas</h1>
            <PersonasFisicasList />
        </div>
    )
}
