import React from 'react'
import {Box, Stack, VStack, Heading, HStack, Button, Input, Text} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']} >
            <VStack my={['5','0']} alignItems={'stretch'} w={'full'} px={'4'}> 
                <Heading size='md' textTransform={'uppercase'} textAlign={['center','left']}>Subscribe to get updates</Heading>
                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none'/>
                    <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={'20'} />
                    </Button>
                </HStack>
            </VStack>
            
            <VStack my={['5','0']} w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                <Heading textAlign={'center'}>VIDEO HUB</Heading>
                <Text>All rights received</Text>
            </VStack>

            <VStack w={'full'} my={['5','0']}>
                <Heading textAlign={'center'} size={'md'}>Social Media</Heading>
                <Button colorScheme='whiteAlpha' variant={'Link'} ><a href="https://youtube.com">Youtube</a></Button>
                <Button colorScheme='whiteAlpha' variant={'Link'}><a href='https://instagram.com'>Instagram</a></Button>
                <Button colorScheme='whiteAlpha' variant={'Link'}><a href='https://github.com'>Github</a></Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer