import { Tag, TagLabel, Heading, Box, Stack } from "@chakra-ui/react"

export function SoftSkill() {
    const skills = [
        {
            name: "Comunication",
        },
        {
            name: "Collaboration",
        },
        {
            name: "Adaptability",
        },
        {
            name: "Analysis",
        },
        {
            name: "Agile",
        }
    ]
    return (
        
        <Stack boxShadow='base' p='4' rounded='md' bg='white' spacing={"4"}>
                <Heading size="md">Skills</Heading>
            <Box>
            {
                skills.map(skill => (
                    <Tag size='lg' borderRadius='full' key={skill.name} m={2}>
                        <TagLabel>{skill.name}</TagLabel>
                    </Tag>
                ))
            }
            </Box>
        </Stack>
    )
}


// styled-components

// https://fullstackopen.com/en/


// https://roadmap.sh/react



// https://www.remax.com.ec/