import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react"
import useGames, { Platform } from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { Genre } from "../hooks/useGenres"
import { GameQuery } from "../App"

interface Props {
  gameQurey: GameQuery 
}

const GameGrid = ({ gameQurey}: Props) => {

  const {data, error, isLoading} = useGames( gameQurey)
  const skeletons = [1, 2, 3, 4, 5, 6]
  
  if(error) return <Text>{error}</Text>
  return (
    <>
      <ul>
        <SimpleGrid
          columns={{sm: 1, md: 2, lg: 3, xl:4}}
          padding='10px'
          spacing={6}
        >
        {isLoading && 
          skeletons.map((skeleton) =>
          <GameCardContainer key={skeleton}> 
           <GameCardSkeleton/>
         </GameCardContainer> 
           )
        }  
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}/>
          </GameCardContainer>
        ))}
        </SimpleGrid>
      </ul>
    </>
  )
}

export default GameGrid