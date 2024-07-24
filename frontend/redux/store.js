import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import jobsReducer from './slice/jobSlice'

export const store = configureStore({
  reducer: {
    // addMockupData: dataSlice,
    // toggleName: navSlice,
    jobs: jobsReducer,
    auth: authReducer,
  },
})