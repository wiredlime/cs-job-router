import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function FTextField({ name, ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          // color="secondary"
          // required
          // id="email"
          // label="Email"
          // type="text"
          // size="small"
          error={!!error}
          helperText={error?.message}
          {...field}
          {...other}
          //--> {...others} are styling props
        />
      )}
    />
  );
}
export default FTextField;
