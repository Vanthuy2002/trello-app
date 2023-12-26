import { CHIP_CSS, menuChips, userGroup } from '@app/utils/statics'
import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from '@mui/material'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'

const BoardBar = () => {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: 65,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #fff',
        gap: 2,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        {menuChips.map((menu) => (
          <Chip
            key={menu.id}
            clickable
            sx={CHIP_CSS}
            icon={<menu.icon />}
            label={menu.name}
          />
        ))}
      </Box>

      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Button
          sx={{ color: 'white', border: '1px solid white' }}
          variant='outlined'
          startIcon={<PersonAddAlt1Icon />}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          total={7}
          sx={{
            '& .MuiAvatar-root': {
              width: 30,
              height: 30,
              fontSize: '16px'
            }
          }}
        >
          {userGroup.map((user) => (
            <Tooltip key={user.id} title={user.name} arrow>
              <Avatar alt={user.name} src={user.src} />
            </Tooltip>
          ))}
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
