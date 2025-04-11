
export interface UserProfile {
  id: string
  username: string
  email: string
  wallet_address: string
  wallet_balance?: number
  total_earnings?: number
  created_at: string
  updated_at: string
}

export interface TransactionHistory {
  id: string
  user_id: string
  username: string
  email: string
  transaction_type: 'deposit' | 'withdrawal' | 'transfer'
  amount: number
  status: 'pending' | 'completed' | 'failed'
  created_at: string
  wallet_address: string
}
