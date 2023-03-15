import { Card,CardBody, CardHeader , Tag, Avatar, TagLabel, Text } from "@chakra-ui/react"

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
        }
    ]
    return (
        <Card maxW="md" m={5} boxShadow='base' p='6' rounded='md' bg='white'>
            <CardHeader>
                <Text>Skills</Text>
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