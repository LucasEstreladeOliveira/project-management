import type { NextPage } from 'next'
import { 
  IconButton, 
  InputAdornment, 
  TextField,
} from '@material-ui/core';
import { Add, Search } from '@material-ui/icons';
import ProjectTable from '../src/components/ProjectTable'
import BasePage  from "../src/components/BasePage"
import { useRouter } from 'next/router';

const Projects: NextPage = () => {

  const router = useRouter();

  return (
    <BasePage pageName='Project Management'>
        <IconButton onClick={() => router.push('/project/new')}>
        <Add />
      </IconButton>
      <IconButton onClick={() => router.push('/user/new')}>
        <Add />
      </IconButton>
      <TextField
          variant="outlined"
          id="input-with-icon-adornment"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            )
          }}
        />
      <ProjectTable />
    </BasePage>
  )
}

export default Projects
