import { createSlice, createAsyncThunk,PayloadAction } from '@reduxjs/toolkit'
import { setMessage } from '../message'
import { Credential } from '../../model/Auth'
import { Config } from '../../config/index'
import { api } from '../../services/api'
import { reduxStorage } from '..'
import { User } from '../../model/User'



export const login = createAsyncThunk(
  'auth/login',
  async ({ id, password }:Credential, { rejectWithValue , dispatch}) => {
    return fetch(`${Config.API_URL}login/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: id,
        password: password,
      }),
    })
      .then(async response => {
        if (response.status === 200 || 201) {
          let json = await response.json()
          if (json.access) {
            return json
          } else {
            dispatch(
              setMessage({ message: json.detail, isError: true }),
            )
          }
        } else {
          let json = await response.json()
          dispatch(setMessage({ message: json.detail, isError: true }))
          return rejectWithValue
        }
      })
      .catch(error => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        dispatch(setMessage({ message: message, isError: true }))
        return rejectWithValue
      })
  },
)

export const forgetPassword = createAsyncThunk(
  'auth/forgetPassword',
  async ({ id }:Credential, { rejectWithValue , dispatch}) => {
    return fetch(`${Config.API_URL}validate/forgot-password-request/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: id,
      }),
    })
      .then(async response => {
        console.log('RES', response)
        if (response.status === 200 || response.status === 201) {
          let json = await response.json()
          if (json) {
            dispatch(
              setMessage({ message: json.message, isError: false }),
            )
            return json
          }
        } else {
          let json = await response.json()
          dispatch(
            setMessage({ message: json.message, isError: true }),
          )
        }
      })
      .catch(error => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        dispatch(setMessage({ message: message, isError: true }))
        return rejectWithValue
      })
  },
)

export const logout = createAsyncThunk('auth/logout', async (_, { dispatch}) => {
  dispatch(api.util.resetApiState())
  await reduxStorage.removeItem('persist:root')
})

const initialState: InitialState = { isLoggedIn: false, user: null }

const authSlice = createSlice({
  name: 'auth', 
  initialState,
  reducers:{},
extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.fulfilled, (state, action) => {
      // Add user to the state array
      state.user = action.payload
      state.isLoggedIn = true
    }),
    builder.addCase(login.rejected, (state, action) => {
        // Add user to the state array
        state.user = null
        state.isLoggedIn = false
      }),
      builder.addCase(logout.fulfilled, (state, action) => {
        // Add user to the state array
        state.user = null
        state.isLoggedIn = false
      })

  },
})


export type InitialState = {
    isLoggedIn : boolean,
    user : User | null,
}

const { reducer } = authSlice
export default reducer
