import React from "react";
import jobs from "../jobs.json";
import { useParams, useNavigate, useLocation } from "react-router-dom";
// import JobBox from "../components/JobBox";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/material";
function JobPage() {
  let location = useLocation();
  let { id } = useParams();
  const job = jobs.find((job) => job.id === id);

  let navigate = useNavigate();
  function onDismiss() {
    navigate(-1);
  }
  console.log("jobpage rendered");
  return (
    <Modal
      children
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onBackdropClick={() => onDismiss()}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        style={{
          margin: "3rem",
          borderRadius: "15px",
          padding: "3rem",
          width: "500px",
        }}
      >
        <div
          style={{
            padding: "10px",
          }}
        >
          <Typography variant="h4">{job.title}</Typography>
          <Divider />
          <Stack
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "8px 0 30px 0",
            }}
            direction="row"
            spacing={1}
          >
            <Chip size="small" label={job.skills[0]} color="secondary" />
            <Chip size="small" label={job.skills[1]} color="secondary" />
            <Chip size="small" label={job.skills[2]} color="secondary" />
          </Stack>
          <Typography>{job.description}</Typography>
        </div>
      </Paper>
    </Modal>
  );
}

export default JobPage;
