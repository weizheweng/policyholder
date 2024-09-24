import { HStack, VStack } from '@chakra-ui/react'
import { TreeVerticalLine } from '../Tree/TreeVerticalLine'
import { Policyholder } from './Policyholder'
import { ThirdLevel } from './ThirdLevel'
import { TreeChildrenLine } from '../Tree/TreeChildrenLine'
import { useApiPolicyholders } from '../../hooks-api/useApiPolicyholders'
import { type RelationType } from '../../types/Policyholder'

interface SecondLevelProps {
  firstNodeCode: string,
  firstNodeRelationType: RelationType,
  secondNodeCode: string,
  secondNodeRelationType: RelationType,
}

export function SecondLevel ({ firstNodeCode, firstNodeRelationType, secondNodeCode, secondNodeRelationType }: Partial<SecondLevelProps>) {
  const { data: firstNodeData } = useApiPolicyholders(firstNodeCode)
  const { data: secondNodeData } = useApiPolicyholders(secondNodeCode)
  const nodeList = [firstNodeData, secondNodeData]
  const relationTypeList = [firstNodeRelationType, secondNodeRelationType]

  return (
    <>
      <HStack gap={4} w="100%">
        {
          nodeList.map((node, index) => (
            <VStack gap={0} key={`${node?.code}-${index}`} w="50%">
              <TreeVerticalLine />
              <Policyholder
                code={node?.code}
                name={node?.name}
                registrationDate={node?.registration_date}
                introducerCode={node?.introducer_code}
                relationType={relationTypeList[index]}
              />
              <TreeChildrenLine />
            </VStack>
          ))
        }
      </HStack>
      <ThirdLevel
        firstNodeCode={firstNodeData?.left?.code}
        firstNodeRelationType={firstNodeData?.left?.relation_type}
        secondNodeCode={firstNodeData?.right?.code}
        secondNodeRelationType={firstNodeData?.right?.relation_type}
        thirdNodeCode={secondNodeData?.left?.code}
        thirdNodeRelationType={secondNodeData?.left?.relation_type}
        fourthNodeCode={secondNodeData?.right?.code}
        fourthNodeRelationType={secondNodeData?.right?.relation_type}
      />
    </>
  )
}
