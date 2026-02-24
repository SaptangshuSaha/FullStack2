import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#121212" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Saptangshu Portfolio
        </Typography>
        <Box sx={{ fontSize: 14 }}>AI Student • Developer</Box>
      </Toolbar>
    </AppBar>
  );
}