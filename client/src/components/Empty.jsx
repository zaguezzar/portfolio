import { Heading, Image, Box }  from '@chakra-ui/react'
import img from '../assets/images/questioning.png'

const Empty = () => { 
    return (
        <Box>
            <Heading textAlign='center' my={14}>There's nothing here</Heading>
            <Image src={img} boxSize={[56, 56]} borderRadius='50%' mx='auto' />
        </Box>
    )
}

export default Empty