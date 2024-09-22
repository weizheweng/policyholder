import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { PolicyholderHeader } from '../Header/PolicyholderHeader'

export function Layout () {
  return (
    <Box maxWidth="1200px" height="100%" margin="0 auto">
      <PolicyholderHeader />
      <Box mt={14} p={4}>
        <Outlet />
      </Box>
    </Box>
  )
}
