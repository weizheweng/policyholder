import { VStack, Flex, HStack, Input, IconButton } from '@chakra-ui/react'
import { SecondLevel } from './SecondLevel'
import { Policyholder } from './Policyholder'
import { TreeChildrenLine } from '../Tree/TreeChildrenLine'
import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useApiPolicyholders } from '../../hooks-api/useApiPolicyholders'

export function FirstLevel () {
  const [code, setCode] = useState('')
  const [inputValue, setInputValue] = useState('')

  const { data } = useApiPolicyholders(code)
  const { left, right } = data ?? {}
  const handleSearch = () => {
    setCode(inputValue)
  }

  return (
    <>
      <HStack gap={4} justifyContent="center">
        <Input
          placeholder="C001~C023"
          width="auto"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <IconButton
          aria-label="Search Policyholders"
          icon={<SearchIcon />}
          onClick={handleSearch}
        />
      </HStack>
      <Flex overflow="auto" pb={2} pt={4}>
        <VStack gap={0}>
          <Policyholder
            code={data?.code}
            name={data?.name}
            registrationDate={data?.registration_date}
            introducerCode={data?.introducer_code}
            isFirstLevel
          />
          <TreeChildrenLine />
          <SecondLevel
            firstNodeCode={left?.code}
            firstNodeRelationType={left?.relation_type}
            secondNodeCode={right?.code}
            secondNodeRelationType={right?.relation_type}
          />
        </VStack>
      </Flex>
    </>
  )
}
