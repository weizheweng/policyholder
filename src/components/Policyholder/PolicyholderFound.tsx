import { SearchIcon } from '@chakra-ui/icons'
import { Heading, VStack } from '@chakra-ui/react'

export function PolicyholderNotFound () {
  return (
    <VStack p={30} align="center" spacing={6}>
      <SearchIcon boxSize="200px" />
      <Heading fontSize={['lg', 'xl']}>No Data</Heading>
    </VStack>
  )
}
