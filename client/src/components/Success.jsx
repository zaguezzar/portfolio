import { Heading, Image, Box } from "@chakra-ui/react"

import img from "../assets/images/success.webp"

const Success = () => {
  return (
    <Box>
      <Heading textAlign="center" my={14} fontSize={["3xl", "5xl"]}>
        Message sent!
      </Heading>
      <Image src={img} boxSize={[48, 64]} borderRadius="50%" mx="auto" />
    </Box>
  )
}

export default Success
