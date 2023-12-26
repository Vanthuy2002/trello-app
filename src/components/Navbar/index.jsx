import {
  Badge,
  Box,
  Button,
  InputAdornment,
  TextField,
  Tooltip
} from '@mui/material'
import {
  HelpOutline,
  NotificationsNone,
  SearchOutlined
} from '@mui/icons-material'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'

import AppTheme from '../Theme'
import Workspace from './Menu/Workspace'
import Reason from './Menu/Reason'
import Templates from './Menu/Templates'
import Started from './Menu/Started'
import Profile from './Menu/Profile'
import AppLogo from '../Logo'

const Navbar = () => {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#2c3e50' : '#4834d4'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* LOGO */}
        <AppLogo />
        {/* MENU */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspace />
          <Reason />
          <Started />
          <Templates />
          <Button
            sx={{
              color: 'white',
              border: 'none',
              '&:hover': { border: 'none' }
            }}
            variant='outlined'
            startIcon={<CreateNewFolderIcon />}
          >
            Create
          </Button>
        </Box>
      </Box>

      {/* ACTION */}
      <Box display='flex' alignItems='center' gap={1}>
        <TextField
          label='Search'
          size='small'
          sx={{
            display: { sm: 'block', xs: 'none' },
            color: 'white',
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' }
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchOutlined sx={{ color: 'white' }} />
              </InputAdornment>
            )
          }}
        />
        <AppTheme />

        <Tooltip title='Noti' arrow>
          <Badge sx={{ cursor: 'pointer' }} color='warning' variant='dot'>
            <NotificationsNone sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>

        <Tooltip title='Need help?' arrow>
          <HelpOutline sx={{ color: 'white' }} />
        </Tooltip>

        <Profile />
      </Box>
    </Box>
  )
}

export default Navbar
