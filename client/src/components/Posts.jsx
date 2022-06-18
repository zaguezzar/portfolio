import { useState, useEffect, useContext } from "react"

import ColorsContext from "../contexts/ColorsContext"

import {
  Link,
  Spinner,
  Flex,
  Image,
  Text,
  Heading,
  Grid,
  GridItem,
  SlideFade,
  useDisclosure,
} from "@chakra-ui/react"

import { fetchPosts } from "../api/index"

const Posts = () => {
  // accessing the colors store
  const { colors } = useContext(ColorsContext)

  // animation disclosure
  const { isOpen, onToggle } = useDisclosure()

  // destructuring the colors object
  const { secondary } = colors

  // loading state
  const [isLoading, setLoading] = useState(true)

  // posts state
  const [posts, setPosts] = useState([])

  // fetching for posts
  useEffect(() => {
    fetchPosts()
      .then((result) => {
        setPosts(result.data)
        onToggle()
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      {/* heading and spinner  */}
      <Flex justifyContent="space-between">
        <Heading marginBottom={[4, 10]}>Popular posts</Heading>
        <Spinner color={secondary} hidden={isLoading ? false : true} />
      </Flex>
      <SlideFade in={isOpen} offsetY="60px">
        {/* grid of posts  */}
        <Grid
          templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
          gap={6}
        >
          {posts.map(({ _id, caption, image, url }) => (
            // iterated post
            <GridItem colSpan={1} key={_id}>
              {/* image */}
              <Link href={url} isExternal>
                <Image
                  src={image}
                  borderRadius={10}
                  h={56}
                  w="full"
                  marginBottom={2}
                  boxShadow="xl"
                />
                {/* caption */}
                <Text fontWeight="semibold" textAlign="justify">
                  {caption}
                </Text>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </SlideFade>
    </>
  )
}

export default Posts
