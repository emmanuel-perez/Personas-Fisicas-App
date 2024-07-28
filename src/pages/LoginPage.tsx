
import { TextField } from '@mui/material';
import '../styles/PagesStyles/AuthPage.styles.scss';
import '../styles/globalStyles.scss';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { useAuthStore } from '../hooks/useAuthStore';

export const LoginPage = () => {

  const navigate = useNavigate();
  const { loginUser } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    await loginUser(email, password);
  }

  return (
    <div className='auth-page-container d-flex flex-row vh-100'>
      <div className='background-image-container'></div>
      <div className='form-section-container d-flex flex-column'>
        <div className='form-container d-flex- flex-coulumn'>
          <h1 className='header-text'>Inicio de sesión</h1>
          <TextField 
            className='auth-input mb-4' 
            id="outlined-basic" 
            label="Correo electrónico" 
            variant="outlined" 
            onChange={(e: ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)}
          />
          <TextField 
            className='auth-input mb-3' 
            id="outlined-basic" 
            label="Contraseña" variant="outlined" 
            onChange={(e: ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)}
            type='password'
          />
          <button 
            className='auth-button mt-3'
            onClick={ onSubmit }
          >
            Iniciar Sesión
          </button>
          <hr />
          <div>
            <button 
              className='small-grey-text-button'
              onClick={()=> navigate('/sign-up')}
            >
                Crear cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
