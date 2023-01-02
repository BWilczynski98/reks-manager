import { Stack, Typography } from '@mui/material'
import { t } from 'i18next'

const Logo = () => {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Typography variant="h4">{t('interface.logo.firstPart')}</Typography>
        <Typography variant="h4">{t('interface.logo.secondPart')}</Typography>
      </Stack>
    </>
  )
}

export default Logo
