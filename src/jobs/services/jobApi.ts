import { useQuery, useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance"; // Assuming the axiosInstance is the same

// Define interfaces for job data
interface JobData {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}

// Function to fetch all job listings
const fetchJobs = async () => {
  const response = await axiosInstance.get("/jobs"); // Endpoint for fetching jobs
  return response.data; // Assuming the response contains an array of job objects
};

// Function to add a new job listing
const addJob = async (job: Omit<JobData, "id">) => {
  const response = await axiosInstance.post("/jobs", job); // Endpoint for adding a new job
  return response.data; // Assuming the response contains the created job
};

// Custom hook for fetching jobs (using useQuery)
export const useJobs = () => {
  return useQuery(["jobs"], fetchJobs); // The key is "jobs" to fetch job listings
};

// Custom hook for adding a job (using useMutation)
export const useAddJob = () => {
  return useMutation(addJob); // This mutation will be used to add new job listings
};
