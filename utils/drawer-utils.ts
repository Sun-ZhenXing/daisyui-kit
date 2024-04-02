import { reactive } from 'vue'

export interface DrawerState {
  name: string
  isDrawerOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
  toggleDrawer: () => void
}
export interface Drawers {
  [key: string]: DrawerState
}

export const drawers = reactive<Drawers>({})

export function createDrawerState(name: string) {
  const drawerState = drawers[name] || reactive<DrawerState>({
    name,
    isDrawerOpen: false,
    openDrawer() {
      drawerState.isDrawerOpen = true
    },
    closeDrawer() {
      drawerState.isDrawerOpen = false
    },
    toggleDrawer() {
      drawerState.isDrawerOpen = !drawerState.isDrawerOpen
    },
  })
  drawers[name] = drawerState
  return drawerState
}
