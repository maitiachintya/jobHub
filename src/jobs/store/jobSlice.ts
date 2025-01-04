import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

// Initial state setup for jobs
let storedJobs = null;

if (typeof window !== "undefined") {
  // Check if we're in the browser environment
  storedJobs = localStorage.getItem("jobs");
}

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}

interface JobState {
  jobs: Job[] | null;
  selectedJob: Job | null;
  error: string | null;
}

const initialState: JobState = {
  jobs: storedJobs ? JSON.parse(storedJobs) : null,
  selectedJob: null,
  error: null,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    // Set the job listings after fetching them
    setJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
      state.error = null;

      // Store jobs in localStorage (only in the browser)
      if (typeof window !== "undefined") {
        localStorage.setItem("jobs", JSON.stringify(action.payload));
      }
    },
    // Set the selected job's details
    setSelectedJob: (state, action: PayloadAction<Job>) => {
      state.selectedJob = action.payload;
      state.error = null;
    },
    // Handle any errors during job fetch or operations
    setJobError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    // Add a new job to the job list
    addJob: (state, action: PayloadAction<Job>) => {
      if (state.jobs) {
        state.jobs.push(action.payload);
      }
      state.error = null;

      // Store updated jobs in localStorage (only in the browser)
      if (typeof window !== "undefined") {
        localStorage.setItem("jobs", JSON.stringify(state.jobs));
      }
    },
    // Remove a job from the job list
    removeJob: (state, action: PayloadAction<number>) => {
      if (state.jobs) {
        state.jobs = state.jobs.filter((job) => job.id !== action.payload);
      }
      state.error = null;

      // Store updated jobs in localStorage (only in the browser)
      if (typeof window !== "undefined") {
        localStorage.setItem("jobs", JSON.stringify(state.jobs));
      }
    },
  },
});

export const { setJobs, setSelectedJob, setJobError, addJob, removeJob } =
  jobSlice.actions;

// Create the Redux store with the job reducer
const store = configureStore({
  reducer: {
    job: jobSlice.reducer, // Manage job state with the job reducer
  },
});

export default store;
