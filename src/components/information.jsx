import { Card, CardBody, Image, Stack, Heading, Center, Text, Button, Link} from "@chakra-ui/react";

export function Information() {
    const icons = [{name:"mail", url: ""},{name:"github", url: "https://github.com/chjuca"},{name:"linkedin", url: "https://www.linkedin.com/in/chjuca/"},{name:"instagram", url: "https://www.linkedin.com/in/chjuca/"}]
    
    return (
        <Card maxW="lg" m={5} boxShadow='base' p='6' rounded='md' bg='white'>
            <CardBody p={2}>
                <Center p={2}>
                <Image
                    borderRadius='full'
                    boxSize="10em"
                    src='https://avatars.githubusercontent.com/u/38107744?v=4'
                    alt='chjuca'
                />
                </Center>
                <Stack p={2} spacing="5" align={"center"}>
                    <Heading size="xl">Carlos Juca</Heading>
                    <Text fontSize='2xl'>FullStack Developer</Text>
                    <Text fontSize='lg' color="gray" >@chjuca</Text>

                    <Button colorScheme='blue' width='6em' p={2}>Contact</Button>
                </Stack>
                <Center p={2}>
                {icons.map(icon => (
                    <Link href={icon.url} isExternal>
                        <Image m={2} boxSize='2em' src={require(`./../assets/${icon.name}.svg`)} alt={`${icon.name}`} key={`${icon.name}`} />
                    </Link>
                ))
                }
                </Center>
            </CardBody>
            <Stack  spacing={5}>
            <Heading size="md">About me</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro autem ipsum et maiores quibusdam similique. Iusto necessitatibus, praesentium ipsa iure eveniet numquam illo incidunt unde tempora, ipsam soluta alias.</Text>
        
            </Stack >
        </Card>
    );
}
