import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import {
  ContentCut,
  ContentCopy,
  ContentPaste,
  ExpandMore
} from '@mui/icons-material'
import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'
import { useState } from 'react'

export default function Started() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        sx={{ color: 'white' }}
        id='button-started'
        aria-controls={open ? 'menu-started' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMore />}
      >
        Started
      </Button>
      <Menu
        id='menu-started'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <ContentCut fontSize='small' />
            </ListItemIcon>
            <ListItemText>Cut</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentCopy fontSize='small' />
            </ListItemIcon>
            <ListItemText>Copy</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentPaste fontSize='small' />
            </ListItemIcon>
            <ListItemText>Paste</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}
