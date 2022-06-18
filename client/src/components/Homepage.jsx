import { useEffect, useContext } from "react"
import { Flex, Icon, Box, Text, Heading, Image, Link } from "@chakra-ui/react"

import { MdOutlineFacebook } from "react-icons/md"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SlideFade, useDisclosure } from "@chakra-ui/react"

import img from "../assets/images/cat.jpg"
import "../index.css"

import ColorsContext from "../contexts/ColorsContext"

const Homepage = () => {
  // accessing the colors store
  const { colors } = useContext(ColorsContext)
  // animation disclosure
  const { isOpen, onToggle } = useDisclosure()

  // destructuring the colors object
  const { secondary, hoverColor } = colors

  // animation on load
  useEffect(() => {
    onToggle()
  }, [])

  return (
    <SlideFade in={isOpen} offsetY="60px">
      {/* introduction */}
      <Box
        borderRadius={7}
        bg={hoverColor}
        w="full"
        py={4}
        px={10}
        marginBottom={[0, 3]}
        fontSize={["xs", "md"]}
        textAlign="center"
      >
        Hey, I’m a full-stack developer based in Morocco
      </Box>
      {/* name and picture */}
      <Flex justify="space-between" h="20" marginTop={6}>
        <Flex direction="column">
          <Heading fontWeight="semibold" fontSize={["md", "xl"]}>
            Aguezzar Zakaria
          </Heading>
          <Text fontSize={["xs", "md"]}>
            Digital Craftsman (Designer, Developer)
          </Text>
        </Flex>
        <Image src={img} boxSize={[10, 14]} borderRadius="50%" />
      </Flex>
      <Flex direction="column" gap={6}>
        {/* who am I */}
        <Flex direction="column" gap={2}>
          <Heading
            fontWeight="semibold"
            maxW="max-content"
            fontSize={["md", "xl"]}
            paddingBottom={2}
            borderBottomWidth={2}
            borderColor={secondary}
          >
            Who am I?
          </Heading>
          <Text textAlign="justify" fontSize={["xs", "md"]}>
            Greetings. I’m a full-stack developer and freelancer residing in
            Salé, Morocco. With a passion for design, my vocation is to fulfill
            your dreams in a beautiful way by materialising them into gorgeous
            and appealing Web applications.{" "}
          </Text>
        </Flex>
        {/* biography */}
        <Flex direction="column" gap={2}>
          <Heading
            fontWeight="semibold"
            maxW="max-content"
            fontSize={["md", "xl"]}
            paddingBottom={2}
            borderBottomWidth={2}
            borderColor={secondary}
          >
            Biography
          </Heading>
          {/* year and event */}
          <Flex justify="space-between">
            <Text fontSize={["xs", "md"]} fontWeight="semibold">
              1997
            </Text>
            <Text fontSize={["xs", "md"]}>Born in Rabat, Morocco</Text>
          </Flex>
          <Flex justify="space-between">
            <Text fontSize={["xs", "md"]} fontWeight="semibold">
              2014
            </Text>
            <Text fontSize={["xs", "md"]}>Baccalaureate in Physics</Text>
          </Flex>
          <Flex justify="space-between">
            <Text fontSize={["xs", "md"]} fontWeight="semibold">
              2022
            </Text>
            <Text fontSize={["xs", "md"]}>Degree in Computer Science</Text>
          </Flex>
          <Flex justify="space-between">
            <Text fontSize={["xs", "md"]} fontWeight="semibold">
              2022 - present
            </Text>
            <Text fontSize={["xs", "md"]}>
              Working as a freelance developer
            </Text>
          </Flex>
        </Flex>
        {/* what I like */}
        <Flex direction="column" gap={2}>
          <Heading
            fontWeight="semibold"
            maxW="max-content"
            fontSize={["md", "xl"]}
            paddingBottom={2}
            borderBottomWidth={2}
            borderColor={secondary}
          >
            What I like?
          </Heading>
          <Text textAlign="justify" fontSize={["xs", "md"]}>
            Music - calligraphy - instruments - reading - traveling - editing
            images and videos.
          </Text>
        </Flex>
        {/* where to find me */}
        <Flex direction="column" gap={2}>
          <Heading
            fontWeight="semibold"
            maxW="max-content"
            fontSize={["md", "xl"]}
            paddingBottom={2}
            borderBottomWidth={2}
            borderColor={secondary}
          >
            Where to find me?
          </Heading>
          <Flex align="center" gap={2}>
            <Icon as={MdOutlineFacebook} boxSize={5} />
            <Link href="" isExternal fontSize={["xs", "md"]}>
              fb.com/zaguezzar
            </Link>
          </Flex>
          <Flex align="center" gap={2}>
            <Icon as={FaGithub} boxSize={5} />
            <Link href="" isExternal fontSize={["xs", "md"]}>
              github.com/zaguezzar
            </Link>
          </Flex>
          <Flex align="center" gap={2}>
            <Icon as={FaLinkedin} boxSize={5} />
            <Link href="" isExternal fontSize={["xs", "md"]}>
              linked.in/zaguezzar
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </SlideFade>
  )
}

export default Homepage
