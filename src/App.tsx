import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Adoptions from './page/Adoptions'
import Dashboard from './page/Dashboard'
import TemporaryHome from './page/TemporaryHome'
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
            <Route path={Paths.ADOPTIONS} element={<Adoptions />} />
            <Route path={Paths.TEMPORARY_HOME} element={<TemporaryHome />} />
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
