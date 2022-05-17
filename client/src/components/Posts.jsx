import { useState, useEffect } from 'react' 

import { Box, Link, Image, Text, Heading, Grid, GridItem } from '@chakra-ui/react'
import { fetchPosts } from '../api/index'

const Posts = ({ colors, colorMode }) => { 
    const { primary, secondary, tertiary, quarternary } = colors
    // posts state
    const [posts, setPosts] = useState([])

    // fetching posts 
    useEffect(() => { 
        fetchPosts().then(result => {
            setPosts(result.data)
        }).catch(err => console.log(err))
    }, [])

    return (
        <>
            <Heading>Popular posts</Heading>
            {/* grid of posts  */}
            <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)']} gap={6}>
                {posts.map(({ _id, caption, image, url }) => (
                    // iterated post
                    <GridItem colSpan={1} key={_id}>
                        <Link href={url} target='_blank'>
                            <Image src={image} borderRadius={10} h={56} w='full' marginBottom={2} boxShadow='lg' />
                            <Text fontWeight='semibold' textAlign='justify'>{caption}</Text>
                        </Link>
                    </GridItem>
                ))}
            </Grid>
        </>
    )
}

export default Posts 