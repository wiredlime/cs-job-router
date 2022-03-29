import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@material-ui/core";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/material";

export default function JobBox({ job }) {
  return (
    <Grid item xs={12} sm={8} md={5}>
      <Box
        style={{
          backgroundColor: "purple",
          margin: "10px",
          height: "300px",
          display: "flex",
          position: "relative",
        }}
      >
        <Paper
          elevation={4}
          style={{
            borderRadius: "15px",
          }}
        >
          <div
            style={{
              padding: "10px",
            }}
          >
            <Typography variant="h6">{job.title}</Typography>
            <Divider />
            <Stack
              style={{
                display: "flex",
                flexWrap: "wrap",
                margin: "8px 0 8px 0",
              }}
              direction="row"
              spacing={1}
            >
              <Chip size="small" label={job.skills[0]} color="secondary" />
              <Chip size="small" label={job.skills[1]} color="secondary" />
              <Chip size="small" label={job.skills[2]} color="secondary" />
            </Stack>
            <Typography variant="body">{job.description}</Typography>
            <Box
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                margin: "10px",
              }}
            >
              <Button variant="outlined" color="secondary">
                LEARN MORE
              </Button>
            </Box>
          </div>
        </Paper>
      </Box>
    </Grid>
  );
}
