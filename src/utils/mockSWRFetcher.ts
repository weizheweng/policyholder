import queryString from 'query-string'
import { getMockData } from './getMockData'

export const mockSWRFetcher = async (url: string) => {
  const parsedUrl = queryString.parseUrl(url)
  const { query } = parsedUrl
  const mockData = getMockData()

  if (parsedUrl.url === '/api/policyholders') {
    const { code } = query
    if (!code) return {}
    return mockData.find(info => info.code === code) ?? {}
  }

  return {}
}
