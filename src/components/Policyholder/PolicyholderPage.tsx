import { Flex, HStack, Input, IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { usePolicyholder } from '../PolicyholderProvider/usePolicyholder'
import { TreeNodeLayout } from '../Tree/TreeNodeLayout'
import { PolicyholderNotFound } from './PolicyholderFound'
import { useApiPolicyholders } from '../../hooks-api/useApiPolicyholders'

export function PolicyholderPage () {
  const { code, setCode } = usePolicyholder()
  const [inputValue, setInputValue] = useState('')
  const { data } = useApiPolicyholders(code)
  const hasData = !!data && Object.keys(data).length > 0
  const handleSearch = () => {
    setCode(inputValue)
  }

  return (
    <>
      <HStack gap={4} justifyContent="center">
        <Input
          placeholder="C001~C015"
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
      {hasData
        ? <Flex overflow="auto" pb={2} pt={4}>
          <TreeNodeLayout code={code} />
        </Flex>
        : <PolicyholderNotFound />
    }
    </>
  )
}
