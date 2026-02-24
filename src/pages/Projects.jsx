import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Typography, Button } from "@mui/material";

export default function Projects() {
  const { dispatch } = useContext(AppContext);

  const addFavorite = () => {
    dispatch({ type: "ADD_FAV", payload: "AI LMS System" });
  };

  return (
    <>
      <Navbar />

      <Box
        sx={{
          minHeight: "70vh",
          p: 6,
          background: "#0f172a",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ mb: 3 }}>
          My Projects
        </Typography>

        <Typography sx={{ mb: 4 }}>
          This page demonstrates routing + reducer + context usage.
        </Typography>

        <Button
          onClick={addFavorite}
          variant="contained"
          sx={{
            background: "#3b82f6",
            padding: "10px 22px",
            fontWeight: "bold",
            "&:hover": {
              background: "#2563eb",
            },
          }}
        >
          Add AI LMS to Favorites
        </Button>
      </Box>

      <Footer />
    </>
  );
}