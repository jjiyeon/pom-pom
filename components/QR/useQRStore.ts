import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface QRInit {
  code: string
  setCode: (param: string) => void
}
export const useGameInitStore = create<QRInit>()(
  devtools((set, get) => ({
    code: '',
    setCode: (param) => {
      set((state) => ({ ...state, code: param }))
    },
  }))
)
