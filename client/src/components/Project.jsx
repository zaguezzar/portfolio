import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"

import { FaExternalLinkSquareAlt } from "react-icons/fa"
import {
  Heading,
  Flex,
  Grid,
  Image,
  Text,
  SlideFade,
  useDisclosure,
  Icon,
} from "@chakra-ui/react"

import BackButton from "./BackButton"
import ColorsContext from "../contexts/ColorsContext"

import { fetchProject } from "../api/index"

const Project = () => {
  // accessing the colors store
  const { colors } = useContext(ColorsContext)
  // getting the parameters using the useParams hook
  const params = useParams()

  // destructuring the colors object
  const { primary, secondary, tertiary, quarternary, hoverColor } = colors

  // animation state
  const { isOpen, onToggle } = useDisclosure()

  // fetching for the project
  const [project, setProject] = useState({})
  useEffect(() => {
    fetchProject(params.projectId).then((result) => {
      setProject(result.data[0])
      onToggle()
    })
  }, [])

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        marginBottom={[4, 10]}
      >
        {/* heading */}
        <Heading>{project?.name}</Heading>
        {/* link button*/}
        <Flex alignItems="center" gap={2}>
          <Grid
            h={[10, 12]}
            w={[10, 12]}
            borderRadius={6}
            borderColor={secondary}
            color={secondary}
            _hover={{ bg: hoverColor }}
            borderWidth={1}
            placeItems="center"
          >
            <a href={project?.url} target="_blank">
              <Icon w={4} h={4} as={FaExternalLinkSquareAlt} />
            </a>
          </Grid>
          {/* navigation button */}
          <BackButton colors={colors} />
        </Flex>
      </Flex>
      {/* content */}
      <SlideFade in={isOpen} offsetY="60px">
        <Flex flexDirection="column" gap={3}>
          {/* description */}
          <Heading fontWeight="semibold" fontSize={["md", "xl"]}>
            Description
          </Heading>
          <Text textAlign="justify" marginBottom={4}>
            {project?.description}
          </Text>
          {/* preview image */}
          <Heading fontWeight="semibold" fontSize={["md", "xl"]}>
            Preview
          </Heading>
          <Image
            src={project?.image}
            borderRadius={10}
            w="full"
            boxShadow="lg"
          />
        </Flex>
      </SlideFade>
    </>
  )
}

export default Project
