import { configureStore } from '@reduxjs/toolkit'
import alertSlice from './alertSlice'
import projectSlice from './projectSlice'
import usersSlice from './usersSlice'

export default configureStore({
  reducer: {
    users: usersSlice,
    projects: projectSlice,
    alert: alertSlice,
  }
})