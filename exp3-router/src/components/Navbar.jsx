import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#000" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Saptangshu Portfolio
        </Typography>

        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/projects">Projects</Button>
      </Toolbar>
    </AppBar>
  );
}