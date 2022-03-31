import React from "react";
import jobs from "../jobs.json";
import JobBox from "../components/JobBox";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";

export default function JobGallery() {
  return (
    <div style={{ margin: "3rem" }}>
      <Grid
        container
        spacing={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {jobs.map((job) => (
          <Grid item key={job.id} xs={12} sm={8} md={5}>
            <JobBox job={job} key={job.id} />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Pagination style={{ marginBottom: "2rem" }} count={3} />
      </Grid>
    </div>
  );
}
