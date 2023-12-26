import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: 16
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            fontSize: '0.875rem',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.light
            },
            '&:hover, &:focus': {
              '.MuiOutlinedInput-notchedOutline': {}
            }
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: () => {
          return {
            color: 'teal',
            fontSize: '0.875rem'
          }
        }
      }
    }
  },

  colorSchemes: {}
})

export default theme
