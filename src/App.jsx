import * as React from 'react'
import { Center, ChakraProvider, Box } from '@chakra-ui/react'
import { Information } from './components/information';
import { Skill } from './components/skills';
import { GitHub } from './components/github';


function App() {
  return (
    <ChakraProvider>
      <Center>
        <Box width="100%" display='flex'>
          <Box>
            <Information/>
            <Skill/>
          </Box>
          <Box width="70%">
            <GitHub/>
          </Box>
        </Box>
      </Center>
    </ChakraProvider>
  )
}


export default App;