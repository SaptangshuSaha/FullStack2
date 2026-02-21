import { Typography, Button, Box } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "70vh",
        bgcolor: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold" }}>
        Hi, I'm Saptangshu
      </Typography>

      <Typography variant="h6" sx={{ mt: 2, color: "#94a3b8" }}>
        AI Engineering Student • Developer • Digital Artist
      </Typography>

      <Button
        variant="contained"
        sx={{
          mt: 4,
          bgcolor: "#6366f1",
          ":hover": { bgcolor: "#4f46e5" }
        }}
      >
        View Projects
      </Button>
    </Box>
  );
}