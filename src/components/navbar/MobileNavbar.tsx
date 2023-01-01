import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar, Box,
  IconButton,
  Stack,
  Toolbar
} from '@mui/material'
import { grey } from '@mui/material/colors'
import AccountButton from '../accountButton/AccountButton'
import SearchBar from '../searchBar/SearchBar'

const MobileNavbar = () => {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <IconButton>
              <MenuIcon sx={{ color: grey[50] }} />
            </IconButton>

            <SearchBar />
            <AccountButton />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MobileNavbar
