import { TextField } from "@mui/material";

export default function Textfield ({id, label, required}) {
  return (
    <TextField
      id = { id }
      label = { label }
      variant = 'outlined'
      size = 'medium'
      required = { required }
    />
  )
}