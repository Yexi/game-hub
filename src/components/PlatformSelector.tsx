import React from 'react'
import usePlatforms from '../hooks/usePlatform'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { Platform } from '../hooks/useGames'


interface Props {
  onSlectedPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}

const PlatformSelector = ({onSlectedPlatform, selectedPlatform}: Props) => {
  const {data, error} = usePlatforms()
  if(error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList >
        {data.map((platform) => (
          <MenuItem key={platform.id}
            onClick={() => onSlectedPlatform(platform)}
          >{platform.name}</MenuItem>
          ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector