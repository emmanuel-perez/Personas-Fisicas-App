import { TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { usePersonasFisicasStore } from '../hooks/usePersonasFisicasStore';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { IPostPersonaFisicaDto } from '../types/PersonaFisicaTypes';
import '../styles/PagesStyles/AuthPage.styles.scss';
import '../styles/globalStyles.scss';

export const UpdatePersonaFisicaPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { personasFisicas } = useSelector((state: RootState) => state.personasFisicas);
  const { updatePersonaFisica } = usePersonasFisicasStore();
  const personaFisica = personasFisicas.find(pf => pf.idPersonaFisica === id);

  const [formValues, setFormValues] = useState<Partial<IPostPersonaFisicaDto>>({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    rfc: '',
    fechaNacimiento: '',
    usuarioAgrega: 0
  });

  useEffect(() => {
    if (personaFisica) {
      setFormValues({
        nombre: personaFisica.nombre,
        apellidoPaterno: personaFisica.apellidoPaterno,
        apellidoMaterno: personaFisica.apellidoMaterno,
        rfc: personaFisica.rfc,
        fechaNacimiento: personaFisica.fechaNacimiento.toDateString(),
        usuarioAgrega: personaFisica.usuarioAgrega
      });
    }
  }, [personaFisica]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  }

  const handleSubmit = async () => {
    if (id) {
      await updatePersonaFisica(id, formValues);
      navigate('/personas-fisicas');
    }
  }

  return (
    <div className='auth-page-container d-flex flex-row vh-100'>
      <div className='background-image-container' style={{ 'backgroundImage': "url('https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}></div>
      <div className='form-section-container d-flex flex-column'>
        <div className='form-container d-flex- flex-coulumn'>
          <h1 className='header-text'>Actualizar Persona Física</h1>
          <TextField
            className='auth-input mb-4'
            id="nombre"
            label="Nombre"
            variant="outlined"
            name="nombre"
            value={formValues.nombre}
            onChange={handleChange}
          />
          <TextField
            className='auth-input mb-4'
            id="apellidoPaterno"
            label="Apellido Paterno"
            variant="outlined"
            name="apellidoPaterno"
            value={formValues.apellidoPaterno}
            onChange={handleChange}
          />
          <TextField
            className='auth-input mb-4'
            id="apellidoMaterno"
            label="Apellido Materno"
            variant="outlined"
            name="apellidoMaterno"
            value={formValues.apellidoMaterno}
            onChange={handleChange}
          />
          <TextField
            className='auth-input mb-4'
            id="rfc"
            label="RFC"
            variant="outlined"
            name="rfc"
            value={formValues.rfc}
            onChange={handleChange}
          />
          <TextField
            className='auth-input mb-4'
            id="fechaNacimiento"
            label="Fecha de Nacimiento"
            variant="outlined"
            name="fechaNacimiento"
            type="date"
            value={formValues.fechaNacimiento!.split('T')[0]} // Formatear a YYYY-MM-DD
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <button
            className='auth-button mt-3'
            onClick={handleSubmit}
          >
            Actualizar
          </button>
          <hr />
          <div>
            <button
              className='small-grey-text-button'
              onClick={() => navigate('/personas-fisicas')}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
