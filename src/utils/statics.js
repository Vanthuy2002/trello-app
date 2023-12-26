import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import PublicIcon from '@mui/icons-material/Public'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterAltIcon from '@mui/icons-material/FilterAlt'

export const themes = [
  {
    id: 1,
    name: 'light',
    icon: LightModeIcon
  },
  {
    id: 2,
    name: 'dark',
    icon: DarkModeIcon
  },
  {
    id: 3,
    name: 'system',
    icon: SettingsBrightnessIcon
  }
]

export const CHIP_CSS = {
  color: 'white',
  bgColor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '&:hover': {
    bgColor: 'teal'
  },
  '.MuiSvgIcon-root': {
    color: 'white'
  }
}

export const menuChips = [
  { id: 1, name: 'Dashboard', icon: SpaceDashboardIcon },
  { id: 2, name: 'Public/Private', icon: PublicIcon },
  { id: 3, name: 'Add to Drive', icon: AddToDriveIcon },
  { id: 4, name: 'Automation', icon: BoltIcon },
  { id: 5, name: 'Filter', icon: FilterAltIcon }
]

export const userGroup = [
  { id: 1, name: 'Jisoo Kim', src: '/Jisoo.jpg' },
  {
    id: 2,
    name: 'Emi Fukuda',
    src: 'https://gamek.mediacdn.vn/133514250583805952/2021/12/18/-1639796221750838916454.jpg'
  },
  { id: 3, name: 'Cindy Baker', src: 'images/avatar/3.jpg' },
  { id: 4, name: 'Agnes Walker', src: 'images/avatar/4.jpg' },
  { id: 5, name: 'Trevor Henderson', src: 'images/avatar/5.jpg' },
  { id: 6, name: 'Jisoo Kim', src: 'images/avatar/5.jpg' }
]
