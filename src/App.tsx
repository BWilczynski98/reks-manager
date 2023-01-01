import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from './page/Dashboard'
import { ResetStyles } from './styles/ResetStyle'
import { materialTheme } from './theme/MaterialTheme'
import { Paths } from './types/enums'

function App() {
  return (
    <>
      <ThemeProvider theme={materialTheme}>
        <ResetStyles />
        <BrowserRouter>
          <Routes>
            <Route path={Paths.DASHBOARD} index element={<Dashboard />} />
            <Route
              path="*"
              element={<Navigate replace to={Paths.DASHBOARD} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
