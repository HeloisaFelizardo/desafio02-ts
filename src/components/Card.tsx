import { Box, FormControl, Heading, Input, VStack } from "@chakra-ui/react"
import { login } from "../services/login"
import { DButton } from "./DButton"

export const Card = () => {
  return (
    <Box as='main' p='20px' boxShadow='dark-lg' rounded='2xl' bg='white' minW={'400px'} mt={'100px'}>
      <VStack spacing={4} align='center' >
        <Heading as='h2' textAlign={'center'} fontWeight={'bold'} fontSize={'24px'}>Faça o login</Heading>
        <FormControl>
          <VStack spacing={4} align='center' >
            <Input type='name' placeholder="Nome" id="name" name='name' />
            <Input type='email' placeholder="email" id="email" name='email' />
            <Input placeholder="password" type="password" id="password" name="password" />
            <DButton onClick={login} />
          </VStack>
        </FormControl>
      </VStack>
    </Box>
  )
}