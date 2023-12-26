import PropTypes from 'prop-types'
import { Fragment } from 'react'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@app/theme'
import { BrowserRouter } from 'react-router-dom'

const Providers = ({ children }) => {
  return (
    <Fragment>
      <BrowserRouter>
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          {children}
        </CssVarsProvider>
      </BrowserRouter>
    </Fragment>
  )
}

Providers.propTypes = {
  children: PropTypes.node.isRequired
}
export default Providers
