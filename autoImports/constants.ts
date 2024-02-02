import { Capacitor } from '@capacitor/core'

export const appName = 'HyeConnect V2'
export const appDescription = 'Connecting Armenians Everywhere'

export const inviteDropsDownData = [
  { icon: 'edit', name: 'Default' },
  { icon: 'edit', name: 'Popular' },
  { icon: 'edit', name: 'By date create' },
  { icon: 'edit', name: 'By date update' },
]

// TODO: Do we really need this
export const isNativePlatform = process.client ? Capacitor.isNativePlatform() : false
export const longDateFormatHour12 = 'MMMM DD [a]t hh:mm A'
export const longDateFormatHour24 = 'MMMM DD [a]t H:mm'

// search stuff
export const searchTabs = [
  {
    id: '1',
    name: 'Projects',
  },
  {
    id: '2',
    name: 'People',
  },
  {
    id: '3',
    name: 'Groups',
  },
  {
    id: '4',
    name: 'Forum',
  },
  {
    id: '5',
    name: 'Posts',
  },
  {
    id: '6',
    name: 'Events',
  },
]

export const searchLocationData = [
  {
    value: '1',
    label: 'India',
    icons: 'location',
  },
  {
    value: '2',
    label: 'Austalia',
    icons: 'location',
  },
  {
    value: '3',
    label: 'Antartica',
    icons: 'location',
  },
  {
    value: '4',
    label: 'Spane',
    icons: 'location',
  },
  {
    value: '5',
    label: 'Europe',
    icons: 'location',
  },
  {
    value: '6',
    label: 'Shrilanka',
    icons: 'location',
  },
  {
    value: '7',
    label: 'America',
    icons: 'location',
  },
  {
    value: '1',
    label: 'Kambodia',
    icons: 'location',
  },
  {
    value: '1',
    label: 'South Africa',
    icons: 'location',
  },
  {
    value: '1',
    label: 'Newseland',
    icons: 'location',
  },
  {
    value: '1',
    label: 'Japan',
    icons: 'location',
  },
]
