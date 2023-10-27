import { Button, ButtonGroup } from '@chakra-ui/react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';


function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' style={{ backgroundColor: 'red' }}>Aside</GridItem>
      </Show>
      <GridItem area='main' style={{ backgroundColor: 'yellow' }}>Main</GridItem>

    </Grid >

  )
}

export default App
