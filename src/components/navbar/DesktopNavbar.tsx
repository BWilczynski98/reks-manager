import { Box, Drawer, Stack, Toolbar } from '@mui/material'
import { t } from 'i18next'
import { Paths } from '../../types/enums'
import Logo from '../logo/Logo'
import NavbarLink from './NavbarLink'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'
import PetsIcon from '@mui/icons-material/Pets'
import HouseIcon from '@mui/icons-material/House'

const DesktopNavbar = () => {
  return (
    <>
      <Drawer variant="permanent">
        <Toolbar>
          <Box>
            <Logo />
            <Stack spacing={1}>
              <NavbarLink
                to={Paths.DASHBOARD}
                title={t('interface.dashboard')}
                icon={<GridViewRoundedIcon />}
              />
              <NavbarLink
                to={Paths.ADOPTIONS}
                title={t('interface.adoptions')}
                icon={<PetsIcon />}
              />
              <NavbarLink
                to={Paths.TEMPORARY_HOME}
                title={t('interface.temporaryHome')}
                icon={<HouseIcon />}
              />
            </Stack>
          </Box>
        </Toolbar>
      </Drawer>
    </>
  )
}

export default DesktopNavbar
