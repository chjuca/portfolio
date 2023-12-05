import { Card, CardBody, Image, Stack, Heading, Center, Text, Button, Link,ListItem,UnorderedList,} from "@chakra-ui/react";

export function Information() {
    const icons = [{name:"mail", url: ""},{name:"github", url: "https://github.com/chjuca"},{name:"linkedin", url: "https://www.linkedin.com/in/chjuca/"}]
    

    const onButtonClick = () => {
        const pdfUrl = "https://drive.google.com/file/d/1AUyvDC8a1UGDh6GmOLpjnEjy0xWo4VVT/view?usp=drive_link";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Carlos Homero Juca Viteri.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
            <Text>
                <UnorderedList>
                <ListItem>🔭 I’m currently working on Lazarillo</ListItem>
                <ListItem>🌱 I’m currently learning React JS and I like to do daily LeetCode challenges.</ListItem>
                <ListItem>💡 Totally geeking out on learning new things! 🌟.</ListItem>
                <ListItem>🏗️ Dedicated to crafting digital experiences that not only meet but exceed user expectations.</ListItem>
                </UnorderedList>
            </Text>
            <Button onClick={onButtonClick}>
                    Download CV
            </Button>
            </Stack >
        </Card>
    );
}
