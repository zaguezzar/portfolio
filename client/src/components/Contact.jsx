import { useRef, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { useFormik } from "formik"
import emailjs from "@emailjs/browser"

import {
  Heading,
  Textarea,
  Text,
  FormLabel,
  Button,
  Input,
  Flex,
  Box,
  SlideFade,
  useDisclosure,
} from "@chakra-ui/react"
import ColorsContext from "../contexts/ColorsContext"

const Contact = () => {
  // accessing the colors store
  const { colors } = useContext(ColorsContext)
  // animation disclosure
  const { isOpen, onToggle } = useDisclosure()

  // form reference
  const formRef = useRef()

  // animation on load
  useEffect(() => {
    onToggle()
  }, [])

  // navigation thru the useNavigate hook
  const navigate = useNavigate()

  // destructuring the colors object
  const { primary, secondary, hoverColor } = colors

  // destructuring the env object
  const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env

  // form validation
  const validate = (values) => {
    const errors = {}
    const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    // name validation
    if (!values.contactName) {
      errors.contactName = "Required"
    } else if (values.contactName.length < 4) {
      errors.contactName = "Name must be 4 characters or longer"
    }

    // email validation
    if (!values.contactEmail) {
      errors.contactEmail = "Required"
    } else if (!emailRegEx.test(values.contactEmail)) {
      errors.contactEmail = "Email is invalid"
    }

    // message validation
    if (!values.contactMessage) {
      errors.contactMessage = "Required"
    } else if (values.contactMessage.length < 50) {
      errors.contactMessage = "Message must be 50 characters or longer"
    }

    return errors
  }

  // initialising formik
  const formik = useFormik({
    // form values
    initialValues: {
      contactName: "",
      contactEmail: "",
      contactMessage: "",
    },

    // validation method, called on most user actions
    validate,

    // submission method, called on handleSubmit
    onSubmit: (values) => {
      // sending an email
      emailjs
        .sendForm(
          VITE_SERVICE_ID,
          VITE_TEMPLATE_ID,
          formRef.current,
          VITE_PUBLIC_KEY
        )
        .then(
          (res) => {
            console.log(res.text)
          },
          (err) => {
            console.log(err.text)
          }
        )

      // redirecting to the success component
      navigate("/success")
    },
  })

  return (
    <>
      {/* heading  */}
      <Heading marginBottom={[4, 10]}>Contact</Heading>
      {/* content  */}
      <SlideFade in={isOpen} offsetY="60px">
        {/* form */}
        <form ref={formRef} onSubmit={formik.handleSubmit}>
          <Flex flexDirection="column" gap={6}>
            {/* name */}
            <Box>
              <FormLabel
                htmlFor="contactName"
                fontSize={["md", "xl"]}
                fontWeight="semibold"
              >
                Name
              </FormLabel>
              <Input
                _hover={{ borderColor: secondary }}
                borderColor={hoverColor}
                focusBorderColor={secondary}
                id="contactName"
                name="contactName"
                onChange={formik.handleChange}
                type="text"
                value={formik.values.contactName}
              />
              {formik.errors.contactName ? (
                <Text fontSize={["xs", "sm"]} color={"red.500"}>
                  {formik.errors.contactName}
                </Text>
              ) : null}
            </Box>
            {/* email */}
            <Box>
              <FormLabel
                fontSize={["md", "xl"]}
                fontWeight="semibold"
                htmlFor="contactEmail"
              >
                Email
              </FormLabel>
              <Input
                _hover={{ borderColor: secondary }}
                borderColor={hoverColor}
                focusBorderColor={secondary}
                id="contactEmail"
                name="contactEmail"
                onChange={formik.handleChange}
                type="email"
                value={formik.values.contactEmail}
              />
              {formik.errors.contactEmail ? (
                <Text fontSize={["xs", "sm"]} color={"red.500"}>
                  {formik.errors.contactEmail}
                </Text>
              ) : null}
            </Box>
            {/* message */}
            <Box>
              <FormLabel
                fontSize={["md", "xl"]}
                fontWeight="semibold"
                htmlFor="contactMessage"
              >
                Message
              </FormLabel>
              <Textarea
                _hover={{ borderColor: secondary }}
                borderColor={hoverColor}
                focusBorderColor={secondary}
                h={[24, 56]}
                id="contactMessage"
                name="contactMessage"
                onChange={formik.handleChange}
                value={formik.values.contactMessage}
              />
              {formik.errors.contactMessage ? (
                <Text fontSize={["xs", "sm"]} color={"red.500"}>
                  {formik.errors.contactMessage}
                </Text>
              ) : null}
            </Box>
            {/* submit button */}
            <Button
              _hover={{ bg: hoverColor, color: secondary }}
              bg={secondary}
              color={primary}
              type="submit"
            >
              Submit
            </Button>
          </Flex>
        </form>
      </SlideFade>
    </>
  )
}

export default Contact
