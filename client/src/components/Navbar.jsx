import { Text, Flex, IconButton, Show, Hide, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { MdLightMode, MdDarkMode, MdMenu } from 'react-icons/md'

import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ colors, toggle, colorMode }) => { 
    const { primary, secondary, tertiary, quarternary, hoverColor } = colors

    const location = useLocation().pathname

    return (
        // navbar container
        <Flex mx='auto' w={['100%', '90%', '80%', '70%']} justify='space-between'>
            {/* sections */}
            <Flex align='center'>
                <Link to='/'>
                    <Text fontSize={['lg', 'xl', '2xl', '3xl']} marginRight={8}>Zakaria Aguezzar</Text>
                </Link>
                <Hide breakpoint='(max-width: 48em)'>
                    <Link to='/projects'>
                        <Text fontSize={['md', 'lg']} p={4} bg={location == '/projects' ? hoverColor : primary} _hover={{textDecoration: 'underline'}}>Projects</Text>
                    </Link>
                    <Link to='/posts'>
                        <Text fontSize={['md', 'lg']} p={4} bg={location == '/posts' ? hoverColor : primary} _hover={{textDecoration: 'underline'}}>Posts</Text>
                    </Link>
                </Hide>
            </Flex>
            {/* buttons */}
            <Flex gap={2}>
                {/* color mode button */}
                <IconButton bg={quarternary} color={primary} onClick={toggle} _hover={{ bg: secondary }} icon={colorMode == 'light' ? <MdLightMode /> : <MdDarkMode />} />
                {/* menu button */}
                <Show breakpoint='(max-width: 48em)'>
                    <Menu>
                        <MenuButton as={IconButton} icon={<MdMenu />} bg={secondary} color={primary} />
                        <MenuList bg={primary} boxSize={10}>
                            <Link to='/projects'>
                                <Text fontSize={['md', 'lg']} p={4} bg={location == '/projects' ? hoverColor : primary} _hover={{textDecoration: 'underline'}}>Projects</Text>
                            </Link>
                            <Link to='/posts'>
                                <Text fontSize={['md', 'lg']} p={4} bg={location == '/posts' ? hoverColor : primary} _hover={{textDecoration: 'underline'}}>Posts</Text>
                            </Link>
                        </MenuList>
                    </Menu>
                </Show>
            </Flex>
        </Flex>
    )
}

export default Navbar