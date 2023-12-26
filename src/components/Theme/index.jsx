import { useColorScheme } from '@mui/material/styles'
import { FormControl, Select, MenuItem, InputLabel, Box } from '@mui/material'
import { capitalize } from '@app/utils/helpers'
import { themes } from '@app/utils/statics'

const AppTheme = () => {
  const { mode, setMode } = useColorScheme()
  const handleChange = (e) => {
    setMode(e.target.value)
  }
  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 100,
        display: { sm: 'block', xs: 'none' }
      }}
      size='small'
    >
      <InputLabel
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
            '&:hover fieldset': { borderColor: 'white' }
          }
        }}
      >
        Mode
      </InputLabel>
      <Select
        sx={{ color: 'white' }}
        value={mode}
        label='Mode'
        onChange={handleChange}
      >
        {themes.map((item) => (
          <MenuItem key={item.id} value={item.name}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1
              }}
            >
              <item.icon></item.icon>
              <span>{capitalize(item.name)}</span>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default AppTheme
