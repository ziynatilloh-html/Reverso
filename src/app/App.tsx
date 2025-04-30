import "./css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";

function App() {
  return (
    <Container maxWidth="lg">
      <Stack spacing={4} sx={{ py: 6 }}>
        <Box>
          <Typography variant="h1" component="h1" gutterBottom>
            Welcome to Reverso
          </Typography>
          <Typography variant="h4" component="h4" gutterBottom>
            Powered by TypeScript & Redux
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Explore the power of a custom Material UI theme with elegant fonts,
            shadows, and color palettes tailored just for you.
          </Typography>
        </Box>
        <Box display="flex" gap={2}>
          <RippleBadge badgeContent={4} color="secondary">
            <Button
              variant="contained"
              color="primary"
              sx={{
                transition: "all 0.2s",
                "&:hover": {
                  backgroundColor: "#2c2c2c", // slightly darker
                },
                "&:active": {
                  transform: "scale(0.98)",
                },
              }}
            >
              Press me
            </Button>
          </RippleBadge>
          <Button variant="outlined" color="secondary">
            View Products
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
