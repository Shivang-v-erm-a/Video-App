import { Container, HStack, VStack, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <VStack color={'purple'} h={'full'} justifyContent={'center'}>
            <AiOutlineCloudUpload size={'15vmax'} />
            <form>
                <HStack>
                    <Input 
                        required 
                        type={'file'}
                        css={{
                            '&::file-selector-button':{cursor:'pointer'}
                        }}
                    />
                    <Button type='submit' colorScheme='purple'>Upload</Button>
                </HStack>
            </form>
        </VStack>
    </Container>
  )
}

export default Upload