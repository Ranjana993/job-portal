// src/redux/jobsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch jobs data
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await axios.get('http://localhost:9000/get-jobs');
  console.log("response === ",response?.data?.jobs);
  return response?.data?.jobs;
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
