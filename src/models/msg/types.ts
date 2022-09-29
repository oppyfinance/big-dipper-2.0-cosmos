export type BaseCategories = 'bank' | 'crisis' | 'distribution' | 'governance' | 'slashing' | 'staking' | 'profiles' | 'ibc' | 'ibc-transfer' | 'authz' | 'feegrant' | 'vesting' | 'others'
export type CustomCategories = 'create-issue-token' | 'create-pool' | 'create-outbound-tx'; // custom modules
export type Categories = BaseCategories | CustomCategories
