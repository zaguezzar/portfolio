import { useContext } from "react"
import { Link } from "react-router-dom"

import { Button, Hide } from "@chakra-ui/react"
import { AiOutlineArrowLeft } from "react-icons/ai"

import ColorsContext from "../contexts/ColorsContext"

const BackButton = () => {
  // accessing the colors store
  const { colors } = useContext(ColorsContext)
  // destructuring the colors object
  const { secondary, hoverColor } = colors

  return (
    <Link to="/projects">
      <Button
        leftIcon={<AiOutlineArrowLeft />}
        variant="outline"
        borderColor={secondary}
        color={secondary}
        _hover={{ bg: hoverColor }}
        h={[10, 12]}
      >
        Back <Hide breakpoint="(max-width: 48em)">to projects</Hide>
      </Button>
    </Link>
  )
}

export default BackButton
