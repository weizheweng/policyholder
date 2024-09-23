import mockData from '../data/mockData.json'
import { type Policyholders } from '../types/Policyholder'

export function getMockData () {
  return mockData as Policyholders[]
}
