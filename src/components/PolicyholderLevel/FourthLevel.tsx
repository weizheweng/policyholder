import { HStack, VStack } from '@chakra-ui/react'
import { TreeVerticalLine } from '../Tree/TreeVerticalLine'
import { Policyholder } from './Policyholder'

export function FourthLevel () {
  return (
    <HStack gap={4} w="100%">
      <VStack gap={0} w="12.5%">
        <TreeVerticalLine />
        <Policyholder />
      </VStack>
      <VStack gap={0} w="12.5%">
        <TreeVerticalLine />
        <Policyholder />
      </VStack>
      <VStack gap={0} w="12.5%">
        <TreeVerticalLine />
        <Policyholder />
      </VStack>
      <VStack gap={0} w="12.5%">
        <TreeVerticalLine />
        <Policyholder />
      </VStack>
      <VStack gap={0} w="12.5%">
        <TreeVerticalLine />
        <Policyholder />
      </VStack>
      <VStack gap={0} w="12.5%">
        <TreeVerticalLine />
        <Policyholder />
      </VStack>
      <VStack gap={0} w="12.5%">
        <TreeVerticalLine />
        <Policyholder />
      </VStack>
      <VStack gap={0} w="12.5%">
        <TreeVerticalLine />
        <Policyholder />
      </VStack>
    </HStack>
  )
}
