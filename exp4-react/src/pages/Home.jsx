import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />

      <Box sx={{
        minHeight: "70vh",
        bgcolor: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Typography variant="h2">Hi, I'm Saptangshu</Typography>
        <Typography sx={{ mt: 2 }}>
          AI Engineering Student • Developer • Digital Artist
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }}>
          View My Work
        </Button>
      </Box>

      <Footer />
    </>
  );
}