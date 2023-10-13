import { HStack, List, ListItem, Image, Text, Spinner, Button, Heading} from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"

interface Props {
  onSelectGenre: (genre: Genre) => void
}

const GenreList = ({onSelectGenre}: Props) => {

  const { data, isLoading, error } = useGenres()
  if(error) return null
  if(isLoading) return <Spinner />

  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>
      Genres
    </Heading>
    <List> 
      {data.map((gen) => (
        <ListItem key={gen.id} padding={'5px'}>
          <HStack>
            <Image 
              src={getCroppedImageUrl(gen.image_background)}
              boxSize='32px'
              borderRadius={8}
              objectFit={'cover'}
            />
            <Button fontSize='lg'
              variant='link'
              whiteSpace={'normal'}
              textAlign={'left'}
              onClick={() => onSelectGenre(gen)}
            >{gen.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  )
}

export default GenreList