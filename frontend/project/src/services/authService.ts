import api from './api';
import { User } from '../types';

export const authService = {
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  async signup(name: string, email: string, password: string, role: string): Promise<{ user: User; token: string }> {
    const response = await api.post('/auth/signup', { name, email, password, role });
    return response.data;
  },

  async getProfile(): Promise<User> {
    const response = await api.get('/auth/profile');
    return response.data;
  },

  logout() {
    localStorage.removeItem('token');
  }
};