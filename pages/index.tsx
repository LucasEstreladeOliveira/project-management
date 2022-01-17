import type { NextPage } from 'next'
import { 
  Box,
  InputAdornment, 
  TextField,
} from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import ProjectTable from '../src/components/ProjectTable'
import BasePage  from "../src/components/BasePage"
import { useForm, Controller } from "react-hook-form";
import useStyles from '../src/hooks/useStyles'
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert, selectAlert } from '../src/redux/alertSlice';
import { Slide, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

interface IFilterInput {
  filter: string;
}

const Projects: NextPage = () => {

  const { control , watch } = useForm<IFilterInput>();

  const filter = watch("filter")
  const classes = useStyles()
  const dispatch = useDispatch()
  const { message, open, type } = useSelector(selectAlert);

  return (
    <BasePage pageName='Project Management'>
      <Box className={classes.landingWrapper}>
        <form>
          <Controller
            name="filter"
            control={control}
            defaultValue=''
            render={({field}) => 
              <TextField 
                variant="outlined"
                label="Filter"
                placeholder="Filter by project name or description"
                id="input-with-icon-adornment"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <FilterList />
                    </InputAdornment>
                  )
                }}
                {...field}
              />
            }
          />
        </form>
        <ProjectTable filter={filter}/>
        <Snackbar 
          open={open}
          autoHideDuration={3000}
          TransitionComponent={props => <Slide {...props} direction="up" />}
          onClose={closeAlert}
        > 
          <Alert onClose={() => dispatch(closeAlert())} severity={type}>
            {message}
          </Alert>
        </Snackbar>
      </Box>
    </BasePage>
  )
}

export default Projects
