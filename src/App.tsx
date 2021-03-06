import { AppBar, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import { theme } from './theme'

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography>Technical Assignment</Typography>
          </Toolbar>
        </AppBar>
        Test
        {/* TODO: Add components here */}
      </div>
    </ThemeProvider>
  )
}
