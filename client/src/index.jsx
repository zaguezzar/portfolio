import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

import App from './components/App'

// extending the theme colors 
const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: true,
  colors: {
    brand: {
      light: '#E6D5B8',
      dark: '#4A3933'
    }
  }
})

// rendering the app 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* script for enabling the color mode */}
      <ColorModeScript initialColorMode={theme.initialColorMode} />

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
