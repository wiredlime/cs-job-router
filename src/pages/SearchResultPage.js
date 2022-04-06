import React from "react";
import Grid from "@mui/material/Grid";
import jobs from "../jobs.json";
import JobBox from "../components/JobBox";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchAppBar from "../components/SearchAppBar.js";
import { useSearchParams } from "react-router-dom";
// import { useSearch } from "../contexts/SearchContext";

function SearchResultPage() {
  // let search = useSearch();
  let [searchParams, setSearchParams] = useSearchParams();
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
            <Grid
              container
              spacing={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {jobs
                .filter((job) => {
                  let filter = searchParams.get("q");
                  console.log("search filter", filter);
                  if (!filter) return true;
                  console.log("filter job", job);
                  let name = job.title.toLowerCase();
                  return name.startsWith(filter.toLowerCase());
                })
                .map((job) => (
                  <Grid item key={job.id} xs={12} sm={10} md={4}>
                    <JobBox job={job} />
                  </Grid>
                ))}
            </Grid>
          </Paper>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default SearchResultPage;
