import React from 'react';
import {
  Box,
  TextField,
  Button,
  Stack,
} from '@mui/material';

interface RegisterAttendanceFormProps {
  onSubmit?: (dniDigits: string) => void;
}

export const RegisterAttendanceForm: React.FC<RegisterAttendanceFormProps> = ({ onSubmit }) => {
  const [dniDigits, setDniDigits] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit && dniDigits.length === 3) onSubmit(dniDigits);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Stack spacing={2} sx={{ maxWidth: 400 }}>
        {/* Campo: Últimos 3 dígitos del DNI */}
        <TextField
          fullWidth
          label="Last 3 Digits of DNI"
          value={dniDigits}
          onChange={(e) => setDniDigits(e.target.value.replace(/\D/g, ''))}
          placeholder="123"
          inputProps={{ maxLength: 3 }}
          required
        />

        {/* Botón de registro */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={dniDigits.length !== 3}
          sx={{ mt: 2 }}
        >
          Register Attendance
        </Button>
      </Stack>
    </Box>
  );
};