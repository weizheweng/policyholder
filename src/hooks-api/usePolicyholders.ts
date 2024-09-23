import useSWR from 'swr'
import { mockSWRFetcher } from '../utils/mockSWRFetcher'
import { type Policyholders } from '../types/Policyholder'

export function usePolicyholders (code?: string) {
  const key = code && code !== '' ? `/api/policyholders?code=${code}` : null
  const { data, error, isLoading, mutate } = useSWR<Partial<Policyholders>>(key, mockSWRFetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
