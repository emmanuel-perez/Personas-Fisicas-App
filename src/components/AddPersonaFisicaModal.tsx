import { TextField } from '@mui/material';
import '../styles/PagesStyles/AuthPage.styles.scss';
import '../styles/globalStyles.scss';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { usePersonasFisicasStore } from '../hooks/usePersonasFisicasStore';

export const AddPersonaFisicaModal = () => {

  const navigate = useNavigate();
  const { addPersonaFisica } = usePersonasFisicasStore();

  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [rfc, setRfc] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [usuarioAgrega] = useState(0);  // Assuming user ID is 0 for now

  const onSubmit = async () => {
    const fechaActual = new Date().toISOString();
    const newPersonaFisica = {
      fechaRegistro: fechaActual,
      fechaActualizacion: fechaActual,
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      rfc,
      fechaNacimiento,
      usuarioAgrega
    };

    await addPersonaFisica(newPersonaFisica);
    navigate('/personas-fisicas');  
  }

  return (
    <div className='auth-page-container d-flex flex-row vh-60'>
      <div className='background-image-container'></div>
      <div className='form-section-container d-flex flex-column'>
        <div className='form-container d-flex- flex-coulumn'>
          <h1 className='header-text'>Añadir Persona Física</h1>
          <TextField 
            className='auth-input mb-4' 
            id="nombre" 
            label="Nombre" 
            variant="outlined" 
            onChange={(e: ChangeEvent<HTMLInputElement>)=> setNombre(e.target.value)}
          />
          <TextField 
            className='auth-input mb-4' 
            id="apellidoPaterno" 
            label="Apellido Paterno" 
            variant="outlined" 
            onChange={(e: ChangeEvent<HTMLInputElement>)=> setApellidoPaterno(e.target.value)}
          />
          <TextField 
            className='auth-input mb-4' 
            id="apellidoMaterno" 
            label="Apellido Materno" 
            variant="outlined" 
            onChange={(e: ChangeEvent<HTMLInputElement>)=> setApellidoMaterno(e.target.value)}
          />
          <TextField 
            className='auth-input mb-4' 
            id="rfc" 
            label="RFC" 
            variant="outlined" 
            onChange={(e: ChangeEvent<HTMLInputElement>)=> setRfc(e.target.value)}
          />
          <TextField 
            className='auth-input mb-4' 
            id="fechaNacimiento" 
            label="Fecha de Nacimiento" 
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined" 
            onChange={(e: ChangeEvent<HTMLInputElement>)=> setFechaNacimiento(e.target.value)}
          />
          <button 
            className='auth-button mt-3'
            onClick={ onSubmit }
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  )
}
