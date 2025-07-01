import React from 'react';
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Divider,
} from '@mui/material';

// Definición de tipos para las props
interface UpdatePaymentFormProps {
  onSubmit?: (paymentData: PaymentFormData) => void;
}

interface PaymentFormData {
  surname: string;
  dniLastDigits: string;
  newAmount: string;
  confirmUpdate: boolean;
}

export const UpdatePaymentForm: React.FC<UpdatePaymentFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<PaymentFormData>({
    surname: '',
    dniLastDigits: '',
    newAmount: '',
    confirmUpdate: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        Update Payment Details
      </Typography>
      <Divider sx={{ mb: 2 }} />

      {/* Campos del formulario */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Surname y Last 3 Digits */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            sx={{ flex: '1 1 200px' }}
            label="Apellido"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Pérez"
            required
          />
          <TextField
            sx={{ flex: '1 1 200px' }}
            label="Ultimos 3 dígitos de DNI"
            name="dniLastDigits"
            value={formData.dniLastDigits}
            onChange={handleChange}
            placeholder="123"
            inputProps={{ maxLength: 3 }}
            required
          />
        </Box>

        {/*Amount */}
        <TextField
          fullWidth
          label="Monto"
          name="newAmount"
          value={formData.newAmount}
          onChange={handleChange}
          placeholder="20000"
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
          style={{ backgroundColor: '#ffcc14 ', color: 'black', borderRadius: '10px' }}
        >
          Registrar pago
        </Button>
      </Box>
    </Box>
  );
};