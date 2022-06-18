import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"

import {
  Heading,
  Grid,
  Flex,
  GridItem,
  Text,
  Image,
  Spinner,
  SlideFade,
  useDisclosure,
  Link as ChakraLink,
} from "@chakra-ui/react"

import ColorsContext from "../contexts/ColorsContext"

import { fetchProjects } from "../api/index"

const Projects = () => {
  // accessing the colors store
  const { colors } = useContext(ColorsContext)

  // using the disclosure hook
  const { isOpen, onToggle } = useDisclosure()

  // loading state
  const [isLoading, setLoading] = useState(true)

  // destructuring the colors object
  const { secondary } = colors

  // projects state
  const [projects, setProjects] = useState([])

  // fetching for projects
  useEffect(() => {
    fetchProjects()
      .then((result) => {
        setProjects(result.data)
        onToggle()
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      {/* heading and spinner */}
      <Flex justifyContent="space-between">
        <Heading marginBottom={[4, 10]}>Projects</Heading>
        <Spinner color={secondary} hidden={isLoading ? false : true} />
      </Flex>
      <SlideFade in={isOpen} offsetY="60px">
        {/* grid of projects  */}
        <Grid
          templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
          gap={6}
        >
          {projects.map(({ _id, image, name }) => (
            // iterated project
            <GridItem colSpan={1} key={_id}>
              <ChakraLink href="">
                <Link to={`/projects/${_id}`}>
                  {/* image */}
                  <Image
                    src={image}
                    borderRadius={10}
                    h={64}
                    w="full"
                    marginBottom={2}
                    boxShadow="xl"
                    objectFit="cover"
                    objectPosition="top"
                  />
                  {/* name */}
                  <Text fontWeight="semibold" textAlign="center">
                    {name}
                  </Text>
                </Link>
              </ChakraLink>
            </GridItem>
          ))}
        </Grid>
      </SlideFade>
    </>
  )
}

export default Projects
