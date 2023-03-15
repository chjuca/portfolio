import * as React from 'react'
import { Center, ChakraProvider, Box } from '@chakra-ui/react'
import { Information } from './components/information';
import { Skill } from './components/skills';


function App() {
  return (
    <ChakraProvider>
      <Center>
        <Box width="100%">
          <Box>
            <Information/>
            <Skill/>
          </Box>
        </Box>
      </Center>
    </ChakraProvider>
  )
}


export default App;