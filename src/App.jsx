import * as React from 'react'
import { Center, ChakraProvider } from '@chakra-ui/react'
import { Information } from './components/information';
import { Skill } from './components/skills';


function App() {
  return (
    <ChakraProvider>
      <Center>
        <Information/>
        <Skill/>
      </Center>
    </ChakraProvider>
  )
}


export default App;