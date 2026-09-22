import axios from 'axios';

const api = axios.create({
  // same-origin: Vite proxy (dev) and vercel.json rewrites (prod) forward /api to Express,
  // so the session cookie is first-party and survives a page refresh
  baseURL: '/api',
  withCredentials: true,   // required for session cookies to work
});

export default api;