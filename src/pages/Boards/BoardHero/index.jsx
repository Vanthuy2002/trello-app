import {
  AddCard,
  ContentPaste,
  DeleteForever,
  DragHandle,
  ExpandMore
} from '@mui/icons-material'
import {
  Box,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Tooltip,
  Typography
} from '@mui/material'
import { useState } from 'react'
const COLUMN_HEAD = '50px'
const COLUMN_FOOT = '56px'

const BoardHero = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#1976d2',
        height: 'calc(100vh - 55px - 65px)',
        display: 'flex'
      }}
    >
      {/* Column */}
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'
        }}
        minWidth={250}
        margin={2}
        borderRadius={'6px'}
      >
        <Box
          padding={2}
          height={COLUMN_HEAD}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography sx={{ fontWeight: 'bold' }} variant='5'>
            Column Title
          </Typography>

          <Tooltip title='More action' arrow>
            <ExpandMore
              onClick={handleClick}
              sx={{
                color: 'text.primary',
                cursor: 'pointer'
              }}
            />
          </Tooltip>

          <Menu
            id='menu-workspace'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <AddCard fontSize='small' />
                </ListItemIcon>
                <ListItemText>Add new card</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize='small' />
                </ListItemIcon>
                <ListItemText>Paste here</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <DeleteForever fontSize='small' />
                </ListItemIcon>
                <ListItemText>Delete this column</ListItemText>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        {/* <Box sx={{}}>Card Body</Box> */}

        <Box
          padding={2}
          height={COLUMN_FOOT}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Button startIcon={<AddCard />}>Add new card</Button>
          <Tooltip title='Drap to move'>
            <DragHandle sx={{ cursor: 'grab' }} />
          </Tooltip>
        </Box>
      </Box>
    </section>
  )
}

export default BoardHero
