import { VStack, Text, Flex, Icon, Button } from '@chakra-ui/react'
import { type RelationType } from '../../types/Policyholder'
import { format } from 'date-fns'
import { DATE_FORMAT } from '../../constants/format'
import { ChevronUpIcon, CloseIcon } from '@chakra-ui/icons'
import { usePolicyholder } from '../PolicyholderProvider/usePolicyholder'
import { useApiPolicyholdersTop } from '../../hooks-api/useApiPolicyholdersTop'
import { useEffect, useState } from 'react'

interface PolicyholderProps {
  code: string,
  name: string,
  registrationDate: string,
  introducerCode: string,
  relationType: RelationType,
  isFirstLevel?: boolean,
}

const BoxStyle = {
  borderColor: 'gray.600',
  borderWidth: 1,
  padding: 2,
  borderRadius: 8,
  minWidth: 52,
  minHeight: 28,
}

export function Policyholder ({ code, name, registrationDate, introducerCode, relationType, isFirstLevel }: Partial<PolicyholderProps>) {
  const [codeTop, setCodeTop] = useState('')
  const { changeCode } = usePolicyholder()
  const { data } = useApiPolicyholdersTop(codeTop)
  const isNotData = !code && !name && !registrationDate && !introducerCode

  const getBackgroundColor = () => {
    if (isFirstLevel) return 'yellow.200'
    if (relationType === 'direct') return 'green.200'
    if (relationType === 'indirect') return 'gray.200'
  }

  const handleChangeCode = () => {
    if (!code) return
    changeCode(code)
  }

  const handleTop = () => {
    setCodeTop(code || '')
  }

  useEffect(() => {
    if (!data) return
    changeCode(data?.code || '')
  }, [changeCode, data])

  return (
    <Flex sx={BoxStyle} bgColor={getBackgroundColor()}>
      {
        !isNotData
          ? <VStack gap={1} alignItems="flex-start">
            <Flex gap={1} alignItems="center" justifyContent="space-between" w="100%">
              <Text fontSize="sm" color="black">
                編號：
                <Button
                  color="blue.600"
                  fontSize="sm"
                  variant="link"
                  onClick={handleChangeCode}
                >
                  {code}
                </Button>
              </Text>
              <Icon as={ChevronUpIcon} cursor="pointer" color="black" onClick={handleTop} />
            </Flex>
            <Text fontSize="sm" color="black">
              姓名：
              {name}
            </Text>
            {
              registrationDate &&
                <Text fontSize="sm" color="black">
                  加入(介紹)日期：
                  {format(new Date(registrationDate), DATE_FORMAT)}
                </Text>
            }
            <Text fontSize="sm" color="black">
              介紹人編號：
              {introducerCode}
            </Text>
          </VStack>
          : <Flex alignItems="center" justifyContent="center" w="100%">
            <Icon as={CloseIcon} />
          </Flex>
      }
    </Flex>
  )
}
