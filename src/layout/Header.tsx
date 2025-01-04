"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import NewsIcon from "@mui/icons-material/Article";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";

const JobPlatformNavbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status from localStorage (or any other method like cookies, context)
  useEffect(() => {
    const userToken = localStorage.getItem("authToken"); // Example token storage in localStorage
    if (userToken) {
      setIsAuthenticated(true);
    }
  }, []); // Runs only on initial mount

  // Handle opening and closing the drawer
  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  const pages = [
    { label: "Home", href: "/", icon: <HomeIcon /> },
    { label: "About Us", href: "/about", icon: <InfoIcon /> },
    { label: "News", href: "/news", icon: <NewsIcon /> },
    { label: "Contact Us", href: "/contact", icon: <ContactMailIcon /> },
  ];

  // Links for login/register when not authenticated
  const loginRegisterLinks = [
    { label: "Login", href: "/login", icon: <LoginIcon /> },
    { label: "Register", href: "/registration", icon: <AccountCircleIcon /> },
  ];

  // Handle Logout (clear authToken and update state)
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#2C3E50" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            JobsHub
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                color="inherit"
                component={Link}
                href={page.href}
                startIcon={page.icon}
              >
                {page.label}
              </Button>
            ))}

            {/* Conditionally render the Dashboard link if authenticated */}
            {isAuthenticated && (
              <Button
                color="inherit"
                component={Link}
                href="/dashboard"
                startIcon={<DashboardIcon />}
              >
                Dashboard
              </Button>
            )}

            {/* Show Login/Register button when not authenticated */}
            {!isAuthenticated ? (
              <Button
                color="inherit"
                component={Link}
                href="/login"
                startIcon={<LoginIcon />}
              >
                Login / Register
              </Button>
            ) : (
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {pages.map((page) => (
              <ListItem button key={page.label}>
                <ListItemText>
                  <Link
                    href={page.href}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {page.icon}
                    <span style={{ marginLeft: "8px" }}>{page.label}</span>
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
            {isAuthenticated && (
              <ListItem button key="Dashboard">
                <ListItemText>
                  <Link
                    href="/dashboard"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <DashboardIcon />
                    <span style={{ marginLeft: "8px" }}>Dashboard</span>
                  </Link>
                </ListItemText>
              </ListItem>
            )}

            {/* Render Login/Register links when not authenticated */}
            {!isAuthenticated &&
              loginRegisterLinks.map((link) => (
                <ListItem button key={link.label}>
                  <ListItemText>
                    <Link
                      href={link.href}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {link.icon}
                      <span style={{ marginLeft: "8px" }}>{link.label}</span>
                    </Link>
                  </ListItemText>
                </ListItem>
              ))}

            {/* Show Logout button if authenticated */}
            {isAuthenticated && (
              <ListItem button key="Logout">
                <ListItemText>
                  <Button onClick={handleLogout}>Logout</Button>
                </ListItemText>
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default JobPlatformNavbar;
