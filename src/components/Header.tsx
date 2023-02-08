import { Box, Heading } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box as='header' bg={'orange'} w={'100%'} p={'20px'} textAlign={'center'} fontSize={'48px'} fontWeight={'bold'} boxShadow='xl' rounded='md' >
      <Heading as='h1'>Dio Bank</Heading>
    </Box>
  )
}
