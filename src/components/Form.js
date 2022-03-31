import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Checkbox,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  FormControlLabel,
  Alert,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function Form() {
  const defaultValues = {
    email: "naruto@cs.vn",
    password: "konoha",
    remember: true,
  };
  const methods = useForm({ defaultValues });
  const {
    handleSubmit,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = methods;
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    setError("afterSubmit", {
      message: "Server Response Error",
    });
  };

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     margin: "2rem",
    //   }}
    // >
    <Box
      style={{
        // backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2rem",
      }}
    >
      <Paper
        elevation={8}
        style={{
          borderRadius: "20px",
        }}
      >
        <div style={{ padding: "3rem" }}>
          <Typography color="secondary" variant="h3" textAlign="center" mb={3}>
            Log in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} xs={3}>
              {!!errors.afterSubmit && (
                <Alert severity="error">{errors.afterSubmit.message}</Alert>
              )}

              <Controller
                name="email"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    color="secondary"
                    required
                    id="email"
                    label="Email"
                    type="text"
                    size="small"
                    helperText={error?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    color="secondary"
                    required
                    id="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    // fullWidth
                    error={!!error}
                    helperText={error?.message}
                    {...field}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            color="secondary"
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={(e) => e.preventDefault()}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Stack>
            <Stack>
              <FormControlLabel
                label="Remember Me"
                control={
                  <Controller
                    name="remember"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        color="secondary"
                        {...field}
                        checked={field.value}
                      />
                    )}
                  />
                }
              />
            </Stack>
            <Stack>
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isSubmitting}
                color="secondary"
              >
                Login
              </LoadingButton>
            </Stack>
          </form>
        </div>
      </Paper>
    </Box>
    // </div>
  );
}

export default Form;
