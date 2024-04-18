import React from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            <form>
                <VStack w={['full', '96']} spacing={'8'} alignItems={'stretch'} m={'auto'} my={'16'} >
                    <Heading>Video Hub</Heading>
                    <Input placeholder='Name' type='text' required focusBorderColor='purple.500' />
                    <Input placeholder='Email' type='email' required focusBorderColor='purple.500' />
                    <Input placeholder='Password' type='password' required focusBorderColor='purple.500' />
                    <Button colorScheme='purple' type='submit'>Sign Up</Button>
                </VStack>
            </form>
        </Container>
  )
}

export default Signup