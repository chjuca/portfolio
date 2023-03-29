import * as React from "react";
import {
  ChakraProvider,
  Box,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { Information } from "./components/information";
import { Tools } from "./components/tools";
import { GitHub } from "./components/github";
import { SoftSkill } from "./components/softSkills";
import { Projects } from "./components/projects";
import { Experience } from "./components/experience";

function App() {
  return (
    <ChakraProvider>
      <Stack direction={["column", "row"]}>
        <Box width={["100%", "50%", "40%", "30%"]}>
          <Information />
        </Box>
        <Box width={["100%", "50%", "60%", "70%"]}>
          <GitHub />
          <SimpleGrid columns={[1, 1, 1, 2]} gap={2} spacing={10} m={5}>
            <Box>
              <Tools/>
            </Box>
            <Box>
              <SoftSkill/>
            </Box>
          </SimpleGrid>
          <Projects />
          <Experience/>
        </Box>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
