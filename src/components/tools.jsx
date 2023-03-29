import { Tag, Avatar, TagLabel, Heading, Stack, Box } from "@chakra-ui/react"

export function Tools() {
    const tools = [
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
        <Stack boxShadow='base' p='4' rounded='md' bg='white' spacing={"4"}>
                <Heading size="md">Tools</Heading>
                <Box>
            {
                tools.map(tool => (
                    <Tag size='lg' colorScheme={tool.color} borderRadius='full' key={tool.name} m={2}>
                        <Avatar
                            src={require(`../assets/technologies/${tool.icon}.png`)}
                            size='xs'
                            name={tool.name}
                            ml={-1}
                            mr={2}
                        />
                        <TagLabel>{tool.name}</TagLabel>
                    </Tag>
                ))
            }
                </Box>
        </Stack>
    )
}