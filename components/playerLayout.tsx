import { Box } from '@chakra-ui/layout'
import Sidebar from './sidebar'

const PlayerLayout = ({children}) => {
  return(
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" bottom="0" left="0" width="250px" backgroundColor="gray.500">
        <Sidebar/>
      </Box>
      <Box margin-left="250px" margin-bottom="100px"> {children} </Box>
      <Box position="absolute" bottom="0" left="0" right="0" height="100px" backgroundColor="gray.800">
        footer
      </Box>
    </Box>
  )
}

export default PlayerLayout
