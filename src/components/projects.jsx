import { Box, Heading, Text, CardBody, Card, CardHeader, Flex, Avatar, Image, Grid, SimpleGrid } from "@chakra-ui/react"

export function Projects() {

    const projects = [
        {
            img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            place: "Departamento del LiiD",
            placeImg: "https://bit.ly/sage-adebayo",
            position: "Backend Developer",
            summary: "With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen."
        },
        {
            img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            place: "Departamento del LiiD",
            placeImg: "https://bit.ly/sage-adebayo",
            position: "Backend Developer",
            summary: "With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen."
        },
        {
            img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            place: "Departamento del LiiD",
            placeImg: "https://bit.ly/sage-adebayo",
            position: "Backend Developer",
            summary: "With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen."
        },
        {
            img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            place: "Departamento del LiiD",
            placeImg: "https://bit.ly/sage-adebayo",
            position: "Backend Developer",
            summary: "With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen."
        }
    ]

    return (
        <Box m={5} boxShadow='base' p='6' rounded='md' bg='white' >
            <Heading size="md">Projects</Heading>
            <SimpleGrid columns={[1, 1,1,3]} gap={3}>
            {projects.map(project => (
                <Card maxW='sm' key={project.place}>
                    <Image
                        objectFit='cover'
                        src={project.img}
                        alt='Chakra UI'
                    />
                    <CardHeader>
                        <Flex spacing='2'>
                            <Flex flex='2' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name='Segun Adebayo' src={project.placeImg} />
                                <Box>
                                    <Heading size='sm'>{project.place}</Heading>
                                    <Text>{project.position}</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Text>
                            {project.summary}
                        </Text>
                    </CardBody>
                </Card>
            ))}
            </SimpleGrid>
        </Box>
    )
}