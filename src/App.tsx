import { Box, createTheme, SxProps, Theme, ThemeProvider, Typography } from '@mui/material'
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
    },
    MuiSlider: {
      styleOverrides: {
        trackInverted: {
          background: 'linear-gradient(90deg, rgba(244, 244, 244, 0.3) 0%, rgba(77,149,0,0.5019257703081232) 100%);',
          borderRadius: 'unset',
        },
        track: {
          background: 'linear-gradient(90deg, rgba(244,244,244,0.3) 0%, rgba(77,149,0,0.5019257703081232) 100%);',
          borderRadius: 'unset',
        },
        mark: {
          height: '16px',
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
          <Typography sx={{ marginBottom: '15px' }}>Custom input component</Typography>
          <NumberInputComponent label='Primary' secondaryLabel='Secondary' width='300' />
        </div>

        <div>
          <Typography sx={{ marginBottom: '15px' }}>Custom Slider</Typography>
          <SliderComponent />
        </div>

        <div>
          <Typography sx={{ marginBottom: '15px' }}>D3 bar Chart</Typography>
          <CommonSVGElements />
        </div>

        <div>
          <Typography sx={{ marginBottom: '15px' }}>D3 Time Series Chart</Typography>
          <TimeSeriesChart />
        </div>
      </Box>
    </ThemeProvider>
  )
}

export default App
