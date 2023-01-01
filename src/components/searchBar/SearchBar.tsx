import SearchIcon from '@mui/icons-material/Search'
import { InputBase, Paper, Stack } from '@mui/material'
import { grey } from '@mui/material/colors'
import { t } from 'i18next'

const SearchBar = () => {

  return (
    <>
      <Paper
        component="form"
        elevation={2}
        sx={{ backgroundColor: grey[300], paddingLeft: '0.5rem' }}
      >
        <Stack direction="row" alignItems={'center'} spacing={1}>
          <SearchIcon color="disabled" />
          <InputBase placeholder={t('interface.searchPet')} />
        </Stack>
      </Paper>
    </>
  )
}

export default SearchBar
