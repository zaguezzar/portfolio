import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react"
import "./index.css"

import App from "./components/App"

// extending the theme
const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
}
const theme = extendTheme({ config })

// rendering the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* script for enabling the color mode */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
