import { Box, SvgIcon, Typography } from '@mui/material'
import { Fragment } from 'react'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '@app/assets/trello.svg'
import { Link } from 'react-router-dom'

const AppLogo = () => {
  return (
    <Fragment>
      <AppsIcon sx={{ color: 'white' }} />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <SvgIcon
          component={TrelloIcon}
          inheritViewBox
          sx={{ color: 'white' }}
        />
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Typography
            fontSize={'1.2rem'}
            color={'white'}
            fontWeight={'bold'}
            variant='span'
          >
            Trello
          </Typography>
        </Link>
      </Box>
    </Fragment>
  )
}

export default AppLogo
