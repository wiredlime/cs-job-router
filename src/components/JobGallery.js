import React, { useState } from "react";
import jobs from "../jobs.json";
import JobBox from "../components/JobBox";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";

export default function JobGallery() {
  const [pagin, setPagin] = useState([
    jobs[0],
    jobs[1],
    jobs[2],
    jobs[3],
    jobs[4],
  ]);
  function Paginator(e, page, perPage) {
    page = page || 1;
    perPage = perPage || 5;
    let offset = (page - 1) * perPage;
    let paginatedJobs = jobs.slice(offset).slice(0, perPage);
    return paginatedJobs;
  }

  return (
    <div style={{ margin: "3rem" }}>
      <Grid
        container
        spacing={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {pagin.map((job) => (
          <Grid item key={job.id} xs={12} sm={10} md={6}>
            <JobBox job={job} />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Pagination
          onChange={(e, page) => setPagin(Paginator(e, page, 5))}
          style={{ marginBottom: "2rem" }}
          count={3}
        />
      </Grid>
    </div>
  );
}
