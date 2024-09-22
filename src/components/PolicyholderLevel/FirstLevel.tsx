import { VStack, Flex } from '@chakra-ui/react'
import { SecondLevel } from './SecondLevel'
import { Policyholder } from './Policyholder'
import { TreeChildrenLine } from '../Tree/TreeChildrenLine'

export function FirstLevel () {
  return (
    <Flex overflowX="auto" pb={2}>
      <VStack gap={0}>
        <Policyholder />
        <TreeChildrenLine />
        <SecondLevel />
      </VStack>
    </Flex>
  )
}
