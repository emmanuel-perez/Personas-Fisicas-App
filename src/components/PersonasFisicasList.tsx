import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { usePersonasFisicasStore } from '../hooks/usePersonasFisicasStore';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import '../styles/ComponentStyles/PersonasFisicasList.styles.scss';
import { AddPersonaFisicaModal } from './AddPersonaFisicaModal';

export const PersonasFisicasList = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const { getAllPersonasFisicas } = usePersonasFisicasStore();
    const { personasFisicas } = useSelector((state: RootState) => state.personasFisicas);

    const handleDelete = (idPersonaFisica: number) => {
        console.log(idPersonaFisica)
    }

    useEffect(() => {
        getAllPersonasFisicas();

    }, []);

    const columns: GridColDef[] = [
        { field: 'idPersonaFisica', headerName: 'ID', width: 90, headerAlign: 'center', align: 'center' },
        { field: 'nombre', headerName: 'Nombre', width: 150, headerAlign: 'center', align: 'center' },
        { field: 'apellidoPaterno', headerName: 'Apellido Paterno', width: 150, headerAlign: 'center', align: 'center' },
        { field: 'apellidoMaterno', headerName: 'Apellido Materno', width: 150, headerAlign: 'center', align: 'center' },
        { field: 'rfc', headerName: 'RFC', width: 150, headerAlign: 'center', align: 'center' },
        { field: 'fechaNacimiento', headerName: 'Fecha de Nacimiento', width: 180, headerAlign: 'center', align: 'center' },
        { field: 'fechaRegistro', headerName: 'Fecha de Registro', width: 180, headerAlign: 'center', align: 'center' },
        { field: 'fechaActualizacion', headerName: 'Fecha de Actualización', width: 180, headerAlign: 'center', align: 'center' },
        { field: 'activo', headerName: 'Activo', width: 100, type: 'boolean', headerAlign: 'center', align: 'center' },
        {
            field: 'actions',
            headerName: 'Acciones',
            width: 150,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%'
                    }}
                >
                    <IconButton
                        sx={{ color: 'red' }}
                        onClick={() => handleDelete(params.row.idPersonaFisica)}
                    >
                        <DeleteIcon />
                    </IconButton>
                    <IconButton
                        sx={{ color: '#01376e' }}
                        onClick={() => handleDelete(params.row.idPersonaFisica)}
                    >
                        <EditIcon />
                    </IconButton>
                </Box>
            ),
        },
    ];

    const rows = personasFisicas.map(persona => ({
        id: persona.idPersonaFisica,
        ...persona,
        fechaNacimiento: new Date(persona.fechaNacimiento).toLocaleDateString(),
        fechaRegistro: new Date(persona.fechaRegistro).toLocaleString(),
        fechaActualizacion: new Date(persona.fechaActualizacion).toLocaleString(),
    }));

    return (
        <>
            <button 
                className='add-persona-fisica-button'
                onClick={()=> setModalOpen(true)}
            >
                Añadir persona física
            </button>
            <Box sx={{ height: '100vh', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    // pageSize={5}
                    pageSizeOptions={[20]}
                // checkboxSelection
                />
            </Box>
            <Modal
                open={modalOpen}
                onClose={()=> setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <AddPersonaFisicaModal />
                </Box>
            </Modal>
        </>
    );
};


const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '0.5rem',
    boxShadow: 24,
    p: 4,
};
