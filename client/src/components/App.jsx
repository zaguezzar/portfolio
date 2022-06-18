import { Routes, Route } from "react-router-dom"

import { Box, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react"
import "../index.css"

import Navbar from "./Navbar"
import Homepage from "./Homepage"
import Projects from "./Projects"
import Posts from "./Posts"
import Empty from "./Empty"
import Project from "./Project"
import Contact from "./Contact"
import Success from "./Success"

import ColorsContext from "../contexts/ColorsContext"

const App = () => {
  // hook for setting the color mode
  const { colorMode, toggleColorMode } = useColorMode()

  // custom colors
  const primary = useColorModeValue("#E6D5B8", "#4A3933")
  const secondary = useColorModeValue("#4A3933", "#E6D5B8")
  const tertiary = useColorModeValue("#4A3933", "#E45826")
  const quarternary = "#E45826"
  const hoverColor = useColorModeValue("#c6b39b", "#685349")
  const colors = { primary, secondary, tertiary, quarternary, hoverColor }

  const colorStore = { colors, colorMode, toggleColorMode }

  return (
    // body
    <Box
      bg={primary}
      p="6"
      w="full"
      minH="calc(100vh)"
      color={secondary}
      className="main-body"
      fontFamily="Roboto"
    >
      <ColorsContext.Provider value={colorStore}>
        {/* navbar */}
        <Navbar
          colors={colors}
          toggle={toggleColorMode}
          colorMode={colorMode}
        />
        {/* main container */}
        <Flex
          w={["85%", "75%", "65%", "55%"]}
          mx="auto"
          marginTop={[16, 20]}
          gap={6}
          direction="column"
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Empty />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </Flex>
      </ColorsContext.Provider>
    </Box>
  )
}

export default App
