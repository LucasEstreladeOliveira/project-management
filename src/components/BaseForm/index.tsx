import { 
  Box,
  TextField,
  MenuItem,
  Select,
  Button,
  Snackbar,
  Slide,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyles from '../../hooks/useStyles'
import { Controller, FieldError, SubmitHandler, useForm } from 'react-hook-form';
import { Project } from '../../types/project';
import { User } from '../../types/user';
import { NewProject as NewProjectSvg } from '../../../src/assetsComponents'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux"
import { createUser, updateUser, selectUsers} from '../../redux/usersSlice'
import { createProjects, selectProjects, updateProjects } from '../../redux/projectSlice';
import ComponentLoading from '../ComponentLoading'
import { addAlert } from '../../redux/alertSlice';
import { Alert } from '@material-ui/lab';

type BaseFormProps = {
  id?: number,
  isProject: boolean
}
function BaseForm({id, isProject}: BaseFormProps) { 
  const isNew = id == undefined;

  const [formObject, setFormObject] = useState<Project & User | undefined | null>(undefined)
  
  const { handleSubmit, formState: { errors }, control } = useForm<Project & User>();
  
  const onSubmit: SubmitHandler<Project & User> = data => {
    if(isProject) {
      if(isNew) {
        dispatch(createProjects(data))
        dispatch(addAlert({message: 'New Project Created', type: 'success'}))
        router.push('/')
      } else {
        dispatch(updateProjects({...data, id}))
        dispatch(addAlert({message: 'Project Updated', type: 'success'}))
        router.push('/')
      }
    } else {
      if(isNew) {
        dispatch(createUser(data))
        dispatch(addAlert({message: 'New User Created', type: 'success'}))
        router.push('/')
      } else {
        dispatch(updateUser({...data, id}))
        dispatch(addAlert({message: 'User Updated', type: 'success'}))
        router.push('/')
      }
    }
  };
  
  const classes = useStyles();
  const router = useRouter()
  const dispatch = useDispatch()
  const { users } = useSelector(selectUsers)
  const { projects } = useSelector(selectProjects)

  useEffect(() => {
    if(id !== undefined) {
      handleSelected(id, isProject)
    } else {
      setFormObject(null)
    }
  }, [id, isProject])

  async function handleSelected(id: number, isProject: boolean) {
    if(typeof id !== 'number') return
    if(!!isProject) {
      const selectedProject = await projects.filter((project: Project) => project.id === id)[0]
      if(!selectedProject) {
        router.push('/project/new')
      } else {
        setFormObject(selectedProject)
      }
    } else {
      const selectedUser = await users.filter((user: User) => user.id === id)[0]
      setFormObject(selectedUser)
      if(!selectedUser) {
        router.push('/user/new')
      } else {
        setFormObject(selectedUser)
      }
    }
  }

  function handleErrorMessage(error: {
    id?: FieldError | undefined;
    name?: FieldError | undefined;
    description?: FieldError | undefined;
    owner?: FieldError | undefined;
    email?: FieldError | undefined;
  }) {

    let message = []

    if(error.description) {
      message.push('The description of the project is required')
    }
    if(error.owner) {
      message.push('The owner of the project is required')
    }
    if(error.email) {
      if(error.email.type === 'pattern') {
        message.push('This email is not valid')
      } else {
        message.push('The email of the user is required')
      }
    }
    if(error.name) {
      if(isProject) {
        message.push('The name of the project is required')
      } else {
        message.push('The name of the user is required')
      }
    }
    
    return message
  }

  if(formObject === undefined) return <div>Loading</div>

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Box className={classes.formBox}>
          <Controller
            name="name"
            control={control}
            defaultValue={formObject?.name} 
            rules={{ required: true }}
            render={({ field }) => 
              <TextField 
                {...field } 
                error={!!errors.name}
                label="Name" 
                variant="outlined" 
                fullWidth
              />
            }
          />
          {isProject && 
            <>
              <Controller 
                name="description" 
                control={control} 
                rules={{ required: true }}
                defaultValue={formObject?.description}
                render={({ field }) => 
                  <TextField 
                  {...field } 
                  error={!!errors.description}
                  label="Description" 
                  multiline 
                  rows={4} 
                  variant="outlined" 
                  fullWidth 
                  />
                }
              />
              <Controller 
                name="owner" 
                control={control} 
                rules={{ required: true }}
                defaultValue={formObject?.owner}
                render={({ field }) =>
                  <Select 
                    error={!!errors.owner}
                    {...field }
                    variant='outlined' 
                    fullWidth
                  >
                    { users.map( (user: User) =>( <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem> ))}
                  </Select>
                }
              />
            </>
          }
          {!isProject && 
            <Controller
              name="email"
              control={control} 
              defaultValue={formObject?.email} 
              rules={{ required: true, pattern: /^\S+@\S+$/i }}
              render={({ field }) => 
                <>
                  <TextField 
                    {...field } 
                    error={!!errors.email}
                    label="Email" 
                    variant="outlined" 
                    fullWidth
                  />
                </>
              }
            />
          }
        </Box>
        { Object.keys(errors).length !== 0 &&
            <Snackbar 
              open={true} 
              TransitionComponent={props => <Slide {...props} direction="up" />}
            > 
              <Alert severity='error'>
                {handleErrorMessage(errors).map(error => <div key={error}>{error}</div>)}
              </Alert>
            </Snackbar>
        }
        
        <Button variant='contained' color="primary" type="submit">{!formObject ? `Create ${isProject ? 'Project' : 'User'}` : `Update ${isProject ? 'Project' : 'User'}`}</Button>
      </form>
      <NewProjectSvg />
    </Box>
  )
}

export default ComponentLoading(BaseForm)
