import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";

export default function Navbar() {
  const { state } = useContext(AppContext);

  // ✅ useMemo for derived value (Experiment 4 requirement)
  const favCount = useMemo(() => {
    return state.favorites.length;
  }, [state.favorites]);

  return (
    <AppBar position="static" sx={{ bgcolor: "#000" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Saptangshu Portfolio
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        <Button color="inherit" component={Link} to="/projects">
          Projects
        </Button>

        {/* ✅ Shows memoized value */}
        <Typography sx={{ ml: 3 }}>
          Favorites: {favCount}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}