import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, Button, Grid, Card, CardContent, CardActions, Divider, Avatar, TextField } from "@mui/material";
import { useRouter } from "next/router";
import axios from "axios";
import { teal, grey, deepOrange } from "@mui/material/colors";
import { baseURL, endpoints } from "../api/endPoints";
import Wrapper from "../layout/wrapper";

const DashboardPage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [jobs, setJobs] = useState<any[]>([]);
  const [searchCriteria, setSearchCriteria] = useState({
    title: "",
    location: "",
    company: "",
    jobType: "",
    salaryRange: "",
  });
  const [filteredJobs, setFilteredJobs] = useState<any[]>([]);
  const [expandedJob, setExpandedJob] = useState<number | null>(null); // Manage expanded job description
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/login");
    }

    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${baseURL}${endpoints.jobs}`);
        setJobs(response.data);
        setFilteredJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    router.push("/login");
  };

  const handleApplyJob = (jobId: number, title: string) => {
    router.push({
      pathname: `/jobDetails/${jobId}`,
      query: { title },
    });
  };

  const handleSearch = () => {
    const { title, location, company, jobType, salaryRange } = searchCriteria;

    const filtered = jobs.filter((job) => {
      return (
        (title ? job.title.toLowerCase().includes(title.toLowerCase()) : true) &&
        (location ? job.location.toLowerCase().includes(location.toLowerCase()) : true) &&
        (company ? job.company.toLowerCase().includes(company.toLowerCase()) : true) &&
        (jobType ? job.jobType.toLowerCase().includes(jobType.toLowerCase()) : true) &&
        (salaryRange ? job.salaryRange.includes(salaryRange) : true)
      );
    });

    setFilteredJobs(filtered);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setSearchCriteria({
      ...searchCriteria,
      [field]: e.target.value,
    });
  };

  const handleToggleDescription = (jobId: number) => {
    setExpandedJob((prev) => (prev === jobId ? null : jobId));
  };

  return (
    <Wrapper>
      <Box sx={{ padding: 3 }}>
        {user ? (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={3}>
              <Paper sx={{ padding: 3, backgroundColor: teal[50], boxShadow: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
                  <Avatar sx={{ bgcolor: teal[500], width: 90, height: 90, marginRight: 2 }}>
                    {user.firstname.charAt(0).toUpperCase()}
                  </Avatar>
                  <div>
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: grey[800] }}>
                      {user.firstname} {user.lastname}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">{user.email}</Typography>
                    <Typography variant="body2" color="textSecondary">Enrollment ID: {user.id}</Typography>
                  </div>
                </Box>
                <Divider sx={{ marginBottom: 3 }} />
                <Button fullWidth variant="contained" color="primary" onClick={handleLogout}>
                  Logout
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={8} md={9}>
              <Paper sx={{ padding: 3, boxShadow: 1 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: deepOrange[600] }}>
                  Explore Job Opportunities
                </Typography>

                <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                  <Grid item xs={12} sm={4} md={3}>
                    <TextField
                      fullWidth
                      label="Job Title"
                      variant="outlined"
                      size="small"
                      value={searchCriteria.title}
                      onChange={(e) => handleInputChange(e, "title")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                    <TextField
                      fullWidth
                      label="Location"
                      variant="outlined"
                      size="small"
                      value={searchCriteria.location}
                      onChange={(e) => handleInputChange(e, "location")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                    <TextField
                      fullWidth
                      label="Company"
                      variant="outlined"
                      size="small"
                      value={searchCriteria.company}
                      onChange={(e) => handleInputChange(e, "company")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                    <Button fullWidth variant="contained" color="primary" onClick={handleSearch}>
                      Search
                    </Button>
                  </Grid>
                </Grid>

                <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: grey[800] }}>
                  Available Jobs
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />

                <Grid container spacing={3}>
                  {filteredJobs?.map((job) => (
                    <Grid item xs={12} sm={6} md={4} key={job.id}>
                      <Card sx={{ borderRadius: 2, boxShadow: 2, transition: "transform 0.2s", ":hover": { transform: "scale(1.05)" } }}>
                        <CardContent>
                          <Typography variant="h6" sx={{ fontWeight: "bold", color: grey[800] }}>
                            {job.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {job.company}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">{job.location}</Typography>
                          <Typography variant="body2" color="textSecondary">Job Type: {job.job_type}</Typography> {/* Display job type */}
                          <Typography variant="body2" color="textSecondary">Skills Requiremnts: {job.requirements}</Typography>
                          <Typography variant="body2" color="textSecondary">Salary: {job.salary}</Typography> {/* Display salary range */}

                          {/* Show full company details if expanded */}
                          {expandedJob === job.id && (
                            <Box sx={{ marginTop: 2, color: grey[600] }}>
                              <Typography variant="body2">Company Details: {job.description}</Typography>
                              <Typography variant="body2">Company Culture: {job.company_culture}</Typography>
                            </Box>
                          )}
                        </CardContent>
                        <CardActions>
                          <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={() => handleApplyJob(job.id, job.title)}
                            sx={{ width: "100%" }}
                          >
                            Apply Now
                          </Button>
                          <Button
                            size="small"
                            color="secondary"
                            variant="contained"
                            onClick={() => handleToggleDescription(job.id)} // Toggle expanded description
                            sx={{ width: "100%" }}
                          >
                            {expandedJob === job.id ? "Show Less" : "Read More"} {/* Toggle between Read More and Show Less */}
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        ) : (
          <Typography variant="h5" color="textSecondary">Loading...</Typography>
        )}
      </Box>
    </Wrapper>
  );
};

export default DashboardPage;
