import axios from './axiosInstance';
import Cookies from 'js-cookie';
import { login, logout } from '../reducers/authSlice'; // Import Redux actions

const AuthService = {
  register: async (userData, dispatch) => {
    try {
      const response = await axios.post('/register', userData);

      return response.data;
    } catch (error) {
      console.error('Registration Error:', error);
      throw error.response?.data?.message || 'An error occurred during registration';
    }
  },

  login: async (userData, dispatch) => {
    try {
      const response = await axios.post('/login', userData);
      const { Auth_token, user } = response.data;

      // Store token in cookies
      Cookies.set('Auth_token', Auth_token, { expires: 30 });
      Cookies.set('user', JSON.stringify(user), { expires: 30 });

      // Dispatch login action to Redux store
      dispatch(login({ user, authToken: Auth_token }));
      
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'An error occurred during login';
    }
  },

  logout: (dispatch) => {
    // Remove cookies
    Cookies.remove('Auth_token');
    Cookies.remove('user');

    // Dispatch logout action to clear Redux state
    dispatch(logout());

    return "success";
  },

  getAuthToken: () => {
    return Cookies.get('Auth_token') ?? null;
  },

  getUsersData: () => {
    const user = Cookies.get('user');
    return user ? JSON.parse(user) : null;
  },

  checkLoggedIn: (dispatch) => {
    const Auth_token = Cookies.get('Auth_token') ?? null;
    const user = Cookies.get('user') ?? null;
    if(Auth_token && user){
      dispatch(login({ user, authToken: Auth_token }));
      return true
    }
    return false
  },
};

export default AuthService;
