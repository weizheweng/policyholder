export type RelationType = 'direct' | 'indirect'

export interface Policyholders {
  code: string,
  name: string,
  registration_date: string,
  introducer_code: string,
  relation_type?: RelationType,
  left: Policyholders,
  right: Policyholders,
}
