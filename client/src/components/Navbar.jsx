import { Link, useLocation } from "react-router-dom"

import { MdLightMode, MdDarkMode, MdMenu } from "react-icons/md"
import {
  Text,
  Flex,
  IconButton,
  Show,
  Hide,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react"

const Navbar = ({ colors, toggle, colorMode }) => {
  // destructuring the colors object
  const { primary, secondary, quarternary, hoverColor } = colors

  const location = useLocation().pathname

  return (
    // navbar container
    <Flex
      mx="auto"
      w={["100%", "90%", "80%", "70%"]}
      justify="space-between"
      alignItems="center"
    >
      {/* sections */}
      <Flex align="center">
        <Link to="/">
          <Text fontSize={["2xl", "3xl"]} marginRight={8} fontFamily="Ubuntu">
            Zakaria Aguezzar
          </Text>
        </Link>
        <Hide breakpoint="(max-width: 48em)">
          {/* projects section */}
          <Link to="/projects">
            <Text
              fontSize={["md", "lg"]}
              p={4}
              bg={
                location[1] == "p" && location[2] == "r" ? hoverColor : primary
              }
              _hover={{ textDecoration: "underline" }}
            >
              Projects
            </Text>
          </Link>
          {/* posts section */}
          <Link to="/posts">
            <Text
              fontSize={["md", "lg"]}
              p={4}
              bg={location == "/posts" ? hoverColor : primary}
              _hover={{ textDecoration: "underline" }}
            >
              Posts
            </Text>
          </Link>
          <Link to="/contact">
            <Text
              fontSize={["md", "lg"]}
              p={4}
              bg={location == "/contact" ? hoverColor : primary}
              _hover={{ textDecoration: "underline" }}
            >
              Contact
            </Text>
          </Link>
        </Hide>
      </Flex>
      {/* buttons */}
      <Flex gap={2}>
        {/* color mode button */}
        <IconButton
          bg={quarternary}
          color={primary}
          onClick={toggle}
          _hover={{ bg: secondary }}
          icon={colorMode == "light" ? <MdLightMode /> : <MdDarkMode />}
        />
        {/* menu button */}
        <Show breakpoint="(max-width: 48em)">
          <Menu closeOnSelect>
            <MenuButton
              as={IconButton}
              icon={<MdMenu />}
              bg={secondary}
              color={primary}
              _hover={{ bg: hoverColor }}
              _active={{ bg: hoverColor }}
            />
            <MenuList bg={primary} boxSize={10}>
              <Link to="/projects">
                <MenuItem
                  p={4}
                  w="full"
                  bg={location == "/projects" ? hoverColor : primary}
                  _hover={{
                    bg: location == "/projects" ? hoverColor : primary,
                    textDecoration: "underline",
                  }}
                  _focus={{
                    bg: location == "/projects" ? hoverColor : primary,
                  }}
                >
                  <Text fontSize={["md", "lg"]}>Projects</Text>
                </MenuItem>
              </Link>
              <Link to="/posts">
                <MenuItem
                  p={4}
                  w="full"
                  bg={location == "/posts" ? hoverColor : primary}
                  _hover={{
                    bg: location == "/posts" ? hoverColor : primary,
                    textDecoration: "underline",
                  }}
                  _focus={{ bg: location == "/posts" ? hoverColor : primary }}
                >
                  <Text fontSize={["md", "lg"]}>Posts</Text>
                </MenuItem>
              </Link>
              <Link to="/contact">
                <MenuItem
                  p={4}
                  w="full"
                  bg={location == "/contact" ? hoverColor : primary}
                  _hover={{
                    bg: location == "/contact" ? hoverColor : primary,
                    textDecoration: "underline",
                  }}
                  _focus={{ bg: location == "/contact" ? hoverColor : primary }}
                >
                  <Text fontSize={["md", "lg"]}>Contact</Text>
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Show>
      </Flex>
    </Flex>
  )
}

export default Navbar
