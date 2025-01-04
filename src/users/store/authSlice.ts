import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

// --- Auth Slice ---
let storedUser = null;
let storedToken = null;

if (typeof window !== "undefined") {
  // Check if we're in the browser environment
  storedUser = localStorage.getItem("user");
  storedToken = localStorage.getItem("token");
}

interface AuthState {
  user: null | { email: string };
  token: string | null;
  error: string | null;
}

const initialAuthState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken || null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ user: { email: string }; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;

      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      }
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;

      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    },
    registerSuccess: (
      state,
      action: PayloadAction<{ user: { email: string }; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;

      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      }
    },
    registerFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

// --- Job Slice ---
let storedJobs = null;

if (typeof window !== "undefined") {
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

const initialJobState: JobState = {
  jobs: storedJobs ? JSON.parse(storedJobs) : null,
  selectedJob: null,
  error: null,
};

const jobSlice = createSlice({
  name: "job",
  initialState: initialJobState,
  reducers: {
    setJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
      state.error = null;

      if (typeof window !== "undefined") {
        localStorage.setItem("jobs", JSON.stringify(action.payload));
      }
    },
    setSelectedJob: (state, action: PayloadAction<Job>) => {
      state.selectedJob = action.payload;
      state.error = null;
    },
    setJobError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    addJob: (state, action: PayloadAction<Job>) => {
      if (state.jobs) {
        state.jobs.push(action.payload);
      }
      state.error = null;

      if (typeof window !== "undefined") {
        localStorage.setItem("jobs", JSON.stringify(state.jobs));
      }
    },
    removeJob: (state, action: PayloadAction<number>) => {
      if (state.jobs) {
        state.jobs = state.jobs.filter((job) => job.id !== action.payload);
      }
      state.error = null;

      if (typeof window !== "undefined") {
        localStorage.setItem("jobs", JSON.stringify(state.jobs));
      }
    },
  },
});

// --- Store Configuration ---
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    job: jobSlice.reducer,
  },
});

export const {
  loginSuccess,
  loginFailure,
  logout,
  registerSuccess,
  registerFailure,
} = authSlice.actions;

export const { setJobs, setSelectedJob, setJobError, addJob, removeJob } =
  jobSlice.actions;

export default store;
