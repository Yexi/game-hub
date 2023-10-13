import { Box, Button, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { useState } from 'react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'


export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
  searchText: string
}

function App() {
  // // const [count, setCount] = useState(0)
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: `'nav''main'`,
        lg: `'nav nav''aside main'`
      }}
      
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}
      >
        <GridItem
          area='nav'>
            <NavBar onSearch={(searchText: string) => {
              setGameQuery({...gameQuery, searchText})
            }}/>
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX={5}>
            <GenreList 
            onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
          </GridItem>
        </Show>
        <GridItem area='main'>
          <Box paddingLeft={2} >
            <GameHeading gameQuery={gameQuery}/>
            <Flex paddingBottom={5}>
          <HStack spacing={5} paddingLeft={2} paddingBottom={5}>
          <PlatformSelector 
            selectedPlatform={gameQuery.platform}
            onSlectedPlatform={(platform) => setGameQuery({...gameQuery, platform})}
          />
          <SortSelector
            sortOrder='gameQuery.sortOrder'
            onSelectSortOrder={(sortOrder) => {
              setGameQuery({...gameQuery, sortOrder})
            }}
             />
          </HStack>
          </Flex>
          </Box>
          <GameGrid gameQurey={gameQuery}/>
        </GridItem>
      </Grid>
  )
}

export default App