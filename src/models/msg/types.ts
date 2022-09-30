export type BaseCategories = 'bank' | 'crisis' | 'distribution' | 'governance' | 'slashing' | 'staking' | 'profiles' | 'ibc' | 'ibc-transfer' | 'authz' | 'feegrant' | 'vesting' | 'others'
export type CustomCategories = 'swap_exact_amount_in' | 'create-issue-token' | 'create-pool' | 'create-outbound-tx' | 'create-balancer-token'; // custom modules
export type Categories = BaseCategories | CustomCategories
