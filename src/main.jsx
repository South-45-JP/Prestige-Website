// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import '../dist/output.css'
import { AuthProvider } from './Hooks/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
