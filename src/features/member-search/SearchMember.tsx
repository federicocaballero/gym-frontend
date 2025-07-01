import React from 'react';
import {
  Card,
  TextField,
  Button,
  Stack,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// Definición de tipos para las props (si el componente las necesita)
interface SearchMemberProps {
  onSearch?: (dni: string, surname: string) => void;
}

export const SearchMember: React.FC<SearchMemberProps> = ({ onSearch }) => {
  const [dni, setDni] = React.useState<string>('');
  const [surname, setSurname] = React.useState<string>('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(dni, surname);
    }
  };
  // TODO: añadir funcionalidad de buscar socio y si existe un socio, mostrar los datos y registrar asistencia.
  // si no, mostrar mensaje y permitir crear un nuevo socio.
  return (
    <Card sx={{ maxWidth: '100%', width: '100%', boxShadow: 3, backgroundColor: '#281c24' }}>

      <div style={{ backgroundColor: '#281c24', padding: '0 10px 10px 10px', borderRadius: '10px 10px 0 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0 0 0', margin: '0' }} >
          <SearchIcon />
          <h3 style={{ margin: '0', padding: '0', color: 'white' }}>
            Buscar socio
          </h3>
        </div>
        <p style={{ fontSize: '14px', textAlign: 'left', color: 'white' }} >
          Buscar un socio por sus ultimos 3 dígitos de DNI y apellido (opcional)
        </p>

      {/* Formulario de búsqueda */}
        <Box component="form" noValidate autoComplete="off" sx={{ backgroundColor: 'white', padding: '10px', borderRadius: '10px', width: '100%' }}>
          <Stack spacing={2}>
            {/* Campo: DNI */}
            <TextField
              label="Ultimos 3 dígitos de DNI"
              variant="outlined"
              value={dni}
              onChange={(e) => /^\d*$/.test(e.target.value) && setDni(e.target.value)}
              placeholder="Ej: 229"
              fullWidth
            />

            {/* Campo: Apellido */}
            <TextField
              label="Apellido"
              variant="outlined"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Ingrese apellido"
              fullWidth
            />

            {/* Botón de búsqueda */}
            <Button
              variant="contained"
              onClick={handleSearch}
              sx={{ mt: 2 }}
              style={{ backgroundColor: '#ffcc14 ', color: 'black', borderRadius: '10px' }}
            >
              Buscar socio
            </Button>
          </Stack>
        </Box>
      </div>


    </Card>
  );
};