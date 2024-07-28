import { useNavigate } from 'react-router-dom';
import '../styles/ComponentStyles/Navbar.styles.scss';

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="navbar">
                {/* <div className="navbar-item" onClick={() => navigate('/')}>
                    <p>Inicio</p>
                </div> */}
                <div className="navbar-buttons">
                    <button className="navbar-item" onClick={() => navigate('/personas-fisicas')}>
                        Personas Fisicas
                    </button>
                    <button className="navbar-item" onClick={() => navigate('/reports')}>
                        Reportes
                    </button>
                </div>
            </div>
            <hr className="navbar-divider" />
        </>
    );
}
