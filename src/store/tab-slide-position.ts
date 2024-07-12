import { SlideTabPosition } from '@/types'
import { create } from 'zustand'

export interface TabSlidePositionStore {
    position: SlideTabPosition
    isMenuOpen: boolean
    setPosition: (
        updater:
            | Partial<SlideTabPosition>
            | ((prevPosition: SlideTabPosition) => SlideTabPosition),
    ) => void
    openTriggers: boolean[]
    setOpenTrigger: (index: number, isOpen: boolean) => void
    triggerRefs: React.RefObject<HTMLButtonElement>[]
    setTriggerRef: (
        index: number,
        ref: React.RefObject<HTMLButtonElement>,
    ) => void
}

const useTabSlidePositionStore = create<TabSlidePositionStore>((set) => ({
    position: {
        left: 0,
        width: 0,
        opacity: 0,
    },
    isMenuOpen: false,
    setPosition: (updater) =>
        set((state) => ({
            position:
                typeof updater === 'function'
                    ? updater(state.position)
                    : { ...state.position, ...updater },
        })),
    openTriggers: [],
    setOpenTrigger: (index, isOpen) =>
        set((state) => {
            const newOpenTriggers = [...state.openTriggers]
            newOpenTriggers[index] = isOpen
            return { openTriggers: newOpenTriggers }
        }),
    triggerRefs: [],
    setTriggerRef: (index, ref) =>
        set((state) => {
            const newTriggerRefs = [...state.triggerRefs]
            newTriggerRefs[index] = ref
            return { triggerRefs: newTriggerRefs }
        }),
}))

// Подписка на изменения isMenuOpen
useTabSlidePositionStore.subscribe((state: TabSlidePositionStore) => {
    console.log('isMenuOpen изменился:', state.isMenuOpen)
})

export default useTabSlidePositionStore
