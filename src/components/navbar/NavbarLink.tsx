import { Box, Typography } from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'
import type { Paths } from '../../types/enums'
import { ReactElement } from 'react'
import { grey, indigo } from '@mui/material/colors'

interface Props {
  to: Paths
  title: string
  icon: ReactElement
}

const NavbarLink = ({ to, title, icon }: Props) => {
  const location = useLocation()
  const { pathname } = location
  const currentPathname = to

  console.log(pathname, currentPathname)

  return (
    <>
      <NavLink to={to} style={{ textDecoration: 'none' }}>
        <Box
          sx={{
            color: pathname === currentPathname ? '#FFF' : grey[500],
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            borderRadius: '1rem',
            gap: '0.5rem',
            backgroundColor: pathname === currentPathname ? indigo[500] : '',
            '&:hover': {
              color: pathname !== currentPathname ? indigo[500] : '',
            },
          }}
        >
          {icon}
          <Typography variant="subtitle1">{title}</Typography>
        </Box>
      </NavLink>
    </>
  )
}

export default NavbarLink
