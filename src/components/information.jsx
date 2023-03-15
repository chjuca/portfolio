import { Card, CardBody, CardFooter, Image, Stack, Heading, Divider, UnorderedList, ListItem, Center} from "@chakra-ui/react";

export function Information() {
    const icons = ["github", "instagram", "linkedin"]
    return (
        <Card maxW="lg" m={5} boxShadow='base' p='6' rounded='md' bg='white'>
            <CardBody>
                <Center>
                <Image
                    borderRadius='full'
                    boxSize='150px'
                    src='https://avatars.githubusercontent.com/u/38107744?v=4'
                    alt='chjuca'
                />
                </Center>
                <Stack mt="6" spacing="3">
                    <Heading size="md">Hello World! 👋</Heading>
                    <UnorderedList>
                        <ListItem>🔭 I'm currently working on Lazarillo</ListItem>
                        <ListItem>🌱 I'm currently learning React JS and I like to do daily LeetCode challenges.</ListItem>
                    </UnorderedList>
                </Stack>
            </CardBody>
            <Divider />
            <Center>
            <CardFooter>
                {icons.map(icon => (
                    <Image m={2} boxSize='4em' src={require(`./../assets/${icon}.png`)} alt={`${icon}`} key={`${icon}`} />
                ))
                }
            </CardFooter>
            </Center>
        </Card>
    );
}
