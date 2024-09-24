import { HStack, VStack } from '@chakra-ui/react'
import { TreeVerticalLine } from '../Tree/TreeVerticalLine'
import { Policyholder } from './Policyholder'
import { type Policyholders } from '../../types/Policyholder'

interface FourthLevelProps {
  firstNode?: Partial<Policyholders>,
  secondNode?: Partial<Policyholders>,
  thirdNode?: Partial<Policyholders>,
  fourthNode?: Partial<Policyholders>,
}

export function FourthLevel ({ firstNode, secondNode, thirdNode, fourthNode }: FourthLevelProps) {
  const nodeList = [firstNode?.left, firstNode?.right, secondNode?.left, secondNode?.right, thirdNode?.left, thirdNode?.right, fourthNode?.left, fourthNode?.right]

  return (
    <HStack gap={4} w="100%">
      {
        nodeList.map((node, index) => (
          <VStack gap={0} key={`${node?.code}-${index}`} w="12.5%">
            <TreeVerticalLine />
            <Policyholder
              code={node?.code}
              name={node?.name}
              registrationDate={node?.registration_date}
              introducerCode={node?.introducer_code}
              relationType={node?.relation_type}
            />
          </VStack>
        ))
      }
    </HStack>
  )
}
