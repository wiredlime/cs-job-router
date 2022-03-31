import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import JobGallery from "../components/JobGallery.js";
import SearchAppBar from "../components/SearchAppBar.js";

function HomePage() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 800,
      components: {
        MuiPaper: {
          styleOverrides: {
            root: {
              border: "100px solid red",
            },
          },
        },
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ height: "100vh" }}>
          <Paper>
            <SearchAppBar />
            <JobGallery />
            <Outlet />
          </Paper>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default HomePage;
