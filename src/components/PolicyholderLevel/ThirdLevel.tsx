import { HStack, VStack } from '@chakra-ui/react'
import { TreeVerticalLine } from '../Tree/TreeVerticalLine'
import { Policyholder } from './Policyholder'
import { TreeChildrenLine } from '../Tree/TreeChildrenLine'
import { FourthLevel } from './FourthLevel'

export function ThirdLevel () {
  return (
    <>
      <HStack gap={4} w="100%">
        <VStack gap={0} w="25%">
          <TreeVerticalLine />
          <Policyholder />
          <TreeChildrenLine />
        </VStack>
        <VStack gap={0} w="25%">
          <TreeVerticalLine />
          <Policyholder />
          <TreeChildrenLine />
        </VStack>
        <VStack gap={0} w="25%">
          <TreeVerticalLine />
          <Policyholder />
          <TreeChildrenLine />
        </VStack>
        <VStack gap={0} w="25%">
          <TreeVerticalLine />
          <Policyholder />
          <TreeChildrenLine />
        </VStack>
      </HStack>
      <FourthLevel />
    </>
  )
}
