import React from "react";
import SearchAppBar from "./components/SearchAppBar.js";
import JobBox from "./components/JobBox";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import jobs from "./jobs.json";
function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 100,
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper style={{ height: "100vh" }} elevation={0}>
          <SearchAppBar />
          <div style={{ margin: "3rem" }}>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              {jobs.map((job) => (
                <JobBox key={job.id} job={job} />
              ))}
            </Grid>
            <Grid container justifyContent="center" alignItems="center">
              <Pagination style={{ marginBottom: "2rem" }} count={3} />
            </Grid>
          </div>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
