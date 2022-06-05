import NextImage from 'next/image'
import NextLink from 'next/link'

import { Box, List, ListItem, ListIcon, Divider, Center, LinkBox, LinkOverlay } from '@chakra-ui/layout'
import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from 'react-icons/md'
const navMenu = [
  { name: 'Home', icon: MdHome, href: '/' },
  { name: 'Search', icon: MdSearch, href: '/search' },
  { name: 'Library', icon: MdLibraryMusic, href: '/library' },
]

const musicMenu = [
  { name: 'CreatePlaylist', icon: MdPlaylistAdd, href: '/playlist' },
  { name: 'Favorite', icon: MdFavorite, href: '/favorite' },
]

const playList = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`)

const Sidebar = () => {
  return(
    <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="10px" color="gray">
      <Box paddingY="20px" height="100%">
        <Box margin-bottom="10px" paddingX="10px">
          <NextImage src="/traxlogo.svg" height={60} width={120}/>
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((item, index) => {
              return (
                <ListItem key={index} paddingX="20px" margin="0" fontSize="16px">
                  <LinkBox>
                    <NextLink href={item.href} passHref>
                      <LinkOverlay>
                        <ListIcon as={item.icon} color="white" marginRight="20px" />
                          {item.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
            )})}
          </List>
        </Box>
        <Divider color="gray.800" marginTop="20px" width="80%"/>
         <Box marginBottom="20px" marginTop="20px">
          <List spacing={2}>
            {musicMenu.map((item, index) => {
              return (
                <ListItem key={index} paddingX="20px" margin="0" fontSize="16px">
                  <LinkBox>
                    <NextLink href={item.href} passHref>
                      <LinkOverlay>
                        <ListIcon as={item.icon} color="white" marginRight="20px" />
                          {item.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
            )})}
          </List>
        </Box>
        <Divider color="gray.800" marginTop="20px" width="80%"/>
        <Box height="66%" overflowY="auto" paddingY="20px">
        <List spacing={2} marginBottom="100px">
            {playList.map((playListItem, index) => {
              return (
                <ListItem key={index} paddingX="20px" margin="0" fontSize="16px">
                  <LinkBox>
                    <NextLink href={`playlist${index+1}`} passHref>
                      <LinkOverlay>
                          {playListItem}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
            )})}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar;
