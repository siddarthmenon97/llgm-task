import { Box, createTheme, SxProps, Theme, ThemeProvider } from '@mui/material'
import { NumberInputComponent, SliderComponent } from './components/slider'
import './App.css'
import { CommonSVGElements } from './components/d3-component'
import { TimeSeriesChart } from './components/d3-time-series'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4d9500',
    },
  },
  typography: {
    allVariants: {
      color: '#eeeeee',
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: '#949494',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: '#949494'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#949494'
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#949494'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#949494'
        }
      }
    }
  }
})

const boxWrapper1: SxProps<Theme> = {
  border: '1px solid red',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '50px',
  padding: '20px 0'
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={boxWrapper1}>

        <div>
          <NumberInputComponent />
        </div>

        <div>
          <SliderComponent />
        </div>

        <div>
          <CommonSVGElements />
        </div>

        <div>
          <TimeSeriesChart />
        </div>
      </Box>
    </ThemeProvider>
  )
}

export default App
