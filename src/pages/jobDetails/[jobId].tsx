import React, { useState } from "react";
import { useRouter } from "next/router";
import {
    Typography,
    Box,
    Paper,
    TextField,
    Button,
    Grid,
    Alert,
    MenuItem,
    Checkbox,
    FormControlLabel,
    Avatar,
    IconButton,
} from "@mui/material";
import { teal, grey, red, blue } from "@mui/material/colors";
import Wrapper from "../../layout/wrapper";
import { CameraAlt } from "@mui/icons-material"; // Importing camera icon for profile photo

const JobDetailsPage: React.FC = () => {
    const router = useRouter();
    const { title } = router.query;

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        experience: "",
        skills: "",
        jobType: "",
        resume: null as File | null,
        profilePhoto: null as File | null, // New field for profile photo
        agreedToTerms: false,
        experienceLevel: "Experienced",
        currentSalary: "",
        expectedSalary: "",
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState("");

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const fileName = e.target.name;
            setFormData({
                ...formData,
                [fileName]: e.target.files[0], // Update the appropriate field based on name
            });
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, agreedToTerms: e.target.checked });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.phone ||
            !formData.email ||
            !formData.address ||
            !formData.experience ||
            !formData.skills ||
            !formData.jobType ||
            !formData.resume ||
            !formData.profilePhoto // Ensure profile photo is uploaded
        ) {
            setFormError("Please fill out all required fields.");
            return;
        }

        if (!formData.agreedToTerms) {
            setFormError("You must agree to the terms and conditions.");
            return;
        }

        setFormError("");
        setFormSubmitted(true);

        setTimeout(() => {
            setFormSubmitted(false);
            router.push("/confirmation");
        }, 3000);
    };

    return (
        <Wrapper>
            <Box sx={{ padding: 4, backgroundColor: grey[100], minHeight: "100vh" }}>
                <Paper
                    sx={{
                        padding: 4,
                        boxShadow: 3,
                        backgroundColor: "#ffffff",
                        borderRadius: 3,
                        maxWidth: 800,
                        margin: "auto",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: "bold", color: blue[600], textAlign: "center" }}
                    >
                        {title ? `Apply for: ${title}` : "Loading..."}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            marginTop: 2,
                            marginBottom: 4,
                            color: grey[700],
                            textAlign: "justify",
                            lineHeight: 1.8,
                        }}
                    >
                        Join our team and take the next step in your career! We are looking
                        for passionate, dedicated, and skilled individuals to be part of our
                        growing organization. Explore this opportunity and make a difference!
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            {/* Profile photo upload */}
                            <Grid item xs={12} sm={6}>
                                <Button
                                    variant="contained"
                                    component="label"
                                    sx={{
                                        marginBottom: 2,
                                        backgroundColor: teal[500],
                                    }}
                                >
                                    Upload Profile Photo
                                    <input
                                        type="file"
                                        hidden
                                        accept="image/*"
                                        name="profilePhoto" // Set the name for the input
                                        onChange={handleFileChange}
                                    />
                                </Button>
                                {formData.profilePhoto && (
                                    <Avatar
                                        src={URL.createObjectURL(formData.profilePhoto)}
                                        sx={{ width: 100, height: 100, marginTop: 1 }}
                                    />
                                )}
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    variant="outlined"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    variant="outlined"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    variant="outlined"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Address"
                                    variant="outlined"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                    multiline
                                    rows={3}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Experience (years)"
                                    variant="outlined"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Skills"
                                    variant="outlined"
                                    name="skills"
                                    value={formData.skills}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Job Type"
                                    variant="outlined"
                                    name="jobType"
                                    value={formData.jobType}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <MenuItem value="Full-Time">Full-Time</MenuItem>
                                    <MenuItem value="Part-Time">Part-Time</MenuItem>
                                    <MenuItem value="Remote">Remote</MenuItem>
                                    <MenuItem value="Internship">Internship</MenuItem>
                                </TextField>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Experience Level"
                                    variant="outlined"
                                    name="experienceLevel"
                                    value={formData.experienceLevel}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <MenuItem value="Experienced">Experienced</MenuItem>
                                    <MenuItem value="Freshers">Freshers</MenuItem>
                                </TextField>
                            </Grid>

                            {formData.experienceLevel === "Experienced" && (
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Current Salary"
                                        variant="outlined"
                                        name="currentSalary"
                                        value={formData.currentSalary}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>
                            )}

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Expected Salary"
                                    variant="outlined"
                                    name="expectedSalary"
                                    value={formData.expectedSalary}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    component="label"
                                    sx={{ marginRight: 2, backgroundColor: teal[500] }}
                                >
                                    Upload Resume
                                    <input
                                        type="file"
                                        hidden
                                        accept=".pdf,.doc,.docx"
                                        name="resume"
                                        onChange={handleFileChange}
                                    />
                                </Button>
                                {formData.resume && (
                                    <>
                                        <Typography variant="body2" sx={{ color: grey[700] }}>
                                            {formData.resume.name}
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={() => {
                                                if (formData.resume) {
                                                    const resumeURL = URL.createObjectURL(formData.resume);
                                                    window.open(resumeURL, "_blank");
                                                }
                                            }}
                                            sx={{ marginTop: 1 }}
                                        >
                                            Preview Resume
                                        </Button>
                                    </>
                                )}
                            </Grid>

                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={formData.agreedToTerms}
                                            onChange={handleCheckboxChange}
                                        />
                                    }
                                    label="I agree to the terms and conditions"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        backgroundColor: blue[500],
                                        ":hover": { backgroundColor: blue[700] },
                                    }}
                                >
                                    Submit Application
                                </Button>
                            </Grid>
                        </Grid>
                    </form>

                    {formError && (
                        <Alert severity="error" sx={{ marginTop: 3 }}>
                            {formError}
                        </Alert>
                    )}

                    {formSubmitted && (
                        <Alert severity="success" sx={{ marginTop: 3 }}>
                            Application submitted successfully! Redirecting to confirmation...
                        </Alert>
                    )}
                </Paper>
            </Box>
        </Wrapper>
    );
};

export default JobDetailsPage;
