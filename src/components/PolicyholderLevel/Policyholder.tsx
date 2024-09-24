import { Box, VStack, Text, Flex, Icon } from '@chakra-ui/react'
import { type RelationType } from '../../types/Policyholder'
import { format } from 'date-fns'
import { DATE_FORMAT } from '../../constants/format'
import { CloseIcon } from '@chakra-ui/icons'

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
  const isNotData = !code && !name && !registrationDate && !introducerCode

  const getBackgroundColor = () => {
    if (isFirstLevel) return 'yellow.200'
    if (relationType === 'direct') return 'green.200'
    if (relationType === 'indirect') return 'gray.200'
  }

  return (
    <Flex sx={BoxStyle} bgColor={getBackgroundColor()}>
      {
        !isNotData
          ? <VStack gap={1} alignItems="flex-start">
            <Text fontSize="sm" color="black">
              編號：
              {code}
            </Text>
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
