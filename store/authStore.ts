import { create } from 'zustand'

type User = {
  _id: string
  userName: string | null
  realNameFirst: string | null
  realNameLast: string| null
  email: string
  isVerified: boolean
  followers: string[]
  followings: string[]
  class: string | null
  extraClass: string[] | null
  profile: string | null
  createdAt: string
  updatedAt: string
  __v: number
}

type AuthState = {
  user: User | null
  token: string | null
  login: (user: User, token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  login: (user, token) => set({ user, token }),
  logout: () => set({ user: null, token: null }),
}))