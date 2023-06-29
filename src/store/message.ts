import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return {
        message: action.payload.message,
        isError: action.payload.isError,
      }
    },
    clearMessage: () => {
      return { message: '', isError: null }
    },
  },
})

const { reducer, actions } = messageSlice

export const { setMessage, clearMessage } = actions
export default reducer
