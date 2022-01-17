import { createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { users } from '../../data/users.json'
import { User } from "../types/user";

export const slice = createSlice({
  name: 'users',
  initialState: {
    users
  },
  reducers: {
    createUser(state, {payload}) {
      return {...state, users: [...state.users, {...payload, id: state.users.length}]}
    },
    updateUser(state, {payload}) {
      const newUsers = state.users.map(user => {
        if(user.id === payload.id) {
          user = payload
        }
        return user
      })
      return {...state, users: [...newUsers]}
    },
    
  }
})

export const selectUsers = (state: WritableDraft<{users: User[]}>) => state.users
export const { createUser, updateUser } = slice.actions

export default slice.reducer