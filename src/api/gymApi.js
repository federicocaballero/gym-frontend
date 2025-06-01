// src/api/gymApi.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export function createClient(payload) {
  return api.post('/crearAlumno', payload);
}
export function registerAttendance(payload) {
  return api.post('/asistencia', payload);
}
export function registerPaymentExisting(payload) {
  return api.post('/pagar', payload);
}
export function searchByLast3(params) {
  return api.get('/buscar', { params });
}
export function getClientsByQuota(quotaStatus) {
  return api.get('/', { params: quotaStatus === 'all' ? {} : { quotaStatus } });
}
