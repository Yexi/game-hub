import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/react.svg'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface Props{
  onSearch: (searchText: string) => void
}

const NavBar = ({onSearch}: Props) => {
  return (
    <div>
      <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
      </HStack>
    </div>
  )
}

export default NavBar