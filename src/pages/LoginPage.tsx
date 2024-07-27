
import { TextField } from '@mui/material';
import '../styles/PagesStyles/AuthPage.styles.scss';
import '../styles/globalStyles.scss';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const navigate = useNavigate();

  return (
    <div className='auth-page-container d-flex flex-row vh-100'>
      <div className='background-image-container'></div>
      <div className='form-section-container d-flex flex-column'>
        <div className='form-container d-flex- flex-coulumn'>
          <h1 className='header-text'>Inicio de sesión</h1>
          <TextField className='auth-input' id="outlined-basic" label="Correo electrónico" variant="outlined" />
          <TextField className='auth-input' id="outlined-basic" label="Contraseña" variant="outlined" />
          <button className='auth-button mt-3'>Iniciar Sesión</button>
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
