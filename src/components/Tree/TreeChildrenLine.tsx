import { Divider } from '@chakra-ui/react'
import { TreeVerticalLine } from './TreeVerticalLine'

export function TreeChildrenLine () {
  return (
    <>
      <TreeVerticalLine />
      <Divider borderColor="gray.600" w="calc(50% + 8px)" />
    </>
  )
}
