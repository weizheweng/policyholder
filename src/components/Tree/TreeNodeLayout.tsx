import { HStack, VStack } from '@chakra-ui/react'
import { TreeNode } from './TreeNode'
import { type Policyholders } from '../../types/Policyholder'
import { TreeChildrenLine } from './TreeChildrenLine'
import { useApiPolicyholders } from '../../hooks-api/useApiPolicyholders'
import { TreeVerticalLine } from './TreeVerticalLine'
import { INIT_LEVEL, MAX_LEVEL } from '../../constants/level'

interface TreeNodeProps {
  code: Policyholders['code'],
  level: number,
  relationType?: Policyholders['relation_type'],
}

export function TreeNodeLayout ({ code, level = 1, relationType }: Partial<TreeNodeProps>) {
  const { data } = useApiPolicyholders(code)
  const isFirstLevel = level === INIT_LEVEL
  const isLastLevel = level === MAX_LEVEL

  if (level === 5) return null
  return (
    <VStack gap={0}>
      {!isFirstLevel && <TreeVerticalLine />}
      <TreeNode
        code={data?.code}
        name={data?.name}
        registrationDate={data?.registration_date}
        introducerCode={data?.introducer_code}
        relationType={relationType}
        isFirstLevel={isFirstLevel}
      />
      {!isLastLevel && <TreeChildrenLine />}
      <HStack gap={4} w="100%">
        <TreeNodeLayout code={data?.left?.code} level={level + 1} relationType={data?.left?.relation_type} />
        <TreeNodeLayout code={data?.right?.code} level={level + 1} relationType={data?.right?.relation_type} />
      </HStack>
    </VStack>
  )
}
