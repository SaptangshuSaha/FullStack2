import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 4,
          py: 6,
          flexWrap: "wrap",
          bgcolor: "#111827"
        }}
      >
        <CardComponent
          title="AI Library System"
          desc="Smart library management using OOP and AI recommendations"
        />
        <CardComponent
          title="Data Visualization Dashboard"
          desc="Interactive dashboard built with Python, Pandas and charts"
        />
      </Box>

      <Footer />
    </>
  );
}