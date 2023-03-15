import { Card,CardBody, CardHeader , Tag, Avatar, TagLabel, Heading } from "@chakra-ui/react"

export function Skill() {
    const skills = [
        {
            name: "Angular",
            icon: "angular",
            color: "red"
        },
        {
            name: "React",
            icon: "react",
            color: "blue"
        },
        {
            name: "CSS",
            icon: "css-modules",
            color: "white"
        },
        {
            name: "Docker",
            icon: "docker",
            color: "blue"
        },
        {
            name: "Express",
            icon: "express",
            color: "gray"
        },
        {
            name: "Git",
            icon: "git",
            color: "orange"
        },
        {
            name: "GitHub",
            icon: "github",
            color: "gray"
        },{
            name: "MongoDB",
            icon: "mongodb",
            color: "green"
        },
        {
            name: "PostgresQL",
            icon: "postgresql",
            color: "blue"
        },
        {
            name: "Mongoose",
            icon: "mongoose",
            color: "red"
        },
        {
            name: "Sequelize",
            icon: "sequelize",
            color: "blue"
        },
        {
            name: "Node",
            icon: "node",
            color: "green"
        },
        {
            name: "TypeScript",
            icon: "typescript",
            color: "blue"
        },
    ]
    return (
        <Card maxW="lg" m={5} boxShadow='base' p='4' rounded='md' bg='white'>
            <CardHeader>
                <Heading size="md">Skills</Heading>
            </CardHeader>
            <CardBody>
            {
                skills.map(skill => (
                    <Tag size='lg' colorScheme={skill.color} borderRadius='full' key={skill.name} m={2}>
                        <Avatar
                            src={require(`../assets/technologies/${skill.icon}.png`)}
                            size='xs'
                            name={skill.name}
                            ml={-1}
                            mr={2}
                        />
                        <TagLabel>{skill.name}</TagLabel>
                    </Tag>
                ))
            }
            </CardBody>
        </Card>
    )
}


// styled-components

// https://fullstackopen.com/en/


// https://roadmap.sh/react



// https://www.remax.com.ec/