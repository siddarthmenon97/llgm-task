import { createTheme, ThemeProvider } from '@mui/material'
import { NumberInputComponent, SliderComponent } from './components/slider'
import './App.css'

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
    MuiInputAdornment : {
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

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <h1 className="text-4xl font-bold underline">
          Hello world!
        </h1>
        <SliderComponent />
        <NumberInputComponent />
      </>
    </ThemeProvider>
  )
}

export default App
