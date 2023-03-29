import { Box, Heading, Text, CardBody, Card, CardHeader, Flex, Avatar, Image, SimpleGrid } from "@chakra-ui/react"

export function Projects() {

    const projects = [
        {
            img: "liid.png",
            place: "Departamento del LiiD",
            placeImg: "liid.jpeg",
            name: "Backend Developer",
            summary: "Developed an API for the Investigación e Innovación Docente web page using Node.js Modeled and implemented a PostgreSQL database."
        },
        {
            img: "reas.png",
            place: "Web Applications",
            placeImg: "utpl.png",
            name: "Recursos Educativos Abiertos - UTPL",
            summary: "Application developed in the field of Web Applications where you can consult the resources uploaded on the platform, whether they are videos, images or texts. This application was made with Angular 8 and connection to the firebase database."
        },
        {
            img: "liv.png",
            place: "Departamento del LiiD",
            placeImg: "liid.jpeg",
            name: "LIV Application",
            summary: "Application developed for the laboratory of the LiiD UTPL with the objective of consulting the resources uploaded by the teacher of the subject of Pharmacology, which includes a division by units, filters by subject and the option of taking student evaluations.."
        },
    ]

    return (
        <Box m={5} boxShadow='base' p='6' rounded='md' bg='white' >
            <Heading size="md" p={4}>Projects</Heading>
            <SimpleGrid columns={[1, 1,1,3]} gap={3}>
            {projects.map(project => (
                <Card maxW='sm' key={project.place}>
                    <Image
                        objectFit='cover'
                        src={require(`../assets/projects/${project.img}`) }
                        alt='Chakra UI'
                    />
                    <CardHeader>
                        <Flex spacing='2'>
                            <Flex flex='2' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name='Segun Adebayo' src={require(`../assets/places/${project.placeImg}`)} />
                                <Box>
                                    <Heading size='sm'>{project.place}</Heading>
                                    <Text>{project.name}</Text>
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