import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import {
  ContentCut,
  ContentCopy,
  ContentPaste,
  ExpandMore
} from '@mui/icons-material'
import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        sx={{ color: 'white' }}
        id='button-workspace'
        aria-controls={open ? 'menu-workspace' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMore />}
      >
        Workspace
      </Button>
      <Menu
        id='menu-workspace'
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
    </>
  )
}
