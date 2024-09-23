type RelationType = 'direct' | 'indirect'

interface ChildPolicyholder {
  code: string,
  name: string,
  registration_date: string,
  introducer_code: string,
  relation_type: RelationType,
}

export interface Policyholders {
  code: string,
  name: string,
  registration_date: string,
  introducer_code: string,
  left: ChildPolicyholder,
  right: ChildPolicyholder,
}
