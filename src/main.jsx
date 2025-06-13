import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React Router
import { BrowserRouter } from 'react-router-dom'
// App Providers
import AppProviders from './Contexts/AppProviders.jsx'
// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProviders>
        <App />
      </AppProviders>
    </BrowserRouter>
  </StrictMode>,
)