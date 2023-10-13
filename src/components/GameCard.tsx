import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"
import Emoji from "./Emoji"
import PlatFormIconList from "./PlatFormIconList"




const GameCard = ({game}: {game: Game}) => {
  return (
    <Card >
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <Emoji rationg_top={game.rating_top}/>
        <HStack justifyContent='space-between'>
        <PlatFormIconList platforms={game.parent_platforms.map((p) => p.platform)}></PlatFormIconList>
        <CriticScore score={game.metacritic}/>
        </HStack>
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard