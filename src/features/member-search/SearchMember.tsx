import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
  Box,
} from '@mui/material';

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

  return (
    <Card sx={{ maxWidth: 400, boxShadow: 3 }}>
      <CardContent>
        {/* Título y descripción */}
        <Typography variant="h6" gutterBottom>
          Search Member
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Find a member to enable other actions
        </Typography>

        {/* Formulario de búsqueda */}
        <Box component="form" noValidate autoComplete="off">
          <Stack spacing={2}>
            {/* Campo: DNI */}
            <TextField
              label="Last 3 digits of DNI"
              variant="outlined"
              value={dni}
              onChange={(e) => /^\d*$/.test(e.target.value) && setDni(e.target.value)}
              placeholder="123"
              fullWidth
            />

            {/* Campo: Apellido */}
            <TextField
              label="Surname"
              variant="outlined"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Enter surname"
              fullWidth
            />

            {/* Botón de búsqueda */}
            <Button
              variant="contained"
              onClick={handleSearch}
              sx={{ mt: 2 }}
            >
              Search
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};