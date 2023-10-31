import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ImageContextProvider } from './hooks/useImageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageContextProvider>
      <App />
    </ImageContextProvider>
  </React.StrictMode>,
)
