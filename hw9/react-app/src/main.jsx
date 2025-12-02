import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider  store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
  </StrictMode>
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js') 
      .then(reg => console.log('SW registered:', reg))
      .catch(err => console.log('SW registration failed:', err));
  });
}

