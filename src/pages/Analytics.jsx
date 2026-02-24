import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";

export default function Analytics() {
  const { state } = useContext(AppContext);

  const favCount = useMemo(() => state.favorites.length, [state.favorites]);

  return (
    <>
      <Navbar />

      <Box
        sx={{
          minHeight: "70vh",
          p: 6,
          background: "#0f172a",
          color: "white",
          textAlign: "center"
        }}
      >
        <Typography variant="h3" sx={{ mb: 3 }}>
          Analytics Page
        </Typography>

        <Typography sx={{ mb: 2 }}>
          Total Favorites Added:
        </Typography>

        <Typography variant="h2" sx={{ color: "#3b82f6" }}>
          {favCount}
        </Typography>

        {state.favorites.map((fav, i) => (
          <Typography key={i}>{fav}</Typography>
        ))}
      </Box>

      <Footer />
    </>
  );
}