import React from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Button,
} from '@mui/material';

// Definición de tipos para las props
interface CreateMemberFormProps {
  onSubmit?: (memberData: MemberFormData) => void;
}

interface MemberFormData {
  dni: string;
  lastName: string;
  phone: string;
  trialDays: string;
  firstName: string;
  role: string;
  membershipAmount: string;
}

export const CreateMemberForm: React.FC<CreateMemberFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<MemberFormData>({
    dni: '',
    lastName: '',
    phone: '',
    trialDays: '',
    firstName: '',
    role: 'Client', // Valor por defecto
    membershipAmount: '',
  });

  const roles = ['Client', 'Trainer', 'Admin']; // Opciones para el rol

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Fila 1: DNI y Last Name */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            sx={{ flex: '1 1 200px' }}
            label="DNI"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            placeholder="12345678"
            required
          />
          <TextField
            sx={{ flex: '1 1 200px' }}
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Pérez"
            required
          />
        </Box>

        {/* Fila 2: Phone y Trial Days */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            sx={{ flex: '1 1 200px' }}
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+54 11 1234-5678"
            required
          />
          <TextField
            sx={{ flex: '1 1 200px' }}
            label="Trial Days"
            name="trialDays"
            value={formData.trialDays}
            onChange={handleChange}
            type="number"
          />
        </Box>

        {/* Fila 3: First Name y Role */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            sx={{ flex: '1 1 200px' }}
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Juan"
            required
          />
          <TextField
            select
            sx={{ flex: '1 1 200px' }}
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            {roles.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Fila 4: Membership Amount */}
        <TextField
          fullWidth
          label="Membership Amount"
          name="membershipAmount"
          value={formData.membershipAmount}
          onChange={handleChange}
          placeholder="15000"
          type="number"
          required
        />
      </Box>

      {/* Botón de submit */}
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Create Member
        </Button>
      </Box>
    </Box>
  );
};