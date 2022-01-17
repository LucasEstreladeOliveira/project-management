import { createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

type Alert = {
  open: boolean;
  message: string;
  type: 'error' | 'success'
}
export const slice = createSlice({
  name: 'alert',
  initialState: {
    open: false,
    message: '',
    type: 'success',
  },
  reducers: {
  addAlert(state, {payload}) {
    return {
      ...state, 
      open: true, 
      message: payload.message, 
      type: payload.type, 
    }
  },
  closeAlert(state) {
    return {...state, open: false, message: '', type: 'success'}
    }
  }
})

export const selectAlert = (state: WritableDraft<{alert: Alert}>) => state.alert
export const { addAlert, closeAlert } = slice.actions

export default slice.reducer