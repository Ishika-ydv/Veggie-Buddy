import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData extends SignInData {
  name: string;
  confirmPassword: string;
}

export const authService = {
  async signIn(data: SignInData): Promise<AuthResponse> {
    try {
      const response = await axios.post(`${API_URL}/auth/signin`, data);
      const { user, token } = response.data;
      
      // Store token in localStorage
      localStorage.setItem('token', token);
      
      return { user, token };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || 'Failed to sign in');
      }
      throw new Error('Failed to sign in');
    }
  },

  async signUp(data: SignUpData): Promise<AuthResponse> {
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, data);
      const { user, token } = response.data;
      
      // Store token in localStorage
      localStorage.setItem('token', token);
      
      return { user, token };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || 'Failed to sign up');
      }
      throw new Error('Failed to sign up');
    }
  },

  signOut(): void {
    localStorage.removeItem('token');
  },

  getToken(): string | null {
    return localStorage.getItem('token');
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}; 