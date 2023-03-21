import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getPinnedRepositories } from "../api/github.ts";

export function GitHub() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getPinnedRepositories().then((res) => {
      setRepos(res);
    });
  }, []);

  return (
    <Box m={5} boxShadow='base' p='6' rounded='md' bg='white'>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(20em, 1fr))"
      >
        {repos.map((repo) => (
          <Card key={repo.id}>
            <CardHeader>
              <Heading size="md">{repo.name}</Heading>
            </CardHeader>
            <CardBody>
              <Text color="gray">
               {repo.description}
              </Text>
            </CardBody>
            <CardFooter>
              <Link href={repo.url} isExternal>
                View here<ExternalLinkIcon mx='2px' />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
