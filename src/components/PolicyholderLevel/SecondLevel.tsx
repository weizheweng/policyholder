import { HStack, VStack } from '@chakra-ui/react'
import { TreeVerticalLine } from '../Tree/TreeVerticalLine'
import { Policyholder } from './Policyholder'
import { ThirdLevel } from './ThirdLevel'
import { TreeChildrenLine } from '../Tree/TreeChildrenLine'

export function SecondLevel () {
  return (
    <>
      <HStack gap={4} w="100%">
        <VStack gap={0} w="50%">
          <TreeVerticalLine />
          <Policyholder />
          <TreeChildrenLine />
        </VStack>
        <VStack gap={0} w="50%">
          <TreeVerticalLine />
          <Policyholder />
          <TreeChildrenLine />
        </VStack>
      </HStack>
      <ThirdLevel />
    </>
  )
}
