import { Card, CardContent, Typography } from "@mui/material";

export default function CardComponent({ title, desc }) {
  return (
    <Card
      sx={{
        width: 300,
        p: 2,
        borderRadius: 3,
        boxShadow: 3,
        transition: "0.3s",
        ":hover": { transform: "translateY(-5px)" }
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography sx={{ mt: 1, color: "gray" }}>{desc}</Typography>
      </CardContent>
    </Card>
  );
}