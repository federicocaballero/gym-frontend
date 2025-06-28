import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Collapse,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Checkbox,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface CollapsibleSectionProps {
  title: string;
  icon?: React.ReactNode; // Opcional: puedes pasar un ícono de MUI o personalizado
  children: React.ReactNode;
  defaultExpanded?: boolean; // Opcional: define si está expandido por defecto
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  icon,
  children,
  defaultExpanded = false,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper elevation={2} sx={{ mb: 2, overflow: 'hidden' }}>
      {/* Encabezado clickeable */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
        sx={{
          cursor: 'pointer',
          backgroundColor: expanded ? '#f5f5f5' : 'inherit',
        }}
        onClick={toggleExpand}
      >
        <Box display="flex" alignItems="center">
          {icon && <Box mr={1}>{icon}</Box>}
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        </Box>
        <IconButton size="small" onClick={toggleExpand}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>

      {/* Contenido colapsable */}
      <Collapse in={expanded}>
        <Divider />
        <Box p={2}>{children}</Box>
      </Collapse>
    </Paper>
  );
};