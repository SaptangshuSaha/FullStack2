import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";

export default function Projects() {
  return (
    <>
      <Navbar />

      <Box sx={{ minHeight: "70vh", p: 6, bgcolor: "#020617", color: "white" }}>
        <Typography variant="h3" align="center" sx={{ mb: 4 }}>
          My Projects
        </Typography>

        <Typography align="center">
          This page demonstrates routing between pages using React Router.
        </Typography>
      </Box>

      <Footer />
    </>
  );
}