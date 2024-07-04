import { Store } from '@/types/store'
import { create } from 'zustand'

const useStore = create<Store>()((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
}))
