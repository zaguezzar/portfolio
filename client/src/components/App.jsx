import { useState } from 'react'
import logo from '../assets/logo.svg'

import { Routes, Route } from 'react-router-dom'

import { Box, Heading, Text, Image, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react'
import '../index.css'

import Navbar from './Navbar'
import Homepage from './Homepage'
import Projects from './Projects'
import Posts from './Posts'
import Empty from './Empty'

const App = _ => {
  // hook for setting the color mode
  const { colorMode, toggleColorMode } = useColorMode();

  // custom colors 
  const primary = useColorModeValue('#E6D5B8', '#4A3933')
  const secondary = useColorModeValue('#4A3933', '#E6D5B8')
  const tertiary = useColorModeValue('#4A3933', '#E45826')
  const quarternary = '#E45826'
  const hoverColor = useColorModeValue('#c6b39b', '#685349')
  const colors = { primary, secondary, tertiary, quarternary, hoverColor }

  return (
    <Box bg={primary} p='6' w='full' minH='calc(100vh)' color={secondary} className='main-body'>
      <Navbar colors={colors} toggle={toggleColorMode} colorMode={colorMode} />
      {/* main container */}
      <Flex w={['85%', '75%', '65%', '55%']} mx='auto' marginTop={20} gap={6} direction='column'>
          <Routes>
            <Route path='/' element={<Homepage colors={colors} toggle={toggleColorMode} colorMode={colorMode} />} />
            <Route path='/posts' element={<Posts colors={colors} colorMode={colorMode} />} />
            <Route path='/projects' element={<Projects colors={colors} colorMode={colorMode} />} />
            <Route path='*' element={<Empty />} />
          </Routes>
      </Flex>
    </Box>
  )
}

export default App
