import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Heading, Grid, GridItem, Text, Image } from '@chakra-ui/react'

import { fetchProjects } from '../api/index'

const Projects = ({ colors, colorMode }) => {
    const { primary, secondary, tertiary, quarternary, hoverColor } = colors
    // projects state
    const [projects, setProjects] = useState([]) 

    // fetch projects
    useEffect(() => { 
        fetchProjects().then(result => { 
            setProjects(result.data)
        }).catch(err => console.log(err))
    }, [])

    return (
        <>
            <Heading>Projects</Heading>
            {/* grid of projects  */}
            <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)']} gap={6}>
                {projects.map(({ _id, image, name, description }) => (
                    // iterated project
                    <GridItem colSpan={1} key={_id}>
                        <Link to={`/projects/${_id}`}>
                            <Image bg={hoverColor} src={image} borderRadius={10} h={64} w='full' marginBottom={2} boxShadow='lg' objectFit='cover' objectPosition='top' />
                            <Text fontWeight='semibold' textAlign='center'>{name}</Text>
                        </Link>
                    </GridItem>
                ))}
            </Grid>
        </>
    )
}

export default Projects 