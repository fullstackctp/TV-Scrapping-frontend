import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import WeatherNight from 'mdi-material-ui/WeatherNight'
import WeatherSunny from 'mdi-material-ui/WeatherSunny'
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({

});

const ModeToggler = props => {
  // ** Props
  const { settings, saveSettings } = props

  const theme = useTheme();
  const classes = useStyles({ theme,settings });

  const handleModeChange = mode => {
    saveSettings({ ...settings, mode : mode })
  }

  const handleModeToggle = () => {
    if (settings.mode === 'light') {
      handleModeChange('dark')
    } else {
      handleModeChange('light')
    }
  }

  return (
    <IconButton sx={{color: settings?.mode === 'light' ? '#424147' : 'white',}} color='inherit' aria-haspopup='true' onClick={handleModeToggle}>
      {settings.mode === 'dark' ? <WeatherSunny /> : <WeatherNight />}
    </IconButton>
  )
}

export default ModeToggler
