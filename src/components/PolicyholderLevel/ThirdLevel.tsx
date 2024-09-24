import { HStack, VStack } from '@chakra-ui/react'
import { TreeVerticalLine } from '../Tree/TreeVerticalLine'
import { Policyholder } from './Policyholder'
import { TreeChildrenLine } from '../Tree/TreeChildrenLine'
import { FourthLevel } from './FourthLevel'
import { type RelationType } from '../../types/Policyholder'
import { useApiPolicyholders } from '../../hooks-api/useApiPolicyholders'

interface ThirdLevelProps {
  firstNodeCode: string,
  firstNodeRelationType: RelationType,
  secondNodeCode: string,
  secondNodeRelationType: RelationType,
  thirdNodeCode: string,
  thirdNodeRelationType: RelationType,
  fourthNodeCode: string,
  fourthNodeRelationType: RelationType,
}

export function ThirdLevel ({ firstNodeCode, firstNodeRelationType, secondNodeCode, secondNodeRelationType, thirdNodeCode, thirdNodeRelationType, fourthNodeCode, fourthNodeRelationType }: Partial<ThirdLevelProps>) {
  const { data: firstNodeData } = useApiPolicyholders(firstNodeCode)
  const { data: secondNodeData } = useApiPolicyholders(secondNodeCode)
  const { data: thirdNodeData } = useApiPolicyholders(thirdNodeCode)
  const { data: fourthNodeData } = useApiPolicyholders(fourthNodeCode)
  const nodeList = [firstNodeData, secondNodeData, thirdNodeData, fourthNodeData]
  const relationTypeList = [firstNodeRelationType, secondNodeRelationType, thirdNodeRelationType, fourthNodeRelationType]

  return (
    <>
      <HStack gap={4} w="100%">
        {
          nodeList.map((node, index) => (
            <VStack gap={0} key={`${node?.code}-${index}`} w="25%">
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
      <FourthLevel
        firstNode={firstNodeData}
        secondNode={secondNodeData}
        thirdNode={thirdNodeData}
        fourthNode={fourthNodeData}
      />
    </>
  )
}
