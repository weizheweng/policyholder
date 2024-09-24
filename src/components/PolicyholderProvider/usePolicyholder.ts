import { useContext } from 'react'
import { PolicyholderContext } from './PolicyholderProvider'

export function usePolicyholder () {
  const policyholderContext = useContext(PolicyholderContext)

  if (!policyholderContext) throw new Error('PolicyholderContext has to be used within <PolicyholderContext.Provider>')

  return policyholderContext
}
