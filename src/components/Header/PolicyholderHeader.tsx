import { Box, IconButton, useColorMode, Text, HStack } from '@chakra-ui/react'
import { Logo } from '../Icons/Icons'
import { Header } from './Header'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

const Left = () => {
  const navigate = useNavigate()
  const handleToHomePage = () => navigate('/')
  return (
    <HStack gap={2}>
      <Box h={6} w={6} cursor="pointer">
        <Logo onClick={handleToHomePage} />
      </Box>
      <Text as="b">
        保戶關係查詢
      </Text>
    </HStack>
  )
}

const Right = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isLight = colorMode === 'light'
  return (
    <IconButton
      aria-label="Toggle theme"
      icon={isLight ? <SunIcon /> : <MoonIcon />}
      variant="ghost"
      isRound
      onClick={toggleColorMode}
      w={6}
      h={6}
    />
  )
}

export function PolicyholderHeader () {
  return <Header left={<Left />} right={<Right />} />
}
