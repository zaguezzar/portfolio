import { Heading, Image, Box } from "@chakra-ui/react"

import img from "../assets/images/questioning.png"

const Empty = () => {
  return (
    <Box>
      <Heading textAlign="center" my={14} fontSize={["3xl", "5xl"]}>
        There's nothing here
      </Heading>
      <Image src={img} boxSize={[56, 96]} borderRadius="50%" mx="auto" />
    </Box>
  )
}

export default Empty
